const express = require('express');
const Product = require('../models/product');
const ProductCategory = require('../models/productCategory');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('GET');
  Product.getAllWithCategory((err, result, fiels) => {
    console.log(err, result);
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).send(JSON.stringify(result));
  });
});

router.get('/categories/:ids', (req, res) => {
  Product.getAllFromCategory(req.params.ids, (err, result, fiels) => {
    if (err) {
      res.status(404).send(err);
    }
    console.log(result.length);
    res.status(200).send(JSON.stringify(result));
  });
});

router.get('/:id', (req, res) => {
  Product.getById(req.params.id, (err, result, fiels) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).send(JSON.stringify(result));
  });
});

router.post('/', (req, res) => {
  const categoryId = req.body.category_id;
  delete req.body.category_id;

  Product.add(req.body, (err, result, conn) => {
    if (err) {
      res.status(404).send(err);
      console.log(err);
    }
    if (result && result.affectedRows === 1) {
      const prod_categ = {
        category_id: categoryId,
        product_id: result.insertId
      }
      ProductCategory.add(prod_categ, (err, result, conn) => {
        console.log(err, result);
      });
      res.status(201).send(JSON.stringify({ id: prod_categ.product_id }));
    }
  });
});

router.delete('/:id', (req, res) => {
  Product.delete(req.params.id, (err, result, conn) => {
    if (err) {
      res.status(404).send(err);
    }
    if (result && result.affectedRows === 1) {
      res.status(200).send("Deleted");
    }
  })
});

module.exports = router;
