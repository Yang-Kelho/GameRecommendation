from flask import Blueprint, jsonify, session
from pymongo import MongoClient
from bson.objectid import ObjectId

bp = Blueprint("list", __name__, url_prefix="/")
client = MongoClient("mongodb+srv://xtang10:tang123456@gamerecom.yyg15zm.mongodb.net/?retryWrites=true&w=majority")
userdb = client['user']
list_collection = userdb["list"]


@bp.route("/list")
def get_recommend_list():
    # retrieve from the database:
    game_list = list_collection.find().limit(10)
    if game_list:
        game = []
        for doc in game_list:
            del doc['_id']
            game.append(doc)
        # return the list of games
        return jsonify(game)
    else:
        # if nothing found, return 0
        return jsonify({'result': 0})


@bp.route("/mylist")
def get_my_list():
    # get the user id if logged in:
    user_id = session.get("user_id")
    obj_id = ObjectId(user_id)
    # find it in the database:
    my_list = list_collection.find({"user_id": obj_id})
    if my_list:
        # return this list to the front end:
        jsonify(my_list)
    else:
        # if nothing found, return 0
        return jsonify({"result": 0})


# retrieve saved list from the user:
@bp.route("/saved")
def get_saved():

    return jsonify({})
