from flask import Flask, request, jsonify
from flask_bcrypt import Bcrypt
from flask_cors import CORS
import pymysql

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"], supports_credentials=True)
bcrypt = Bcrypt(app)

# Database connection function
def get_db_connection():
    return pymysql.connect(
        host="localhost",
        user="root",
        password="jcka1234",
        database="internet",
        cursorclass=pymysql.cursors.DictCursor
    )

@app.route('/')
def home():
    return "Hello, World!"

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        return jsonify({'error': 'Missing required fields'}), 400

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    connection = get_db_connection()
    cursor = connection.cursor()

    try:
        cursor.execute("INSERT INTO users (username, email, password) VALUES (%s, %s, %s)",
                       (username, email, hashed_password))
        connection.commit()
        return jsonify({'message': 'User registered successfully'}), 201
    except pymysql.IntegrityError:
        return jsonify({'error': 'Username or email already exists'}), 400
    finally:
        cursor.close()
        connection.close()

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    connection = get_db_connection()
    cursor = connection.cursor()

    try:
        cursor.execute("SELECT id, username, password FROM users WHERE email = %s", (email,))
        user = cursor.fetchone()

        if user and bcrypt.check_password_hash(user['password'], password):
            return jsonify({'message': 'Login successful', 'user_id': user['id'], 'username': user['username']}), 200
        else:
            return jsonify({'error': 'Invalid credentials'}), 401
    finally:
        cursor.close()
        connection.close()

if __name__ == '__main__':
    app.run(debug=True)
