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

// MySQL �����ͺ��̽� ����
connection.connect((err) => {
    if (err) {
        console.error('Failed to connect to MySQL database:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

// ���� ���� ����
app.use(express.static('public'));

// API ��������Ʈ ����
app.use(express.json());

// ���� ����
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
