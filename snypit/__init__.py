from flask import Flask
from flask_wtf.csrf import CSRFProtect
import os
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_migrate import Migrate
from flask_assets import Bundle, Environment
from snypit.helpers.helpers import make_bundles


app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ['APP_SECRET_KEY']
bcrypt = Bcrypt(app)
csrf = CSRFProtect(app)
assets = Environment(app)


# SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['SQL_DATABASE_URI']
app.config['SQLALCHEMY_ECHO'] = True
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
migrate = Migrate(app, db)


# Assets
bundles = make_bundles()
assets.register('snypit_js', bundles['js'])
assets.register('snypit_css', bundles['css'])
assets.register('snypit_admin_js', bundles['admin_js'])
assets.register('snypit_admin_css', bundles['admin_css'])


# Models
from snypit.models.user_models import (
    User, 
    AccountActivity,
    PasswordResetToken
)
from snypit.models.snippet_models import (
    Snippet
)


# Routes
from snypit.errors.routes import error_routes
from snypit.user.routes import user_routes
from snypit.user_admin.routes import user_admin_routes
