const MyAppModel = require('../db_connection/mysqlConnection');

let Category = MyAppModel.extend({
  tableName: "category",
});

let category = new Category();

const CategoryObj = {
  getAll: (callback) => {
    category.find('all', callback);
  },
  getById: (id, callback) => {
    category.find('all', { where: `id=${id}` }, callback);
  },
  add: (categ, callback) => {
    category = new Category(categ);
    category.save(callback);
  },
  delete: (id, callback) => {
    category.set('id', id);
    category.remove(callback);
  }
}

module.exports = CategoryObj;