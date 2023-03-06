from flask import Blueprint
bp = Blueprint("community", __name__, url_prefix="/")


@bp.route("/post")
def get_post():

    return ""
