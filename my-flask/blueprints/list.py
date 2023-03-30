from flask import Blueprint

bp = Blueprint("list", __name__, url_prefix="/")


@bp.route("/list")
def get_list():
    # todo: 1. get the user info (username, etc)

    # todo: 2. retrieve based on the username

    # todo: 3. return as json
    return ""
