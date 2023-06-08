const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database',
});

// MySQL 데이터베이스 연결
connection.connect((err) => {
    if (err) {
        console.error('Failed to connect to MySQL database:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

// 정적 파일 제공
app.use(express.static('public'));

// API 엔드포인트 정의
app.use(express.json());

// 서버 실행
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
