from flask import request, jsonify, Blueprint
from pymongo import MongoClient
from .recommendation import Recommendation

# database connection
bp = Blueprint("game", __name__, "/game")
client = MongoClient("mongodb+srv://Chromato:Cookiejar34@masterproject.4stlgqr.mongodb.net/?retryWrites=true&w=majority")
db = client['vgrec']
games = db["games"]


# game id look up: return a json file
@bp.route("/<int:game_id>")
def search_game_by_id(game_id):
    result = games.find_one({"id": game_id})
    # pop the id
    if result:
        del result['_id']
        return jsonify(result)
    else:
        return jsonify({"result": False, 'message': 'No game found'})


# get 10 similar games by the game name
@bp.route("/recommendation")
def get_game_rec_by_name():
    game = request.args.get("game")
    print(game)
    rec = Recommendation()
    result = Recommendation.content_based_rec_by_name(rec, game)
    for x in result:
        print(x)
    return jsonify(result)


# get list of game by the keywords
@bp.route("/search")
def search_games():
    keywords = request.args.get("keywords")
    result = games.find({"name": {"$regex": keywords}})
    results = []
    if result:
        for doc in result:
            del doc['_id']
            results.append(doc)
        return jsonify(results)

    return jsonify({"result": False, 'message': 'No result found'})




