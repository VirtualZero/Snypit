from snypit import app
from flask import (
    render_template, 
    session, 
    flash, 
    request,
    abort
)
from snypit.user_admin.helpers.user_admin_helpers import (
    login_required,
    validate_vzin
)
from flask_wtf.csrf import CSRFError


@app.route('/dashboard')
@login_required
@validate_vzin
def dashboard():
    if request.args.get('login'):
        flash('Logged in.')

    return render_template(
        'user_admin/dashboard.html',
        title=f'Dashboard - {session["username"].title()}'
    )
