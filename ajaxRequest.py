from flask import jsonify, request
import secrets
from sql_class import dbOpen

with dbOpen("database.db") as c:
    c.execute("CREATE TABLE IF NOT EXISTS discountCode(code TEXT, discount INTEGER)")

with dbOpen("database.db") as c:
    c.execute("CREATE TABLE IF NOT EXISTS easyQuestion(question TEXT, ans1 TEXT, ans2 TEXT, ans3 TEXT, ans4 TEXT, true TEXT)")

with dbOpen("database.db") as c:
    c.execute("CREATE TABLE IF NOT EXISTS normalQuestion(question TEXT, ans1 TEXT, ans2 TEXT, ans3 TEXT, ans4 TEXT, true TEXT)")

with dbOpen("database.db") as c:
    c.execute("CREATE TABLE IF NOT EXISTS hardQuestion(question TEXT, ans1 TEXT, ans2 TEXT, ans3 TEXT, ans4 TEXT, true TEXT)")

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
    elif score>=152:
        code=secrets.token_hex(12)
        discount=10
        validate(code)
        with dbOpen("database.db") as c:
            c.execute("INSERT INTO discountCode (code, discount) VALUES (?, ?)",
                  (code, discount))
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


