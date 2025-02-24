from flask import Flask, jsonify, request

app = Flask(__name__)

# Пример данных о студенте
students = {
    "123456": {  # Telegram ID
        "fullName": "Иванов Иван Иванович",
        "direction": "Программирование",
        "course": 2,
        "group": "P-202",
        "educationalRating": 85,
        "activityRating": 45
    }
}

@app.route('/get-student', methods=['GET'])
def get_student():
    telegram_id = request.args.get('telegram_id')
    student = students.get(telegram_id, {})
    return jsonify(student)

if __name__ == '__main__':
    app.run(port=5000)