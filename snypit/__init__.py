from flask import Flask
from flask_wtf.csrf import CSRFProtect
import os
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_migrate import Migrate


app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ['APP_SECRET_KEY']
bcrypt = Bcrypt(app)
csrf = CSRFProtect(app)

# SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['SQL_DATABASE_URI']
app.config['SQLALCHEMY_ECHO'] = True
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Models
from snypit.models.user_models import (
    User, 
    AccountActivity,
    PasswordResetToken
)

# Routes
from snypit.user.routes import user_routes
from snypit.user_admin.routes import user_admin_routes
