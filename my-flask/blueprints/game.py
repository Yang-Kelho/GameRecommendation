from flask import request, jsonify, Blueprint
from pymongo import MongoClient
from .recommendation import Recommendation

# database connection
bp = Blueprint("game", __name__, url_prefix="/game")
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

# Generate 10 random games
@bp.route("/random")
def get_random():
    # counter = 0
    # while True:
    #     random_game_list = []
    #     num = 10 * random.randint(1, 100)
    #     game = games.find_one({'id': num})
    #     if game:
    #         counter += 1
    #         random_game_list.append(game)
    #     if counter == 10:
    #         break
    my_list = games.aggregate([{'$sample': {'size': 10}}])
    random_list = []

    for doc in my_list:
        del doc['_id']
        random_list.append(doc)
    print(random_list)

    return jsonify(random_list)


@bp.route('/category')
def get_random_by_category():
    category = request.args.get('category')
    my_list = games.aggregate([{'$match': {'categories': category}}, {'$sample': {'size': 10}}])
    random_category_list = []

    if my_list:
        for doc in my_list:
            del doc['_id']
            random_category_list.append(doc)
        return jsonify(random_category_list)

    return jsonify({'result': False, 'message': 'Please enter a valid category'})


@bp.route('/recent')
def get_recent():
    recent_list = games.aggregate([{'$sort': {'id': -1}}, {'$limit': 10}])
    result_list = []
    if recent_list:
        for doc in recent_list:
            del doc['_id']
            result_list.append(doc)
        return jsonify(result_list)

    return jsonify({'result': False, 'message': 'No result found'})
