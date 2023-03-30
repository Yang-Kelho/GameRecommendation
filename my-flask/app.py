from flask import Flask, jsonify
from blueprints.user import bp as user_bp
from blueprints.community import bp as community_bp
from blueprints.game import bp as game_bp
from blueprints.home import bp as home_bp
from blueprints.list import bp as list_bp
from blueprints.saved import bp as saved_bp
from flask_cors import CORS

from exts import mail
import config


app = Flask(__name__)
CORS(app)
mail.init_app(app)

# register the blueprints
app.register_blueprint(user_bp)
app.register_blueprint(community_bp)
app.register_blueprint(game_bp)
app.register_blueprint(home_bp)
app.register_blueprint(list_bp)
app.register_blueprint(saved_bp)

app.config.from_object(config)


# test request and response:
@app.route("/test")
def test_req():

  return jsonify({"test":"data", "test2":"data2"})


if __name__ == '__main__':
  app.run()



