from flask import request, jsonify, Blueprint
from pymongo import MongoClient
from .recommendation import Recommendation


bp = Blueprint("game", __name__, "/")
client = MongoClient("mongodb+srv://Chromato:Cookiejar34@masterproject.4stlgqr.mongodb.net/?retryWrites=true&w=majority")
db = client['vgrec']
games = db["games"]

# game id look up: return a json file
@bp.route("/<int:id>")
def get_game_by_id(id):
    # todo: 2. retrieve from database
    result = games.find_one({"id": id})
    # pop the id
    del result['_id']
    return jsonify(result)

# game name look up: return a json file:
@bp.route("/<string:gamename>")
def get_game_rec_by_name(gamename):
    print(gamename)
    rec = Recommendation()
    result = Recommendation.content_based_rec_by_name(rec,gamename)
    return jsonify(result)


# recommendation engine: based on user input, input are name
@bp.route("/search")
def get_game():
    # recommendation engine goes here, request with keywords: ?keywords=xxx
    keywords = request.args.get("keywords")
    # search the game db by name: keyword = game name:
    result = games.find_one({"name": keywords})
    # todo: X. return the result as json
    del result['_id']
    return jsonify(result)


# filter and get a list of games based on attributes (popularity)
@bp.route("/ranking")
def get_ranking():
    # todo: 1. connect to the database

    # todo: 2. select an attribute

    # todo: 3. input the attribute and sort based on that

    # todo: 4. return the list to the frontend
    return jsonify({})



