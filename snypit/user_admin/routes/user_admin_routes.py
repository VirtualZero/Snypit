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
from snypit.forms.forms import (
    NewSnippetForm
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


@app.route('/new-snippet')
@login_required
@validate_vzin
def new_snippet():
    new_snippet_form = NewSnippetForm()
    return render_template(
        'user_admin/snippet/new_snippet.html',
        title='New Snippet',
        new_snippet_form=new_snippet_form
    )
