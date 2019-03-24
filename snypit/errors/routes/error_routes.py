from flask import render_template
from flask_wtf.csrf import CSRFError
from snypit import app


@app.errorhandler(404)
def error_404(error):
    error_msg = "The page you're looking for does not exist."
    status_msg = "<strong>Status:</strong> Not Found"
    status_code = 404
    code_msg = "<strong>Status Code:</strong> "
    return render_template(
        'http_error/error.html',
        title="Not Found (404)",
        error_msg=error_msg,
        status_msg=status_msg,
        code_msg=code_msg,
        status_code=status_code), 404


@app.errorhandler(403)
def error_403(error):
    error_msg = "Permission Denied."
    status_msg = "<strong>Status:</strong> Forbidden"
    status_code = 403
    code_msg = "<strong>Status Code:</strong> "
    return render_template(
        'http_error/error.html',
        title="Forbidden (403)",
        error_msg=error_msg,
        status_msg=status_msg,
        code_msg=code_msg,
        status_code=status_code), 403


@app.errorhandler(500)
def error_500(error):
    error_msg = "Something went wrong on our end."
    status_msg = "<strong>Status:</strong> Internal Server Error"
    status_code = 500
    code_msg = "<strong>Status Code:</strong> "
    return render_template(
        'http_error/error.html',
        title="Internal Server Error (500)",
        error_msg=error_msg,
        status_msg=status_msg,
        code_msg=code_msg,
        status_code=status_code), 500


@app.errorhandler(405)
def error_405(error):
    error_msg = "Invalid request method."
    status_msg = "<strong>Status:</strong> Method Not Allowed"
    status_code = 405
    code_msg = "<strong>Status Code:</strong> "
    return render_template(
        'http_error/error.html',
        title="Internal Server Error (405)",
        error_msg=error_msg,
        status_msg=status_msg,
        code_msg=code_msg,
        status_code=status_code), 405


@app.errorhandler(CSRFError)
def error_csrf(error):
    error_msg = "The action you requested is forbidden."
    status_msg = "<strong>Status:</strong> CSRF Error"
    status_code = 403
    code_msg = "<strong>Status Code:</strong> "
    return render_template(
        'http_error/error.html',
        title="CSRF Error (403)",
        error_msg=error_msg,
        status_msg=status_msg,
        code_msg=code_msg,
        status_code=status_code), 403



