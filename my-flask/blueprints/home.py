from flask import Blueprint
from pymongo import MongoClient

bp = Blueprint("home", __name__, url_prefix="/")
client = MongoClient("mongodb+srv://xtang10:tang123456@gamerecom.yyg15zm.mongodb.net/?retryWrites=true&w=majority")
db = client.gettingStarted


@bp.route("/home")
def get_random():
    """
    generate a number of games by id, need id generation:
    for example:
        10, 30, 240, 360, 1000...
    :return: a list of games

    pseudocode:
        variable: list_of_number
        for x in list_of_number:
            result = db.find_one({"id": x})
            if result exist:
                add to a list with length of 20
            else:
                ignore it
            if list is full:
                terminate
        return the list
    """
    return ""
