# form validation
import wtforms
from wtforms.validators import Email, Length, EqualTo
from pymongo import MongoClient

client = MongoClient("mongodb+srv://xtang10:tang123456@gamerecom.yyg15zm.mongodb.net/?retryWrites=true&w=majority")
userdb = client.gettingStarted.user
# import the user collection:
user = userdb["user"]


class RegisterForm(wtforms.Form):
    # email:
    email = wtforms.StringField(validators=[Email(message="Incorrect email format")])
    # username:
    username = wtforms.StringField(
        validators=[Length(min=4, max=20, message="Username length should be between 4 - 20")]
    )
    # password:
    password = wtforms.StringField(
        validators=[Length(min=4, max=20, message="Password length should be between 4 - 20")]
    )
    # re-enter password
    re_enter_password = wtforms.StringField(validators=[EqualTo("password")])

    # Additional validation:
    # 1. if username/email already been existed
    def validate_email(self, field):
        email = field.data
        # search from the database:
        result = user.find_one({"email": email})
        if result:
            raise wtforms.ValidationError(message="Email already exist!")
    # result = false, meaning no email found in database, program continue

    def validate_username(self, field):
        username = field.data
        # search from the database:
        result = user.find_one({"email": username})
        if result:
            raise wtforms.ValidationError(message="Username already exist!")


class LoginForm(wtforms.Form):
    # username:
    username = wtforms.StringField(
        validators=[Length(min=4, max=20, message="Username length should be between 4 - 20")]
    )
    # password:
    password = wtforms.StringField(
        validators=[Length(min=4, max=20, message="Password length should be between 4 - 20")]
    )
