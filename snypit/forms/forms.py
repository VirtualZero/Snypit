from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, HiddenField
from wtforms.validators import DataRequired, email, Length, EqualTo, Regexp, ValidationError
from snypit import db, bcrypt
from snypit.models.user_models import User


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
                user.pw_hash, form.password.data
            )

            if not validated_pw:
                raise ValidationError(
                    'Incorrect password.'
                )


    email = StringField(
        'Email', 
        [
            email(), 
            DataRequired(),
            Length(
                max=100
            ),
            valid_user
        ]
    )

    password = PasswordField(
        'Password', 
        [
            DataRequired(), 
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
            user.pw_hash, form.password.data
        )

        if not validated_pw:
            raise ValidationError(
                'Incorrect password.'
            )


    email = StringField(
        'New Email Address', 
        [
            email(), 
            DataRequired(),
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
            DataRequired(), 
            Length(
                min=8,
                max=128
            ),
            valid_pw
        ]
    )
