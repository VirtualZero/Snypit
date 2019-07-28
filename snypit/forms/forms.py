from flask_wtf import FlaskForm
from wtforms import (
    StringField, 
    PasswordField, 
    HiddenField, 
    SelectField,
    TextAreaField
)
from wtforms.validators import (
    DataRequired, 
    email, 
    Length, 
    EqualTo, 
    ValidationError
)
from snypit import db, bcrypt
from snypit.models.user_models import User
from flask import flash


class LoginForm(FlaskForm):
    def valid_user(form, field):
        user = User.query.filter_by(
            email=field.data
        ).first()

        if not user:
            raise ValidationError(
                'Incorrect email address.'
            )

        if not user.email_confirmed:
            flash('Please confirm you email first.')
            raise ValidationError(
                'unconfirmed_email'
            )


    def valid_pw(form, field):
        user = User.query.filter_by(
            email=form.email.data
        ).first()

        if not user:
            pass

        else:
            validated_pw = bcrypt.check_password_hash(
                user.pw_hash, 
                form.password.data
            )

            if not validated_pw:
                raise ValidationError(
                    'Incorrect password.'
                )


    email = StringField(
        'Email', 
        [
            email(), 
            DataRequired(
                message='This field is required.'
            ),
            Length(
                max=100
            ),
            valid_user
        ]
    )

    password = PasswordField(
        'Password', 
        [
            DataRequired(
                message='This field is required.'
            ), 
            Length(
                min=8,
                max=128
            ),
            valid_pw
        ]
    )


class CreateAccountForm(FlaskForm):
    def unique_user(form, field):
        existing_user = User.query.filter_by(
            email=field.data
        ).first()

        if existing_user:
            raise ValidationError(
                'That email address is taken.'
            )


    username = StringField(
        'Username', 
        [
            DataRequired(
                message='This field is required.'
            ),
            Length(max=20)    
        ]
    )

    email = StringField(
        'Email', 
        [
            DataRequired(
                message='This field is required.'
            ), 
            email(),
            Length(max=100),
            unique_user
        ]
    )

    password = PasswordField(
        'Password', 
        [
            DataRequired(
                message='This field is required.'
            ), 
            Length(
                min=8,
                max=128
            )
        ]
    )

    confirm_password = PasswordField(
        'Confirm Password', 
        [
            DataRequired(
                message='This field is required.'
            ), 
            Length(
                min=8,
                max=128
            ), 
            EqualTo(
                'password', 
                message='Passwords must match.'
            )
        ]
    )


class Reset_Confirm_Email_Form(FlaskForm):
    def unique_user(form, field):
        existing_user = User.query.filter_by(
            email=field.data
        ).first()

        if existing_user:
            raise ValidationError(
                'That email address is taken.'
            )

    
    def valid_pw(form, field):
        user = User.query.filter_by(
            email=form.old_email.data
        ).first()

        validated_pw = bcrypt.check_password_hash(
            user.pw_hash, 
            form.password.data
        )

        if not validated_pw:
            raise ValidationError(
                'Incorrect password.'
            )


    email = StringField(
        'New Email Address', 
        [
            email(), 
            DataRequired(
                message='This field is required.'
            ),
            unique_user,
            Length(
                max=100
            )
        ]
    )

    old_email = HiddenField(
        "old_email"
    )

    password = PasswordField(
        'Password', 
        [
            DataRequired(
                message='This field is required.'
            ), 
            Length(
                min=8,
                max=128
            ),
            valid_pw
        ]
    )


class ForgotPasswordForm(FlaskForm):
    def valid_user(form, field):
        user = User.query.filter_by(
            email=field.data
        ).first()

        if not user:
            raise ValidationError(
                'Incorrect email address.'
            )

        if not user.email_confirmed:
            flash('Please confirm you email first.')
            raise ValidationError(
                'unconfirmed_email'
            )
            
    forgot_password_email = StringField(
        "Your Email Address",
        [
            DataRequired(
                message='This field is required.'
            ),
            email(),
            Length(
                max=100,
                message="Email cannot exceed 150 characters."
            ),
            valid_user
        ]
    )


class ResetPasswordForm(FlaskForm):
    reset_password = PasswordField(
        "New Password",
        [
            DataRequired(
                message='This field is required.'
            ),
            Length(
                min=8,
                max=128
            )
        ]
    )

    confirm_reset_password = PasswordField(
        "Confirm New Password",
        [
            DataRequired(
                message='This field is required.'
            ),
            Length(
                min=8,
                max=128
            ),
            EqualTo(
                'reset_password',
                message="Passwords must match."
            )
        ]
    )

    email = HiddenField(
        "email"
    )


class NewSnippetForm(FlaskForm):
    def valid_language(form, field):
        if field.data == 'none||none':
            raise ValidationError(
                'This field is required.'
            )

    snippet_name = StringField(
        'Snippet Title', 
        [
            DataRequired(
                message='This field is required.'
            ),
            Length(
                max=150
            )
        ]
    )

    language = SelectField(
        'Choose Language',
        [
            DataRequired(
                message='This field is required.'
            ),
            valid_language
        ],
        choices=[
            ('none||none', 'Choose Language'),
            ('C||clike', 'C'),
            ('CPlusPlus||clike', 'C++'),
            ('C#||clike', 'C#'),
            ('CSS||css', 'CSS'),
            ('HTML||xml', 'HTML'),
            ('HTTP||http', 'HTTP'),
            ('Java||clike', 'Java'),
            ('JavaScript||javascript', 'JavaScript'),
            ('Jinja2||jinja2', 'Jinja2'),
            ('Nginx||nginx', 'Nginx'),
            ('Perl||perl', 'Perl'),
            ('PHP||php', 'PHP'),
            ('PowerShell||powershell', 'PowerShell'),
            ('Python||python', 'Python'),
            ('Ruby||ruby', 'Ruby'),
            ('SASS||sass', 'Sass'),
            ('Shell||shell', 'Shell'),
            ('SQL||sql', 'SQL'),
            ('Visual Basic||vb', 'Visual Basic'),
            ('VBScript||vbscript', 'VBScript'),
            ('YAML||yaml', 'YAML'),
            ('YAML Front Matter||yaml-frontmatter', 'YAML Front Matter'),
        ]
    )

    description = TextAreaField(
        'Description',
        [
            DataRequired(
                message='This field is required.'
            ),
            Length(
                max=1500
            )
        ]
    )


class SearchForm(FlaskForm):
    search_text = StringField(
        'Search Snippets', 
        [
            DataRequired(),
            Length(
                max=100
            )
        ]
    )


class UpdateUsername(FlaskForm):
    username = StringField(
        'Username',
        [
            DataRequired(
                message='This field is required.'
            ),
            Length(max=20)
        ]
    )


class UpdateEmail(FlaskForm):
    def unique_user(form, field):
        existing_user = User.query.filter_by(
            email=field.data
        ).first()

        if existing_user:
            raise ValidationError(
                'That email address is taken.'
            )

    email = StringField(
        'Email',
        [
            DataRequired(
                message='This field is required.'
            ),
            email(),
            Length(max=100),
            unique_user
        ]
    )


class UpdatePassword(FlaskForm):
    password = PasswordField(
        "New Password",
        [
            DataRequired(
                message='This field is required.'
            ),
            Length(
                min=8,
                max=128
            )
        ]
    )

    confirm_password = PasswordField(
        "Confirm New Password",
        [
            DataRequired(
                message='This field is required.'
            ),
            Length(
                min=8,
                max=128
            ),
            EqualTo(
                'password',
                message="Passwords must match."
            )
        ]
    )
