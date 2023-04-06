from flask import Blueprint, jsonify, session
from pymongo import MongoClient

bp = Blueprint("list", __name__, url_prefix="/")
client = MongoClient("mongodb+srv://xtang10:tang123456@gamerecom.yyg15zm.mongodb.net/?retryWrites=true&w=majority")
userdb = client.gettingStarted.user
list_collection = userdb["list"]


@bp.route("/list")
def get_recommend_list():
    # retrieve from the database:
    game_list = list_collection.find().limit(10)
    # return it:
    return jsonify({game_list})


@bp.route("/mylist")
def get_my_list():
    # get the user id if logged in:
    user_id = session.get("user_id")
    # find it in the database:
    my_list = list_collection.find({"user_id": user_id})
    # return this list to the front end:
    return jsonify(my_list)


# retrieve saved list from the user:
@bp.route("/saved")
def get_saved():

    return jsonify({})
