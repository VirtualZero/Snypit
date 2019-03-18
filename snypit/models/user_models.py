from snypit import db

class User(db.Model):
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    vzin = db.Column(db.String(8))
    email = db.Column(db.String(100), index=True)
    username = db.Column(db.String(20))
    pw_hash = db.Column(db.String(300))
    editor_theme = db.Column(db.String(50), default="seti")
    is_admin = db.Column(db.Boolean, default=False, index=True)
    account_created_on = db.Column(db.DateTime, default=db.func.now())
    account_cancelled_on = db.Column(db.DateTime, default=None)
    agreed_to_tos = db.Column(db.Boolean, default=True)
    account_created_from_ip = db.Column(db.String(45))
    locale = db.Column(db.String(5), nullable=False, server_default='en')
    login_count = db.Column(db.Integer, default=0)
    is_active = db.Column(db.Boolean(), default=True)
    verify_email_token = db.Column(db.String(300))
    email_confirmed = db.Column(db.Boolean, default=False)
    email_confirmed_on = db.Column(db.DateTime, default=None)

    def __init__(
        self,
        vzin,
        username,
        email,
        pw_hash,
        is_admin,
    ):

        self.vzin = vzin
        self.username = username
        self.email = email
        self.pw_hash = pw_hash
        self.is_admin = is_admin

class AccountActivity(db.Model):
    __tablename__ = 'accountactivity'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), index=True)
    login = db.Column(db.DateTime)
    logout = db.Column(db.DateTime)
    login_from_ip = db.Column(db.String(45))
    session_owner = db.relationship(
        'User',
        backref='account_activity',
        foreign_keys=[user_id]
    )

    def __init__(
        self,
        user_id,
        login,
        login_from_ip,
    ):
        
        self.user_id = user_id
        self.login = login
        self.login_from_ip = login_from_ip
