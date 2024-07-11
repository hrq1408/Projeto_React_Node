const connection = require('../config/db.config');

const Products = {
    getAll: (callback) => {
        connection.query('SELECT * FROM produtos', (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    },
    getById: (id, callback) => {
        connection.query('SELECT * FROM produtos WHERE id = ?', [id], (err, results) => {
            if (err) return callback(err, null);
            callback(null, results[0]);
        });
    },
    create: (product, callback) => {
        connection.query('INSERT INTO produtos SET ?', product, (err, results) => {
            if (err) return callback(err, null);
            callback(null, { id: results.insertId, ...product });
        });
    },
    update: (id, product, callback) => {
        connection.query('UPDATE produtos SET ? WHERE id = ?', [product, id], (err, results) => {
            if (err) return callback(err, null);
            callback(null, { id, ...product });
        });
    },
    delete: (id, callback) => {
        connection.query('DELETE FROM produtos WHERE id = ?', [id], (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    },
};

module.exports = Products;
