const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: 'produtos'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao banco de dados');
});

module.exports = connection;