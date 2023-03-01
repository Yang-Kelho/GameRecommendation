from flask import Blueprint

bp = Blueprint("list", __name__, url_prefix="/")


@bp.route("/list")
def get_list():
    # 1. get the user info (username, etc)

    # 2. retrieve based on the username

    # 3. return as json
    return ""
