from flask import Flask, request, render_template, sessions
from flask import Blueprint

from exts import mail
from flask_mail import Message


bp = Blueprint("user", __name__, url_prefix="/")


@bp.route("/info")
def info():
    # request user information
    # 1. connect to the database(MongoDB)

    # 2. determine if the user has logged in or not

    # 3. retrieve from the database

    # 4. return the data as json
    return ""


@bp.route("/login")
def login():
    # prompt the user to log in and return whether success or not:

    # 1. get username and password from client

    # 2. validate
    validate = False
    # 3. set session, only if the validation pass

    if validate and sessions.SessionInterface.is_null_session(app):
        sessions.SessionInterface.open_session(app, request)

    # 4. return true if success, else false
    return False


@bp.route("/register")
def register():
    message = Message(
        subject="Game Recommendation Registration confirmation",
        sender="",  # email used to send confirmation emails
        recipients="",  # the email entered by the user
        body=""  # confirmation link, or just notice
    )

    # send the email
    mail.send(message)
    return "Successfully sent!"

