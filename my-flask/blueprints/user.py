from flask import request, jsonify, session, Blueprint, make_response
from .forms import RegisterForm, LoginForm
from werkzeug.security import generate_password_hash, check_password_hash
from pymongo import MongoClient
from bson.objectid import ObjectId

# database connection
client = MongoClient("mongodb+srv://xtang10:tang123456@gamerecom.yyg15zm.mongodb.net/?retryWrites=true&w=majority")
userdb = client['user']
profile = userdb["profile"]
users = userdb['user']

bp = Blueprint("user", __name__, url_prefix="/")


@bp.route("/profile", methods=['GET'])
def get_my_profile():
    # request user profile
    if 'user_id' in session:
        user_id = session["user_id"]
    else:
        return jsonify({'result': False, 'message': 'Please login first!'})

    obj_id = ObjectId(user_id)
    if user_id:
        user_profile = profile.find_one({"_id": obj_id})
        # return the user profile to the front end
        del user_profile['_id']
        return jsonify(user_profile)
    else:
        return jsonify({"status": False, 'message': 'No user found'})


@bp.route("/login", methods=['POST'])
def login():
    # if session has user_id, that means the user has logged in already
    if 'user_id' in session:
        return 'You have logged in already!'
    # 1. get username and password from client
    form = LoginForm(request.form)
    # 2. validate
    if form.validate():
        username = form.username.data
        password = form.password.data
        a_user = users.find_one({"username": username})
        if a_user:
            # user exist:
            if check_password_hash(a_user.get("password"), password):
                session['user_id'] = str(a_user['_id'])
                return jsonify({"result": True, 'message': 'Login Success!'})
            else:
                return jsonify({"result": False, 'message': 'Invalid password!'})
        else:
            # a_user does not exist:
            return jsonify({"result": False, 'message': 'User does not exist!'})
    else:
        # form.validate() fails, return 0
        return jsonify({"result": False, 'message': 'Format Error!'})


@bp.route('/logout')
def logout():
    session.pop('user_id', None)
    return jsonify({'result': True, 'message': 'Logout Success!'})


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
        users.insert_one({"username": username, "password": password, "email": email})
        return jsonify({"result": True, 'message': 'Register Successfully!'})
    else:
        return jsonify({"result": False, 'message': 'Format Error!'})



