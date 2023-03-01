from flask import Flask, request, render_template
from blueprints.user import bp as user_bp

from exts import mail
import config


app = Flask(__name__)
mail.init_app(app)
app.register_blueprint(user_bp)
app.config.from_object(config)
if __name__ == '__main__':
    app.run()



