const express = require('express');
const Category = require('../models/category');

const router = express.Router();

router.get('/', (req, res) => {
  Category.getAll((err, result, fiels) => {
    if (err) {
      res.status(404).send(err);
    }
    res.send('All categories' + JSON.stringify(result));
  });
});

router.get('/:id', (req, res) => {
  Category.getById(req.params.id, (err, result, fiels) => {
    if (err) {
      res.status(404).send(err);
    }
    res.send('Category: ' + JSON.stringify(result));
  });
});

router.post('/', (req, res) => {
  Category.add(req.body, (err, result, conn) => {
    if (err) {
      console.log(err);
      res.status(404).send(err);
    }
    if (result && result.affectedRows === 1) {
      res.status(201).send("Added id: " + result.insertId);
    }
  });
});

router.delete('/:id', (req, res) => {
  Category.delete(req.params.id, (err, result, conn) => {
    if (err) {
      res.status(404).send(err);
    }
    if (result && result.affectedRows === 1) {
      res.status(200).send("Deleted");
    }
  })
});

module.exports = router;