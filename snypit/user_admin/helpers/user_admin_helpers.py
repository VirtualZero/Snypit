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
        excluded_routes = [
            '/logout'
        ]

        if request.path not in excluded_routes:
            if request.args.get('vzin') != session['vzin']:
                return redirect(
                    f'{request.path}?vzin={session["vzin"]}&username={session["username"].title()}'
                )

            return f(*args, **kwargs)

    return decorated
