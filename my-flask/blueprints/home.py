from flask import Blueprint

bp = Blueprint("home", __name__, url_prefix="/")


@bp.route("/home")
def get_random():

    return ""
