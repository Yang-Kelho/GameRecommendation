from flask import Blueprint, jsonify, session, request
from pymongo import MongoClient
from bson.objectid import ObjectId
bp = Blueprint("community", __name__, url_prefix="/post")

client = MongoClient("mongodb+srv://xtang10:tang123456@gamerecom.yyg15zm.mongodb.net/?retryWrites=true&w=majority")
userdb = client['user']
post = userdb["post"]


# randomly sample 10 posts from the database
@bp.route("/get")
def get_post():
    post_list = post.aggregate([{'$sample': 10}])
    if post_list:
        posts = []
        for doc in post_list:
            del doc['_id']
            posts.append(doc)
        # return it if exists:
        return jsonify(posts)
    else:
        # if nothing found, return 0
        return jsonify({'result': False, 'message': 'No post found'})


@bp.route('/set')
def set_post():
    # get 2 parameters from the request: title and content:
    if 'user_id' not in session:
        return jsonify({'Result': False, 'Message': 'Please login first!'})
    else:
        post_title = request.args.get('title')
        post_content = request.args.get('content')
        # if title and content exist:
        if post_title is not None and post_content is not None:
            post.insert_one({'post_title': post_title, 'post_content': post_content})
            return jsonify({'Result': True, 'Message': 'Success!'})
        else:
            return jsonify({'Result': False, 'Message': 'Title or Content must not be none'})