from flask import render_template, jsonify, request, redirect, flash, abort, url_for
from snypit import app, bcrypt, db
from snypit.forms.forms import LoginForm, CreateAccountForm, Reset_Confirm_Email_Form
from snypit.models.user_models import User
from itsdangerous import URLSafeTimedSerializer, SignatureExpired, BadTimeSignature
import os
import requests
from sqlalchemy import and_, desc


verify_email_serializer = URLSafeTimedSerializer(
    os.environ[
        'VERIFY_EMAIL_SERIALIZER_SECRET'
    ]
)


@app.route('/')
def landing():
    login_form = LoginForm()
    return render_template(
        'landing/landing.html',
        title='Snypit',
        login_form=login_form
    )


@app.route('/login-submit', methods=['POST'])
def login_submit():
    login_form = LoginForm()

    if login_form.validate_on_submit():
        return jsonify(
            {
                'status': 'success'
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

        new_user = User(
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
                "message": make_create_account_message(verify_email_token)
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


def make_create_account_message(verify_email_token):
    verify_email_link = url_for(
        'confirm_snypit_email',
        token=verify_email_token,
        _external=True
    )

    return f'Thank you for choosing Snypit. Please click the following '\
        f'link to verify your email address: {verify_email_link}\n\n'\
        f'Enjoy using Snypit!\nThe VirtualZero Team'


@app.route('/confirm-snypit-email/<token>')
def confirm_snypit_email(token):
    reset_confirm_email_form = Reset_Confirm_Email_Form()

    try:
        email = verify_email_serializer.loads(
            token,
            salt=os.environ['VERIFY_EMAIL_SALT'],
            max_age=60
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
                "message": make_reset_email_message(verify_email_token)
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

       
def make_reset_email_message(verify_email_token):
    verify_email_link = url_for(
        'confirm_snypit_email',
        token=verify_email_token,
        _external=True
    )

    return f'Thank you for choosing Snypit. Please click the following '\
        f'link to verify your email address: {verify_email_link}\n\n'\
        f'Enjoy using Snypit!\nThe VirtualZero Team'


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


def make_resend_email_message(verify_email_token):
    verify_email_link = url_for(
        'confirm_snypit_email',
        token=verify_email_token,
        _external=True
    )

    return f'Thank you for choosing Snypit. Please click the following '\
        f'link to verify your email address: {verify_email_link}\n\n'\
        f'Enjoy using Snypit!\nThe VirtualZero Team'


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
            "message": make_resend_email_message(verify_email_token)
        }
    )

    flash('Email Sent!')
    return jsonify(
        {
            "redirect_url": f'/email-confirmation-sent?email={email}'
        }
    )
    
    
    return jsonify(
        {
            'status': 'success'
        }
    )
