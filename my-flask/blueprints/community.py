from flask import Blueprint, jsonify
from pymongo import MongoClient
bp = Blueprint("community", __name__, url_prefix="/")

client = MongoClient("mongodb+srv://xtang10:tang123456@gamerecom.yyg15zm.mongodb.net/?retryWrites=true&w=majority")
userdb = client.gettingStarted.user
post = userdb["post"]


@bp.route("/post/<int:number>")
def get_post(number):

    # the number is used to determine the page of records in mongodb
    post_list = {"post": post.find().limit(10).skip(number)}
    return jsonify(post_list)
