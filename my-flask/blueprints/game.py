from flask import request, jsonify
from flask import Blueprint


bp = Blueprint("game", __name__, "/")


@bp.route("/<int:id>")
def get_game(id):
    # search for games from the database

    # todo: 1. connect to the database

    # todo: 2. retrieve from database

    # todo: 3. return the data
    return jsonify({})


@bp.route("/search")
def get_recommendation():
    # recommendation engine goes here, request with keywords: ?keywords=xxx
    keywords = request.args.get("keywords")
    # todo: 1. recommendation algorithm goes here:

    # keywords will be used as input for the algo

    # todo: X. return the result as json

    return jsonify({})
