from flask import request, jsonify, Blueprint
from pymongo import MongoClient
from .recommendation import Recommendation
import json


bp = Blueprint("game", __name__, "/")
client = MongoClient("mongodb+srv://Chromato:Cookiejar34@masterproject.4stlgqr.mongodb.net/?retryWrites=true&w=majority")
db = client['vgrec']
games = db["games"]


# game id look up: return a json file
@bp.route("/<int:game_id>")
def get_game_by_id(game_id):
    """
    finds the game by id. Useful for profile look up
    for example:
        localhost:5000/20 --> a game profile page
        click on a game --> retrieve the game id --> direct to a game profile url
    :param game_id:
    :return:
        a json containing the game info
    """
    result = games.find_one({"id": game_id})
    # pop the id
    if result:
        del result['_id']
        return jsonify(result)
    else:
        return jsonify({"result": 0})


# game name look up: return a json file:
@bp.route("/<string:game_name>")
def get_game_rec_by_name(game_name):
    """
    get a list of recommendation based on the game

    :param game_name:
    :return: a list of recommendation
    """
    print(game_name)
    rec = Recommendation()
    result = Recommendation.content_based_rec_by_name(rec, game_name)
    for x in result:
        print(x)
    return jsonify(result)


# recommendation engine: based on user input, input are name
@bp.route("/search")
def get_game():
    """
    for front end:
        call this api everytime the user enters a character in the search bar.
        display the return as a list of game for user to select
    :return:
        a list of game that matches the current string/keyword
    """
    keywords = request.args.get("keywords")
    # search the game db by name: keyword = game name:
    result = games.find({"name": {"$regex": keywords}})
    # todo: X. return the result as json
    results = []
    if result:
        for doc in result:
            del doc['_id']
            results.append(doc)
        return jsonify(results)

    return jsonify({"result": 0})


# filter and get a list of games based on attributes (popularity)
@bp.route("/ranking")
def get_ranking():
    # todo: 1. connect to the database

    # todo: 2. select an attribute

    # todo: 3. input the attribute and sort based on that

    # todo: 4. return the list to the frontend
    return jsonify({})



