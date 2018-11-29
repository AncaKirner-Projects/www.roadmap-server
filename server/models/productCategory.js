const MyAppModel = require('../db_connection/mysqlConnection');

let ProductCategory = MyAppModel.extend({
  tableName: "product_category",
});

let product = new ProductCategory();

const ProductObj = {
  add: (prod, callback) => {
    product = new ProductCategory(prod);
    product.save(callback);
  }
}

module.exports = ProductObj;