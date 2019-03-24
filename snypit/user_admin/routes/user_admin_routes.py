from snypit import app
from flask import (
    render_template, 
    session, 
    flash, 
    request,
    abort,
    jsonify
)
from snypit.user_admin.helpers.user_admin_helpers import (
    login_required,
    validate_vzin
)
from snypit.forms.forms import (
    NewSnippetForm
)
from flask_wtf.csrf import CSRFError
from snypit.forms.forms import (
    NewSnippetForm
)


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


@app.route('/new-snippet-submit', methods=['POST'])
@login_required
def new_snippet_submit():
    new_snippet_form = NewSnippetForm()

    if new_snippet_form.validate_on_submit():
        if len(request.form['tags']) > 500:
            return jsonify(
                {
                    'status': 'error',
                    'errors': {
                        'tags': 'There are too many tags.'
                    }
                }
            ), 400

        if len(request.form['snippet']) > 50000:
            return jsonify(
                {
                    'status': 'error',
                    'errors': {
                        'snippet': 'Cannot exceed 50,000 characters.'
                    }
                }
            ), 400

        return jsonify(
            {
                'status': 'success'
            }
        )

    errors = {}

    for fieldName, errorMessages in new_snippet_form.errors.items():
        errors[fieldName] = errorMessages[0]

    return jsonify(
        {
            'status': 'error',
            'errors': errors
        }
    ), 400
