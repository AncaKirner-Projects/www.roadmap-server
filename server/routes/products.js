const express = require('express');
const Product = require('../models/product');


const router = express.Router();

router.get('/', (req, res) => {
  Product.getAll((err, result, fiels) => {
    if (err) {
      res.status(404).send(err);
    }
    res.send('All products' + JSON.stringify(result));
  });
});

router.get('/:id', (req, res) => {
  Product.getById(req.params.id, (err, result, fiels) => {
    if (err) {
      res.status(404).send(err);
    }
    res.send('Product: ' + JSON.stringify(result));
  });
});

router.post('/', (req, res) => {
  Product.add(req.body, (err, result, conn) => {
    if (err) {
      console.log(err);
    }
    if (result && result.affectedRows === 1) {
      res.status(201).send("Added id: " + result.insertId);
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