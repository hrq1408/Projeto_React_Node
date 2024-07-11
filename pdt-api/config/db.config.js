const mysql = require('mysql2');
const debug = require('debug')('app:mysql'); 

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

// Envolver o método query para adicionar logs
const originalQuery = connection.query;
connection.query = function(...args) {
    debug('Query executada:', args[0]); // Log da consulta SQL
    return originalQuery.apply(connection, args);
};

module.exports = connection;
