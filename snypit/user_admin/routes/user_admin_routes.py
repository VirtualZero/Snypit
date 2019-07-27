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
    validate_vzin,
    get_language_icon
)
from snypit.forms.forms import (
    NewSnippetForm,
    SearchForm
)
from snypit.models.snippet_models import Snippet
from sqlalchemy import and_, desc
import random
import string


@app.route('/dashboard')
@login_required
@validate_vzin
def dashboard():
    if request.args.get('login'):
        flash('Logged in.')

    last_viewed_snippet = Snippet.query.filter_by(
        user_id=session['user_id']
    ).order_by(
        desc(
            Snippet.last_viewed
        )
    ).first()

    last_viewed_snippet.last_viewed = db.func.now()

    if last_viewed_snippet.tags:
        last_viewed_snippet.tags = last_viewed_snippet.tags.replace(',', ', ')

    pinned_snippets = Snippet.query.filter(
        and_(
            Snippet.user_id == session['user_id'],
            Snippet.pinned == True
        )
    ).order_by(
        desc(
            Snippet.added_on
        )
    ).all()

    recent_snippets = Snippet.query.filter_by(
        user_id=session['user_id']
    ).order_by(
        desc(
            Snippet.added_on
        )
    ).limit(
        5
    ).all()

    popular_snippets = Snippet.query.filter_by(
        user_id=session['user_id']
    ).order_by(
        desc(
            Snippet.times_viewed
        )
    ).limit(
        5
    ).all()

    db.session.commit()

    return render_template(
        'user_admin/dashboard.html',
        title=f'Dashboard - {session["username"].title()}',
        last_viewed_snippet=last_viewed_snippet,
        search_form=SearchForm(),
        pinned_snippets=pinned_snippets,
        recent_snippets=recent_snippets,
        popular_snippets=popular_snippets
    )


@app.route('/get-snippet')
@login_required
@validate_vzin
def get_snippet():
    snippet = Snippet.query.filter_by(
        vzsid=request.args.get('vzsid')
    ).first_or_404()

    if snippet.user_id != session['user_id']:
        abort(403)

    snippet.times_viewed+=1
    snippet.last_viewed = db.func.now()
    db.session.commit()

    if snippet.tags:
        snippet.tags = snippet.tags.replace(',', ', ')

    return render_template(
        'user_admin/sections/dashboard_editor_section.html',
        snippet=snippet
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

        tags = request.form['tags'] if request.form['tags'] else None

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

        pinned = True if request.form['pin'] == 'True' else False

        vzsid = ''
        unique = False

        while not unique:
            for _ in range(32):
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
            get_language_icon(new_snippet_form.language.data.split('||')[0]),
            new_snippet_form.language.data.split('||')[1],
            new_snippet_form.description.data.strip(),
            request.form['snippet'],
            tags,
            pinned
        )

        db.session.add(new_snippet)
        db.session.flush()
        db.session.commit()

        return jsonify(
            {
                'status': 'success',
                'language_icon': new_snippet.language_icon
            }
        ), 200

    errors = {}

    for fieldName, errorMessages in new_snippet_form.errors.items():
        errors[fieldName] = errorMessages[0]

    return jsonify(
        {
            'status': 'error',
            'errors': errors
        }
    ), 400
    

@app.route('/get-new-snippet-form')
def get_new_snippet_form():
    new_snippet_form = NewSnippetForm()
    return render_template(
        'user_admin/snippet/section_render/new_snippet_form_section.html',
        new_snippet_form=new_snippet_form
    )
