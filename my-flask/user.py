from flask import Flask, request, render_template, sessions
from app import app


@app.route("/info")
def info():
    # request user information
    # 1. connect to the database(MongoDB)

    # 2. determine if the user has logged in or not
    sessions.permanent = False;

    # 3. retrieve from the database

    # 4. return the data as json
    return ""


@app.route("/login")
def login():
    # prompt the user to log in and return whether success or not:

    # 1. get username and password from client

    # 2. validate
    validate = False

    # 3. set session, only if the validation pass
    if validate:
        sessions.SessionInterface.open_session(app, request)

    # 4. return true if success, else false
    return False

