from flask import request, jsonify, Blueprint
from pymongo import MongoClient

bp = Blueprint("game", __name__, "/")
client = MongoClient("mongodb+srv://xtang10:tang123456@gamerecom.yyg15zm.mongodb.net/?retryWrites=true&w=majority")
db = client.gettingStarted

# game id look up: return a json file
@bp.route("/<int:id>")
def get_game_by_id(id):
    # search for games from the database

    # todo: 1. connect to the database

    # todo: 2. retrieve from database

    # todo: 3. return the data
    return jsonify({})

# game name look up: return a json file:
@bp.route("/<string:keywords>")
def get_game_by_name(keywords):

    # todo: 1. connect to the database

    # todo: 2. process the keywords: XXX+XXX+XXX (format): replace + by " "

    # todo: 3. query the keywords and look for match

    # todo: 4. return the json file

    return jsonify({})


# recommendation engine: based on user input, input are name
@bp.route("/search")
def get_recommendation():
    # recommendation engine goes here, request with keywords: ?keywords=xxx
    keywords = request.args.get("keywords")
    # todo: 1. recommendation algorithm goes here:

    # keywords will be used as input for the algo

    # todo: X. return the result as json

    return jsonify({})


# filter and get a list of games based on attributes (popularity)
@bp.route("/ranking")
def get_ranking():
    # todo: 1. connect to the database

    # todo: 2. select an attribute

    # todo: 3. input the attribute and sort based on that

    # todo: 4. return the list to the frontend
    return jsonify({})
