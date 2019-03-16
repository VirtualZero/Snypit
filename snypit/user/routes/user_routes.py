from flask import render_template, jsonify
from snypit import app
from snypit.forms.forms import LoginForm, CreateAccountForm
from time import sleep

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
        sleep(30)
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
