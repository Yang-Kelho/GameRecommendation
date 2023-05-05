from datetime import timedelta
# mail server configuration:
# MAIL_SERVER = 'smtp.gmail.com'
# MAIL_PORT = 587
# MAIL_USE_SSL = True
# MAIL_USERNAME = ''
# MAIL_PASSWORD = ''

# Salt
SECRET_KEY = "thisisforgamerecommendation"
PERMANENT_SESSION_LIFETIME = timedelta(minutes=10)
SESSION_COOKIE_SAMESITE = 'Lax'
