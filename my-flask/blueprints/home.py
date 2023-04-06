from flask import Blueprint
from pymongo import MongoClient

bp = Blueprint("home", __name__, url_prefix="/")
client = MongoClient("mongodb+srv://xtang10:tang123456@gamerecom.yyg15zm.mongodb.net/?retryWrites=true&w=majority")
db = client.gettingStarted


@bp.route("/home")
def get_random():

    return ""
