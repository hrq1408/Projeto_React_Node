const express = require('express');
const router = express.Router();
const Products = require('../models/productModel');

// Mostrar todos os produtos
router.get('/', (req, res) => {
  Products.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Ocorreu um erro ao buscar os produtos',
      });
    } else {
      res.send(data);
    }
  });
});

// Buscar por ID
router.get('/:id', (req, res) => {
  const productId = req.params.id;
  Products.getById(productId, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Ocorreu um erro ao buscar o produto',
      });
    } else {
      res.send(data);
    }
  });
});

// Criar um novo produto
router.post('/', (req, res) => {
  const productNew = {
    nome: req.body.nome,
    descricao: req.body.descricao,
    preco: req.body.preco,
    data_criacao: new Date(),
  };

  // Validar se o produto foi criado
  if (!productNew.nome || !productNew.descricao || !productNew.preco) {
    res.status(400).send({
      message: 'Os campos não podem estar vazios',
    });
    return;
  }

  Products.create(productNew, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Ocorreu um erro ao criar o produto',
      });
    } else {
      res.send(data);
    }
  });
});

// Atualizar um produto
router.put('/:id', (req, res) => {
  const productUpdate = {
    nome: req.body.nome,
    descricao: req.body.descricao,
    preco: req.body.preco,
  };

  // Validar se o produto foi atualizado
  if (!productUpdate.nome || !productUpdate.descricao || !productUpdate.preco) {
    res.status(400).send({
      message: 'Os campos não podem estar vazios',
    });
    return;
  }

  Products.update(req.params.id, productUpdate, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Ocorreu um erro ao atualizar o produto',
      });
    } else {
      res.send(data);
    }
  });
});

// Deletar um produto
router.delete('/:id', (req, res) => {
  Products.delete(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Ocorreu um erro ao deletar o produto',
      });
    } else {
      res.send(data);
    }
  });
});

module.exports = router;
