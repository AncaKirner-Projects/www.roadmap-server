const MyAppModel = require('../db_connection/mysqlConnection');

let Product = MyAppModel.extend({
  tableName: "product",
});

let product = new Product();

const ProductObj = {
  getAll: (callback) => {
    product.find('all', callback);
  },
  getAllWithCategory: (callback) => {
    console.log('IN MODEL%%%%%');
    const query = "\
    SELECT p.*, pc.category_id \
    FROM product p \
    LEFT JOIN product_category pc ON p.id = pc.product_id \
    ORDER BY p.id";
    product.query(query, callback);
  },
  getAllFromCategory: (category_ids, callback) => {
    const query = "\
    SELECT p.*, pc.category_id \
    FROM product p \
    INNER JOIN product_category pc ON p.id = pc.product_id \
    WHERE pc.category_id IN(" + category_ids + ")";
    product.query(query, callback);
  },
  getById: (id, callback) => {
    product.find('all', { where: `id=${id}` }, callback);
  },
  add: (prod, callback) => {
    product = new Product(prod);
    product.save(callback);
  },
  delete: (id, callback) => {
    product.set('id', id);
    product.remove(callback);
  }
}

module.exports = ProductObj;