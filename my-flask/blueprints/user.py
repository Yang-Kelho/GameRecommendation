from flask import request, jsonify, session, Blueprint
from .forms import RegisterForm, LoginForm
from werkzeug.security import generate_password_hash, check_password_hash
from pymongo import MongoClient

client = MongoClient("mongodb+srv://xtang10:tang123456@gamerecom.yyg15zm.mongodb.net/?retryWrites=true&w=majority")
db = client.gettingStarted
# import the user collection:
user = db.user

from exts import mail
from flask_mail import Message


bp = Blueprint("user", __name__, url_prefix="/")


@bp.route("/profile")
def profile():
    # request user profile
    # todo: 1. connect to the database(MongoDB)

    # todo: 2. determine if the user has logged in or not

    # todo: 3. retrieve from the database

    # todo: 4. return the data as json
    return ""


@bp.route("/login", methods=['POST'])
def login():

    # todo: 1. get username and password from client
    form = LoginForm(request.form)

    # todo: 2. validate
    if form.validate():
        username = form.username.data
        password = form.password.data
        a_user = user.find_one({"username": username})
        if a_user:
            # user exist:
            if check_password_hash(a_user.get("password"), password):

                print("login success!")
            else:
                return jsonify({"result": False})
        else:
            return jsonify({"result": False})

    # todo: 3. set session, only if the validation pass
    session['user_id'] = a_user.get("_id")
    # todo: 4. return true if success, else false
    return jsonify({"result": True})


@bp.route("/register", methods=['POST'])
def register():

    # todo: form validation
    form = RegisterForm(request.form)
    if form.validate():
        # todo: if success, insert the data into the db:
        email = form.email.data
        username = form.username.data
        password = form.password.data
        password = generate_password_hash(password)  # encrypt the password
        user.insert_one({"username": username, "password" : password, "email": email})

        return jsonify({"result": True})
    else:
        return jsonify({"result": False})


"""
    message = Message(
        subject="Game Recommendation Registration confirmation",
        sender="",  # email used to send confirmation emails
        recipients="",  # the email entered by the user
        body=""  # confirmation link, or just notice
    )

    # send the email
    mail.send(message)
    return "Successfully sent!"
    :return: 
"""


