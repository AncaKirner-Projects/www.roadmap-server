const MyAppModel = require('../db_connection/mysqlConnection');

let Product = MyAppModel.extend({
  tableName: "product",
});

let product = new Product();

const ProductObj = {
  getAll: (callback) => {
    product.find('all', callback);
  },
  getById: (id, callback) => {
    product.find('all', { where: `id=${id}` }, callback);
  },
  add: (prod, callback) => {
    product = new Product(prod);
    console.log(product);
    product.save(callback);
  },
  delete: (id, callback) => {
    product.set('id', id);
    product.remove(callback);
  }
}

module.exports = ProductObj;