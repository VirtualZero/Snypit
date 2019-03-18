from functools import wraps
from flask import session, redirect, flash, url_for


def make_confirm_email_message(verify_email_token):
    verify_email_link = url_for(
        'confirm_snypit_email',
        token=verify_email_token,
        _external=True
    )

    return f'Thank you for choosing Snypit. Please click the following '\
        f'link to verify your email address: {verify_email_link}\n\n'\
        f'Enjoy using Snypit!\nThe VirtualZero Team'
