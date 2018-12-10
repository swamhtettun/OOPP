from flask import Flask, render_template
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, TextAreaField, RadioField, SelectField
from wtforms.validators import InputRequired

app = Flask(__name__)
app.config['SECRET_KEY'] = 'Thisisasecret!'


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


class MyForm(FlaskForm):
    email = StringField('Email', validators=[InputRequired()])
    password = PasswordField('Password', validators=[InputRequired()])
    textarea = TextAreaField('Textarea')
    radios = RadioField('Radios', default='option1', choices=[('option1', 'Option one is this'), ('option2', 'Option 2 can be something else')])
    selects = SelectField('Select', choices=[('1', '1'), ('2', '2'), ('3', '3')])


@app.route('/register/', methods=['GET', 'POST'])
def form():
    form = MyForm()

    if form.validate_on_submit():
        return render_template('results.html', email=form.email.data, password=form.password.data, textarea=form.textarea.data, radios=form.radios.data, selects=form.selects.data)
    return render_template('form.html', form=form)


if __name__ == '__main__':
    app.run(debug=True)
