from snypit import app
from flask import (
    render_template, 
    session, 
    flash, 
    request
)
from snypit.user_admin.helpers.user_admin_helpers import login_required


@app.route('/dashboard')
@login_required
def dashboard():
    if request.args.get('login'):
        flash('Logged In.')

    return render_template(
        'user_admin/dashboard.html',
        title=f'Dashboard - {session["username"]}'
    )
