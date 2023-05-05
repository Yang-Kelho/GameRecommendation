from flask import Flask, jsonify
from blueprints.user import bp as user_bp
from blueprints.community import bp as community_bp
from blueprints.game import bp as game_bp
from blueprints.home import bp as home_bp
from blueprints.list import bp as list_bp
from flask_cors import CORS
import config
import os
from flask import send_from_directory

app = Flask(__name__)
CORS(app, supports_credentials=True)

# register the blueprints
app.register_blueprint(user_bp)
app.register_blueprint(community_bp)
app.register_blueprint(game_bp)
app.register_blueprint(home_bp)
app.register_blueprint(list_bp)

# config the app
app.config.from_object(config)


@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')


if __name__ == '__main__':
    app.run()
