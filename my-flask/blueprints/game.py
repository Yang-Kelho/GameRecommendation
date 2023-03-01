from flask import Flask, request, render_template, jsonify
from flask import Blueprint


bp = Blueprint("game", __name__, "/")


@bp.route("/<int:id>")
def get_game(id):
    # search for games from the database

    # 1. connect to the database

    # 2. retrieve from database

    # 3. return the data
    return jsonify({})


@bp.route("/search")
def get_recommendation():
    # recommendation engine goes here, request with keywords: ?keywords=xxx
    keywords = request.args.get("keywords")
    # 1. recommendation algorithm goes here:
    # keywords will be used as input for the algo

    # X. return the result as json

    return jsonify({})
