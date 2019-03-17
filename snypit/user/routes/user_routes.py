from flask import render_template, jsonify, request, redirect, flash
from snypit import app, bcrypt, db
from snypit.forms.forms import LoginForm, CreateAccountForm
from snypit.models.user_models import User
from itsdangerous import URLSafeTimedSerializer, SignatureExpired, BadTimeSignature
import os



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

        return redirect('/create-account')

    errors = {}

    for fieldName, errorMessages in create_account_form.errors.items():
        errors[fieldName] = errorMessages[0]

    return jsonify(
        {
            'status': 'error',
            'errors': errors
        }
    ), 400
