from flask import jsonify, request
import secrets
from sql_class import dbOpen

with dbOpen("database.db") as c:
    c.execute("CREATE TABLE IF NOT EXISTS discountCode(code TEXT, discount INTEGER)")

with dbOpen("database.db") as c:
    c.execute("CREATE TABLE IF NOT EXISTS easyQuestion(question TEXT, answer TEXT)")

with dbOpen("database.db") as c:
    c.execute("CREATE TABLE IF NOT EXISTS normalQuestion(question TEXT, answer TEXT)")

with dbOpen("database.db") as c:
    c.execute("CREATE TABLE IF NOT EXISTS hardQuestion(question TEXT, answer TEXT)")

def allocateScore():
    print(request.args.get("finalScore"))
    score=int(request.args.get("finalScore"))
    if score>=195:
        code=secrets.token_hex(12)
        discount=25
        validate(code)
        with dbOpen("database.db") as c:
            c.execute("INSERT INTO discountCode (code, discount) VALUES (?, ?)",
                  (code, discount))

    elif score>=173:
        code=secrets.token_hex(12)
        discount=15
        validate(code)
        with dbOpen("database.db") as c:
            c.execute("INSERT INTO discountCode (code, discount) VALUES (?, ?)",
                  (code, discount))
    elif score>=153:
        print("start")
        code=secrets.token_hex(12)
        discount=10
        validate(code)
        with dbOpen("database.db") as c:
            c.execute("INSERT INTO discountCode (code, discount) VALUES (?, ?)",
                  (code, discount))
        print("End")
    else:
        return ""

    return jsonify(c=code, dis=discount)

def validate(code):
    with dbOpen("database.db") as c:
        c.execute('SELECT * FROM "discountCode" WHERE "code"=?', (code,))
        print(bool(c.fetchone()))
        while c.fetchone():
            code=secrets.token_hex(12)
    return code

def fetchone_question(unique_id, difficulty):
    print(unique_id)
    difficulty=str(difficulty)
    if difficulty=="easy":
        with dbOpen("database.db") as c:
            c.execute('SELECT "question", "answer" FROM "easyQuestion" WHERE "unique_id"=?', (unique_id,))
            all_data=c.fetchall()
        print(all_data)
    if difficulty=="normal":
        with dbOpen("database.db") as c:
            c.execute('SELECT "question", "answer" FROM "normalQuestion" WHERE "unique_id"=?', (unique_id,))
            all_data=c.fetchall()
        return all_data
    if difficulty=="hard":
        with dbOpen("database.db") as c:
            c.execute('SELECT "question", "answer" FROM "hardQuestion" WHERE "unique_id"=?', (unique_id,))
            all_data=c.fetchall()
        return all_data

def fetchone_answer(answer):
    print()
    number=str()
    with dbOpen("database.db") as c:
        c.execute('SELECT "answer" FROM "easyQuestion" WHERE "answer"=?', (answer,))
