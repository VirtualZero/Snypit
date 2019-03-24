from snypit import (
    app,
    db
)
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
from snypit.models.snippet_models import Snippet
import random
import string


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

        if not request.form['tags']:
            tags = None

        else:
            tags = request.form['tags']

        if not request.form['snippet']:
            return jsonify(
                {
                    'status': 'error',
                    'errors': {
                        'snippet': 'This field is required.'
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

        if request.form['pin'] == 'True':
            pinned = True

        else:
            pinned = False

        vzsid = ''
        unique = False

        while not unique:
            for i in range(32):
                vzsid = f"{vzsid}{random.choice(string.ascii_uppercase + string.digits + string.ascii_lowercase)}"

            id_in_use = Snippet.query.filter_by(
                vzsid=vzsid
            ).first()

            if not id_in_use:
                unique = True

        if 'CPlusPlus' in new_snippet_form.language.data:
            new_snippet_form.language.data = 'C++||clike'

        new_snippet = Snippet(
            session['user_id'],
            vzsid,
            new_snippet_form.snippet_name.data.strip(),
            new_snippet_form.language.data.split('||')[0],
            new_snippet_form.language.data.split('||')[1],
            new_snippet_form.description.data.strip(),
            request.form['snippet'],
            tags,
            pinned
        )

        db.session.add(new_snippet)
        db.session.commit()

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
