from snypit import app
from flask import (
    render_template, 
    session, 
    flash, 
    request
)

@app.route('/dashboard')
def dashboard():
    if request.args.get('login'):
        flash('Logged In.')

    return render_template(
        'user_admin/dashboard.html',
        title=f'Dashboard - {session["username"]}'
    )