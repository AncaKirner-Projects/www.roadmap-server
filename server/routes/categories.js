const express = require('express');
const CategoryModel = require('../models/DBModel');

const table = 'category';
const category = CategoryModel(table);
const Category = require('../models/category');

const router = express.Router();

router.get('/', (req, res) => {
  Category.getAll(category, (err, result, fiels) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(result);
    }
  });
});

router.get('/:id', (req, res) => {
  Category.getById(category, req.params.id, (err, result, fiels) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(result);
    }
  });
});

router.post('/', (req, res) => {
  const category = CategoryModel(table, req.body);
  const Category = require('../models/category');

  Category.add(category, (err, result, conn) => {
    if (err) {
      res.status(404).send(err);
    }
    if (result && result.affectedRows === 1) {
      res.status(201).send({ id: result.insertId });
    }
  });
});

router.delete('/:id', (req, res) => {
  Category.delete(category, req.params.id, (err, result, conn) => {
    if (err) {
      res.status(404).send(err);
    }
    if (result && result.affectedRows === 1) {
      res.status(204).send();
    }
  })
});

module.exports = router;
