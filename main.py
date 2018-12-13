from flask import Flask, render_template, redirect, url_for
import os
import sys
import sqlite3

app = Flask(__name__)
app.config['SECRET_KEY'] = 'Thisissupposedtobesecret!'


@app.route('/')
def home():
    return render_template('home.html')


@app.route('/guide/')
def guide():
    return render_template('guide.html')


@app.route('/game/')
def game():
    return render_template('game.html')


@app.route('/shop/')
def shop():
    return render_template('shop.html')


@app.route('/faq/')
def faq():
    return render_template('faq.html')


@app.route('/login/')
def login():
    return render_template('login.html')


if __name__ == '__main__':
    app.run(debug=True)
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "login_example.settings")
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)
