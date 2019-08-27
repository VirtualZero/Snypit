from snypit import (
    app,
    db,
    bcrypt
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
    SearchForm,
    UpdateUsername,
    UpdateEmail,
    UpdatePassword
)
from snypit.models.snippet_models import Snippet
from snypit.models.user_models import User
from sqlalchemy import and_, desc
import random
import string
import urllib
import re


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

    if not last_viewed_snippet:
        last_viewed_snippet = Snippet.query.get(1)

    if last_viewed_snippet: # For dev if db doesn't start @1
        last_viewed_snippet.last_viewed = db.func.now()

        if last_viewed_snippet.tags:
            if ',' in last_viewed_snippet.tags:
                last_viewed_snippet.tags = re.sub(',\s*', ', ', last_viewed_snippet.tags)

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

    return render_template(
        'user_admin/dashboard.html',
        title=f'Dashboard - {session["username"].title()}',
        last_viewed_snippet=last_viewed_snippet,
        search_form=SearchForm(),
        pinned_snippets=pinned_snippets,
        recent_snippets=recent_snippets,
        popular_snippets=popular_snippets
    )


@app.route('/dashboard-search')
@login_required
@validate_vzin
def dashboard_search():
    search_for = request.args.get('search-for').lower()
    search_match_list = []

    user_snippets = Snippet.query.filter_by(
        user_id=session['user_id']
    ).order_by(
        desc(
            Snippet.added_on
        )
    ).all()

    for user_snippet in user_snippets:
        if user_snippet.tags:
            if search_for in user_snippet.snippet_name.lower() or \
                search_for in user_snippet.language.lower() or \
                search_for in user_snippet.description.lower() or \
                search_for in user_snippet.tags.lower():
                search_match_list.append(user_snippet)

        else:
            if search_for in user_snippet.snippet_name.lower() or \
                search_for in user_snippet.language.lower() or \
                search_for in user_snippet.description.lower():
                search_match_list.append(user_snippet)

    return render_template(
        'user_admin/sections/search_results.html',
        search_match_list=search_match_list
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
@validate_vzin
def new_snippet_submit():
    new_snippet_form = NewSnippetForm()

    if new_snippet_form.validate_on_submit():
        if len(request.form['tags']) > 200:
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
    

@app.route('/edit-snippet-submit', methods=['POST'])
@login_required
@validate_vzin
def edit_snippet_submit():
    new_snippet_form = NewSnippetForm()

    if new_snippet_form.validate_on_submit():
        snippet = Snippet.query.filter_by(
            vzsid=request.args.get('vzsid')
        ).first_or_404()

        if len(request.form['tags']) > 200:
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

        if 'CPlusPlus' in new_snippet_form.language.data:
            new_snippet_form.language.data = 'C++||clike'

        snippet.snippet_name = new_snippet_form.snippet_name.data.strip()
        snippet.language_icon = get_language_icon(new_snippet_form.language.data.split('||')[0])
        snippet.codemirror_mode = new_snippet_form.language.data.split('||')[1]
        snippet.language = new_snippet_form.language.data.split('||')[0]
        snippet.description = new_snippet_form.description.data.strip()
        snippet.tags = tags
        snippet.pinned = pinned
        print(f"\n\n{request.form['snippet']}")
        snippet.snippet_content = request.form['snippet']

        db.session.commit()

        return jsonify(
            {
                'status': 'success',
                'language_icon': snippet.language_icon
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
@login_required
@validate_vzin
def get_new_snippet_form():
    new_snippet_form = NewSnippetForm()
    return render_template(
        'user_admin/snippet/section_render/new_snippet_form_section.html',
        new_snippet_form=new_snippet_form
    )


@app.route('/edit-snippet/<vzsid>')
@login_required
@validate_vzin
def edit_snippet(vzsid):
    snippet = Snippet.query.filter_by(
        vzsid=vzsid
    ).first_or_404()

    return render_template(
        'user_admin/snippet/edit_snippet.html',
        title='Edit Snippet',
        new_snippet_form=NewSnippetForm(),
        snippet=snippet
    )


@app.route('/delete-snippet/<vzsid>', methods=['POST'])
@login_required
@validate_vzin
def delete_snippet(vzsid):
    snippet = Snippet.query.filter_by(
        vzsid=vzsid
    ).first_or_404()

    db.session.delete(snippet)
    db.session.commit()

    flash('Snippet Deleted!')

    return jsonify(
        {
            'status': 'success'
        }
    ), 200


@app.route('/account/<username>')
@login_required
@validate_vzin
def account(username):
    user = User.query.filter_by(
        vzin=session['vzin']
    ).first()

    return render_template(
        'user_admin/account.html',
        title='Account',
        update_username=UpdateUsername(),
        user=user,
        update_email=UpdateEmail(),
        update_password=UpdatePassword()
    )


@app.route('/update-username', methods=['POST'])
@login_required
@validate_vzin
def update_username():
    update_username = UpdateUsername()

    if update_username.validate_on_submit():
        user = User.query.filter_by(
            vzin=session['vzin']
        ).first()

        user.username = update_username.username.data
        db.session.commit()

        session['username'] = update_username.username.data

        return jsonify(
            {
                'status': 'success'
            }
        ), 200
    
    errors = {}

    for fieldName, errorMessages in update_username.errors.items():
        errors[fieldName] = errorMessages[0]

    return jsonify(
        {
            'status': 'error',
            'errors': errors
        }
    ), 400

@app.route('/update-email', methods=['POST'])
@login_required
@validate_vzin
def update_email():
    update_email = UpdateEmail()

    if update_email.validate_on_submit():
        user = User.query.filter_by(
            vzin=session['vzin']
        ).first()

        user.email = update_email.email.data
        db.session.commit()

        session['email'] = update_email.email.data

        return jsonify(
            {
                'status': 'success'
            }
        ), 200

    errors = {}

    for fieldName, errorMessages in update_email.errors.items():
        errors[fieldName] = errorMessages[0]

    return jsonify(
        {
            'status': 'error',
            'errors': errors
        }
    ), 400


@app.route('/update-password', methods=['POST'])
@login_required
@validate_vzin
def update_password():
    update_password = UpdatePassword()

    if update_password.validate_on_submit():
        user = User.query.filter_by(
            vzin=session['vzin']
        ).first()

        user.pw_hash = bcrypt.generate_password_hash(
            update_password.password.data
        ).decode('utf-8')

        db.session.commit()

        return jsonify(
            {
                'status': 'success'
            }
        ), 200

    errors = {}

    for fieldName, errorMessages in update_password.errors.items():
        errors[fieldName] = errorMessages[0]

    return jsonify(
        {
            'status': 'error',
            'errors': errors
        }
    ), 400


@app.route('/update-theme', methods=['POST'])
@login_required
@validate_vzin
def update_theme():
    if request.method == 'POST':
        user = User.query.filter_by(
            vzin=session['vzin']
        ).first()

        user.editor_theme = request.form['theme']
        db.session.commit()

        session['editor_theme'] = request.form['theme']

        return jsonify(
            {
                'status': 'success'
            }
        ), 200
