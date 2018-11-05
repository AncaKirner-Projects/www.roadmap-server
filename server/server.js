const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const products = require('./routes/products');
const categories = require('./routes/categories');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', products);
app.use('/categories', categories);

// app.use((req, resp, next) => {
//   var err = new Error('Not found!');
//   err.status = 404;
//   next(err);
// })
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// app.get('/users', (req, res) => {
//   res.send('User list');
// });

// app.use(function (req, res, next) {
//   res.status(404).send("Sorry can't find that!")
// });

app.listen(8000, () => {
  console.log("Listening...");
});

