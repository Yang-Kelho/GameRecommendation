from flask import request, jsonify, session, Blueprint
from .forms import RegisterForm, LoginForm
from werkzeug.security import generate_password_hash, check_password_hash
from pymongo import MongoClient

client = MongoClient("mongodb+srv://xtang10:tang123456@gamerecom.yyg15zm.mongodb.net/?retryWrites=true&w=majority")
userdb = client.gettingStarted.user
user = userdb["user"]
profile = userdb["profile"]

'''
from exts import mail
from flask_mail import Message
'''

bp = Blueprint("user", __name__, url_prefix="/")


@bp.route("/profile", methods=['GET'])
def profile():
    # request user profile
    user_id = session.get("user_id")
    if user_id:
        user_profile = profile.find_one({"_id": user_id})
        # return the user profile to the front end
        return jsonify(user_profile)
    else:
        return jsonify({"status": 0})


@bp.route("/login", methods=['POST'])
def login():

    # 1. get username and password from client
    form = LoginForm(request.form)

    # 2. validate
    if form.validate():
        username = form.username.data
        password = form.password.data
        a_user = user.find_one({"username": username})
        if a_user:
            # user exist:
            if check_password_hash(a_user.get("password"), password):
                print("verification success!")
            else:
                return jsonify({"result": 0})
        else:
            return jsonify({"result": 0})

    # set session, only if the validation pass
    session['user_id'] = a_user.get("_id")
    # return true if success, else false
    return jsonify({"result": 1})


@bp.route("/register", methods=['POST'])
def register():

    # form validation
    form = RegisterForm(request.form)
    if form.validate():
        # if success, insert the data into the db:
        email = form.email.data
        username = form.username.data
        password = form.password.data
        password = generate_password_hash(password)  # encrypt the password
        user.insert_one({"username": username, "password" : password, "email": email})

        return jsonify({"result": 1})
    else:
        return jsonify({"result": 0})


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


