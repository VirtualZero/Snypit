from functools import wraps
from flask import session, redirect, flash, url_for, request


def login_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        if 'vzin' not in session:
            flash('You are not logged in.')
            return redirect(
                url_for('landing')
            )

        return f(*args, **kwargs)

    return decorated


def validate_vzin(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        if request.args.get('vzin') != session['vzin']:
            return redirect(
                f'/dashboard?vzin={session["vzin"]}&username={session["username"].title()}'
            )

        return f(*args, **kwargs)

    return decorated
