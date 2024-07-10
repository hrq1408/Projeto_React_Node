const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'Novoprojeto',
    port: 3306,
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao banco de dados');
});

module.exports = connection;