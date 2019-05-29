const express = require('express');
const Model = require('../models/DBModel');

const table = 'product';
const table2 = 'product_category';
const product = Model(table);
const Product = require('../models/product');

const router = express.Router();

router.get('/', (req, res) => {
  Product.getAllWithCategory(product, (err, result, fiels) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

router.get('/categories', (req, res) => {
  Product.getAllWithCategory(product, (err, result, fiels) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

router.get('/categories/:ids', (req, res) => {
  Product.getAllFromCategory(product, req.params.ids, (err, result, fiels) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

router.get('/:id', (req, res) => {
  Product.getById(product, req.params.id, (err, result, fiels) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

router.post('/', (req, res) => {
  const categoryId = req.body.category_id;
  delete req.body.category_id;

  const product = Model(table, req.body);
  const Product = require('../models/product');

  Product.add(product, (err, result, conn) => {
    if (err) {
      res.status(404).send(err);
    }
    if (result && result.affectedRows === 1) {
      const prod_categ = {
        category_id: categoryId,
        product_id: result.insertId
      }
      const prod = Model(table2, prod_categ);
      const ProductCategory = require('../models/productCategory');

      ProductCategory.add(prod, (err, result, conn) => {
        console.log(err, result);
      });
      res.status(201).send({ id: prod_categ.product_id });
    }
  });
});

router.delete('/:id', (req, res) => {
  Product.delete(product, req.params.id, (err, result, conn) => {
    if (err) {
      res.status(404).send(err);
    }
    if (result && result.affectedRows === 1) {
      res.status(204).send();
    }
  })
});

module.exports = router;
