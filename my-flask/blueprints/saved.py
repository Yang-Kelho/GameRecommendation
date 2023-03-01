from flask import Blueprint


bp = Blueprint("saved", __name__, "/")

@bp.route("/saved")
def get_saved():

    return ""
