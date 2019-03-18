from flask import url_for


def make_confirm_email_message(verify_email_token):
    verify_email_link = url_for(
        'confirm_snypit_email',
        token=verify_email_token,
        _external=True
    )

    return f'Thank you for choosing Snypit. Please click the following '\
        f'link to verify your email address: {verify_email_link}\n\n'\
        f'Enjoy using Snypit!\nThe VirtualZero Team'


def make_pw_reset_message(forgot_password_token):
    reset_password_link = url_for(
        'reset_password',
        token=forgot_password_token,
        _external=True
    )

    return f'Click the following link to reset your password:\n'\
        f'{reset_password_link}\n\n'\
        f'Enjoy using Snypit!\nThe VirtualZero Team'
