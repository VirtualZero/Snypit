from snypit.models.snippet_models import Snippet
from snypit.models.user_models import User
from snypit import db

if __name__ == '__main__':
    new_user = User(
        'DEFAULT',
        'DEFAULT',
        'no@email.com',
        'jbFDN1jLwVNBj8Es4MatbLlG4UYr5XHCL5lPGSz6OWlJ4EKcyWpDfOvbCua9hjAo',
        0
    )

    db.session.add(new_user)
    db.session.flush()

    new_snippet = Snippet(
        new_user.id,
        'DEFAULT_SNIPPET',
        'Hello, World!',
        'Python',
        '<i class="fab fa-python"></i>',
        'python',
        'My first snippet! Prints "Hello, World!" in the terminal.',
        "if __name__ == '__main__':\n    print('Hello, World!')\n    exit(0)",
        'Python,Hello World!,First Snippet',
        True
    )

    db.session.add(new_snippet)
    db.session.commit()
    exit(0)
