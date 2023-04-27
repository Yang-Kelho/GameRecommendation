from flask import Blueprint, jsonify
from pymongo import MongoClient
bp = Blueprint("community", __name__, url_prefix="/")

client = MongoClient("mongodb+srv://xtang10:tang123456@gamerecom.yyg15zm.mongodb.net/?retryWrites=true&w=majority")
userdb = client['user']
post = userdb["post"]


@bp.route("/post/<int:number>")
def get_post(number):

    # the number is used to determine the page of records in mongodb
    post_list = {"post": post.find().limit(10).skip(number)}
    if post_list:
        posts = []
        for doc in post_list:
            del doc['_id']
            posts.append(doc)
        # return it if exists:
        return jsonify(posts)
    else:
        # if nothing found, return 0
        return jsonify({'result': 0})
