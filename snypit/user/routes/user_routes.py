from flask import (
    render_template, 
    jsonify, 
    request, 
    redirect, 
    flash, 
    abort, 
    url_for, 
    session
)
from snypit.forms.forms import (
    LoginForm, 
    CreateAccountForm, 
    Reset_Confirm_Email_Form,
    ForgotPasswordForm,
    ResetPasswordForm
)
from snypit import (
    app, 
    bcrypt, 
    db
)
from itsdangerous import (
    URLSafeTimedSerializer, 
    SignatureExpired, 
    BadTimeSignature
)
from sqlalchemy import (
    and_, 
    desc
)
from snypit.models.user_models import (
    User, 
    AccountActivity,
    PasswordResetToken
)
import os
import requests
import string
import random
from snypit.user.helpers.user_helpers import (
    make_confirm_email_message,
    make_pw_reset_message
)


verify_email_serializer = URLSafeTimedSerializer(
    os.environ[
        'VERIFY_EMAIL_SERIALIZER_SECRET'
    ]
)

reset_password_serializer = URLSafeTimedSerializer(
    os.environ[
        'RESET_PASSWORD_SERIALIZER_SECRET'
    ]
)


@app.route('/')
def landing():
    login_form = LoginForm()

    if request.args.get('confirmed'):
        flash('Your email has been confirmed.')

    return render_template(
        'landing/landing.html',
        title='Snypit',
        login_form=login_form
    )


@app.route('/login-submit', methods=['POST'])
def login_submit():
    login_form = LoginForm()

    if login_form.validate_on_submit():
        user = User.query.filter_by(
            email=login_form.email.data
        ).first()

        if not user:
            abort(403)

        new_account_activity = AccountActivity(
            user.id,
            db.func.now(),
            request.environ.get(
                'HTTP_X_REAL_IP',
                request.remote_addr
            )
        )

        db.session.add(new_account_activity)
        user.login_count+=1
        db.session.commit()

        session['current_session_id'] = new_account_activity.id
        session['vzin'] = user.vzin
        session['user_id'] = user.id
        session['email'] = user.email
        session['username'] = user.username
        session['is_admin'] = user.is_admin
        session['editor_theme'] = user.editor_theme

        return jsonify(
            {
                'redirect_url': f'/dashboard?vzin={user.vzin}&username={user.username}&login=True'
            }
        )

    errors = {}

    for fieldName, errorMessages in login_form.errors.items():
        errors[fieldName] = errorMessages[0]

    return jsonify(
        {
            'status': 'error',
            'errors': errors
        }
    ), 400


@app.route('/logout')
def logout():
    try:
        session_to_close = AccountActivity.query.filter_by(
            id=session['current_session_id']
        ).first()

        if session_to_close:
            session_to_close.logout = db.func.now()
            db.session.commit()

    except KeyError:
        pass

    except:
        pass

    try:
        del session['current_session_id']
        del session['vzin']
        del session['user_id']
        del session['email']
        del session['username']
        del session['is_admin']
        del session['editor_theme']

        flash('Logged Out.')
        return redirect('/')

    except KeyError:
        flash('You are not logged in.')
        return redirect('/')


@app.route('/create-account')
def create_account():
    create_account_form = CreateAccountForm()

    return render_template(
        'user/create_account.html',
        title='Create Account',
        create_account_form=create_account_form
    )


@app.route('/create-account-submit', methods=['POST'])
def create_account_submit():
    create_account_form = CreateAccountForm()

    if create_account_form.validate_on_submit():
        username = create_account_form.username.data.strip()
        email = create_account_form.email.data.strip()
        password = create_account_form.password.data

        account_created_from_ip = request.environ.get(
            'HTTP_X_REAL_IP', 
            request.remote_addr
        )

        if request.form['confirm_tos'] == 'True':
            confirmed_TOS = True

        else:
            return jsonify(
                {
                    'status': 'error',
                    'errors': {
                        'tos': 'tos error'
                    }
                }
            ), 400

        pw_hash = bcrypt.generate_password_hash(
            password
        ).decode('utf-8')

        is_admin = False

        verify_email_token = verify_email_serializer.dumps(
            email,
            salt=os.environ['VERIFY_EMAIL_SALT']
        )

        unique = False
        vzin = ""

        while not unique:
            for i in range(8):
                vzin = f"{vzin}{random.choice(string.ascii_uppercase + string.digits + string.ascii_lowercase)}"

            id_in_use = User.query.filter_by(
                vzin=vzin
            ).first()

            if not id_in_use:
                unique = True

        new_user = User(
            vzin,
            username,
            email,
            pw_hash,
            is_admin
        )

        db.session.add(new_user)
        db.session.flush()

        new_user.account_created_from_ip = account_created_from_ip
        new_user.agreed_to_tos = confirmed_TOS
        new_user.verify_email_token = verify_email_token
        new_user.email_confirmed = False
        db.session.commit()

        requests.post(
            'https://mailapi.virtualzero.tech/mail/send-mail',
            headers={
                'X-API-KEY': os.environ['MAIL_API_KEY']
            },
            json={
                "recipients": [email],
                "subject": "Snypit - Please confirm your email.",
                "message": make_confirm_email_message(verify_email_token)
            }
        )

        flash('Account Created!')
        return jsonify(
            {
                "redirect_url": f'/email-confirmation-sent?email={email}'
            }
        )

    errors = {}

    for fieldName, errorMessages in create_account_form.errors.items():
        errors[fieldName] = errorMessages[0]

    return jsonify(
        {
            'status': 'error',
            'errors': errors
        }
    ), 400


@app.route('/confirm-snypit-email/<token>')
def confirm_snypit_email(token):
    reset_confirm_email_form = Reset_Confirm_Email_Form()

    try:
        email = verify_email_serializer.loads(
            token,
            salt=os.environ['VERIFY_EMAIL_SALT'],
            max_age=86400
        )

        account_to_update = User.query.filter(
            and_(
                User.email == email,
                User.verify_email_token == token
            )
        ).first()

        if not account_to_update:
            abort(404)

        if account_to_update.email_confirmed == True:
            flash('Your email has been confirmed.')
            return redirect('/')

        account_to_update.email_confirmed = True
        account_to_update.email_confirmed_on = db.func.now()
        db.session.commit()

        flash('Your email has been confirmed.')

        return redirect('/')

    except SignatureExpired:
        email_to_resend = User.query.filter_by(
            verify_email_token=token).first()

        if not email_to_resend:
            flash('Invalid Email Address!')
            return redirect('/')

        email = email_to_resend.email
        flash('Link Expired')
        error_msg = "The email confirmation link is expired."
        status_msg = "Status: SignatureExpired"

        return render_template(
            'user/confirm_email_error.html',
            title="Link Expired",
            error_msg=error_msg,
            status_msg=status_msg,
            email=email,
            token=token,
            reset_confirm_email_form=reset_confirm_email_form
        )

    except BadTimeSignature:
        flash('Invalid Email Token')
        return redirect('/')

    except:
        flash('Unknown Email Confirmation Error. Try Again.')
        return redirect('/')


@app.route('/reset-confirmation-email', methods=['POST'])
def reset_confirmation_email():
    reset_confirm_email_form = Reset_Confirm_Email_Form()

    if reset_confirm_email_form.validate_on_submit():
        old_email = reset_confirm_email_form.old_email.data

        account_to_update = User.query.filter_by(
            email=old_email
        ).first()

        verify_email_token = verify_email_serializer.dumps(
            reset_confirm_email_form.email.data,
            salt=os.environ['VERIFY_EMAIL_SALT']
        )

        account_to_update.email = reset_confirm_email_form.email.data
        account_to_update.email_confirmed = False
        account_to_update.verify_email_token = verify_email_token
        db.session.commit()

        requests.post(
            'https://mailapi.virtualzero.tech/mail/send-mail',
            headers={
                'X-API-KEY': os.environ['MAIL_API_KEY']
            },
            json={
                "recipients": [reset_confirm_email_form.email.data],
                "subject": "Snypit - Please confirm your email.",
                "message": make_confirm_email_message(verify_email_token)
            }
        )

        flash('Email Updated!')
        return jsonify(
            {
                "redirect_url": f'/email-confirmation-sent?email={account_to_update.email}'
            }
        )

    errors = {}

    for fieldName, errorMessages in reset_confirm_email_form.errors.items():
        errors[fieldName] = errorMessages[0]

    return jsonify(
        {
            'status': 'error',
            'errors': errors
        }
    ), 400


@app.route('/email-confirmation-sent')
def email_confirmation_sent():
    reset_confirm_email_form = Reset_Confirm_Email_Form()
    email = request.args.get('email')
    return render_template(
        'user/email_confirmation_sent.html',
        title="Email Confirmation Sent",
        email=email,
        reset_confirm_email_form=reset_confirm_email_form
    )


@app.route('/resend-email-confirmation', methods=['POST'])
def resend_email_confirmation():
    email = request.form['email']
    user = User.query.filter_by(
        email=email
    ).first()

    if not user:
        abort(403)

    if user.email_confirmed:
        return jsonify(
            {
                'status': 'confirmed'
            }
        ), 400

    verify_email_token = verify_email_serializer.dumps(
        email,
        salt=os.environ['VERIFY_EMAIL_SALT']
    )

    user.verify_email_token = verify_email_token
    db.session.commit()

    requests.post(
        'https://mailapi.virtualzero.tech/mail/send-mail',
        headers={
            'X-API-KEY': os.environ['MAIL_API_KEY']
        },
        json={
            "recipients": [email],
            "subject": "Snypit - Please confirm your email.",
            "message": make_confirm_email_message(verify_email_token)
        }
    )

    flash('Email Sent!')
    return jsonify(
        {
            "redirect_url": f'/email-confirmation-sent?email={email}'
        }
    )


@app.route('/forgot-password')
def forgot_password():
    forgot_password_form = ForgotPasswordForm()
    return render_template(
        'user/forgot_password.html',
        title='Forgot Password',
        forgot_password_form=forgot_password_form)


@app.route('/send-password-reset-link', methods=['POST'])
def send_password_reset_link():
    forgot_password_form = ForgotPasswordForm()

    if forgot_password_form.validate_on_submit():
        email = forgot_password_form.forgot_password_email.data

        user = User.query.filter_by(
            email=email
        ).first()

        if not user:
            abort(403)

        forgot_password_token = reset_password_serializer.dumps(
            email,
            salt=os.environ['RESET_PASSWORD_SALT']
        )

        existing_token = PasswordResetToken.query.filter_by(
            user_id=user.id
        ).first()

        if existing_token:
            existing_token.pw_reset_token = forgot_password_token

        else:
            new_token = PasswordResetToken(
                user.id,
                forgot_password_token
            )

            db.session.add(new_token)
            
        db.session.commit()

        requests.post(
            'https://mailapi.virtualzero.tech/mail/send-mail',
            headers={
                'X-API-KEY': os.environ['MAIL_API_KEY']
            },
            json={
                "recipients": [email],
                "subject": "Snypit - Password Reset Link",
                "message": make_pw_reset_message(forgot_password_token)
            }
        )

        return jsonify(
            {
                'status': 'success'
            }
        ), 200

    errors = {}

    for fieldName, errorMessages in forgot_password_form.errors.items():
        errors[fieldName] = errorMessages[0]

    return jsonify(
        {
            'status': 'error',
            'errors': errors
        }
    ), 400


@app.route('/reset-password/<token>')
def reset_password(token):
    try:
        email = reset_password_serializer.loads(
            token,
            salt=os.environ['RESET_PASSWORD_SALT'],
            max_age=86400
        )

        user = User.query.filter_by(
            email=email
        ).first()

        if not user:
            abort(403)

        reset_password_form = ResetPasswordForm()

        return render_template(
            'user/reset_password.html',
            title='Reset Password',
            email=email,
            reset_password_form=reset_password_form
        )

    except SignatureExpired:
        flash('Link Expired')
        return redirect('/forgot-password')

    except BadTimeSignature:
        flash('Bad Link')
        return redirect('/forgot-password')

    except:
        flash('Bad Link')
        return redirect('/forgot-password')


@app.route('/submit-new-password', methods=['POST'])
def submit_new_password():
    reset_password_form = ResetPasswordForm()

    if reset_password_form.validate_on_submit():
        password = reset_password_form.reset_password.data

        user = User.query.filter_by(
            email=reset_password_form.email.data
        ).first()

        if not user:
            abort(403)

        pw_hash = bcrypt.generate_password_hash(
            password
        ).decode(
            'utf-8'
        )

        user.pw_hash = pw_hash
        db.session.commit()

        flash("Password Reset!")

        return jsonify(
            {
                'redirect_url': '/'
            }
        ), 200

    errors = {}

    for fieldName, errorMessages in reset_password_form.errors.items():
        errors[fieldName] = errorMessages[0]

    return jsonify(
        {
            'status': 'error',
            'errors': errors
        }
    ), 400
