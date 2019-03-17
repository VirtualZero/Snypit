from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField
from wtforms.validators import DataRequired, email, Length, EqualTo, Regexp, ValidationError
from snypit import db
from snypit.models.user_models import User





class LoginForm(FlaskForm):
    email = StringField(
        'Email', 
        [
            email(), 
            DataRequired()
        ]
    )

    password = PasswordField(
        'Password', 
        [
            DataRequired(), 
            Length(
                min=8
            )
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
            DataRequired(),
            Length(max=20)    
        ]
    )

    email = StringField(
        'Email', 
        [
            DataRequired(), 
            email(),
            Length(max=100),
            unique_user
        ]
    )

    password = PasswordField(
        'Password', 
        [
            DataRequired(), 
            Length(
                min=8,
                max=128
            )
        ]
    )

    confirm_password = PasswordField(
        'Confirm Password', 
        [
            DataRequired(), 
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
