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


def get_language_icon(language):
    language_icon = None

    if language == 'CSS':
        language_icon = '<i class="fab fa-css3-alt"></i>'

    if language == 'HTML':
        language_icon = '<i class="fab fa-html5"></i>'

    if language == 'Java':
        language_icon = '<i class="fab fa-java"></i>'

    if language == 'JavaScript':
        language_icon = '<i class="fab fa-js"></i>'

    if language == 'PHP':
        language_icon = '<i class="fab fa-php"></i>'

    if language == 'PowerShell':
        language_icon = '<i class="fas fa-terminal"></i>'

    if language == 'Python':
        language_icon = '<i class="fab fa-python"></i>'

    if language == 'SASS':
        language_icon = '<i class="fab fa-sass"></i>'

    if language == 'Shell':
        language_icon = '<i class="fas fa-terminal"></i>'

    if language == 'SQL':
        language_icon = '<i class="fas fa-database"></i>'

    if not language_icon:
        language_icon = '<i class="fas fa-file-code"></i>'

    return language_icon
