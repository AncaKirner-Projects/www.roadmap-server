const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const products = require('./routes/products');
const categories = require('./routes/categories');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/products', products);
app.use('/categories', categories);

const server = app.listen(8000, () => {
  console.log("Listening:8000...");
});


module.exports = server;