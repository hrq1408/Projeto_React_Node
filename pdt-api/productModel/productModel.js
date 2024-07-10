const db = require('../config/db.config.js');


const Product = {
    getAll: (callback) => {
      const query = 'SELECT * FROM produtos';
      db.query(query, callback);
    },
    getById: (id, callback) => {
      const query = 'SELECT * FROM produtos WHERE id = ?';
      db.query(query, [id], callback);
    },
    create: (product, callback) => {
      const query = 'INSERT INTO produtos (nome, descricao, preco, data_criacao) VALUES (?, ?, ?, ?)';
      db.query(query, [product.nome, product.descricao, product.preco, product.data_criacao], callback);
    },
    update: (id, product, callback) => {
      const query = 'UPDATE produtos SET nome = ?, descricao = ?, preco = ? WHERE id = ?';
      db.query(query, [product.nome, product.descricao, product.preco, id], callback);
    },
    delete: (id, callback) => {
      const query = 'DELETE FROM produtos WHERE id = ?';
      db.query(query, [id], callback);
    }
  };
  
  module.exports = Product;