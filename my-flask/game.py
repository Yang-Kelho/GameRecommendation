from flask import Flask, request, render_template
from app import app


@app.route("/search")
def get_game():
    # search for games from the database

    # 1. connect to the database

    # 2. retrieve from database

    # 3. return the data
    return ""


@app.route("/recommend")
def get_recommendation():
    # recommendation engine goes here, request with keywords

    # 1. recommendation algorithm goes here:

    # X. return the result as json

    return ""
