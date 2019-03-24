from snypit import db

class Snippet(db.Model):
    id = db.Column(
        db.Integer, 
        primary_key=True
    )

    user_id = db.Column(
        db.Integer, 
        db.ForeignKey('user.id'), 
        index=True
    )

    vzsid = db.Column(
        db.String(32)
    )

    snippet_name = db.Column(
        db.String(150)
    )

    language = db.Column(
        db.String(150)
    )

    language_icon = db.Column(
        db.String(150)
    )

    codemirror_mode = db.Column(
        db.String(50)
    )

    description = db.Column(
        db.String(1500)
    )

    snippet_content = db.Column(
        db.String(50000)
    )

    tags = db.Column(
        db.String(500)
    )

    pinned = db.Column(
        db.Boolean
    )

    added_on = db.Column(
        db.DateTime, 
        default=db.func.now()
    )

    last_modified = db.Column(
        db.DateTime
    )

    times_viewed = db.Column(
        db.Integer, 
        default=1
    )

    last_viewed = db.Column(
        db.DateTime, 
        default=db.func.now()
    )
    
    snippet_owner = db.relationship(
        'User',
        backref='snippet',
        foreign_keys=[user_id]
    )


    def __init__(
        self,
        user_id,
        vzsid,
        snippet_name,
        language,
        language_icon,
        codemirror_mode,
        description,
        snippet_content,
        tags,
        pinned
    ):

        self.user_id = user_id
        self.vzsid = vzsid
        self.snippet_name = snippet_name
        self.language = language
        self.language_icon = language_icon
        self.codemirror_mode = codemirror_mode
        self.description = description
        self.snippet_content = snippet_content
        self.tags = tags
        self.pinned = pinned
