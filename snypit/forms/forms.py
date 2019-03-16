from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField
from wtforms.validators import DataRequired, email, Length, EqualTo, Regexp


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
    username = StringField(
        'Username', 
        [DataRequired()]
    )

    email = StringField(
        'Email', 
        [
            DataRequired(), 
            email()
        ]
    )

    password = PasswordField(
        'Password', 
        [
            DataRequired(), 
            Length(min=8)
        ]
    )

    confirm_password = PasswordField(
        'Confirm Password', 
        [
            DataRequired(), 
            Length(
                min=8
            ), 
            EqualTo(
                'password', 
                message='Passwords must match.'
            )
        ]
    )
