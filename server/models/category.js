const CategoryObj = {
  getAll: (category, callback) => {
    category.find('all', callback);
  },
  getById: (category, id, callback) => {
    category.find('all', { where: `id=${id}` }, callback);
  },
  add: (category, callback) => {
    category.save(callback);
  },
  delete: (category, id, callback) => {
    category.set('id', id);
    category.remove(callback);
  }
};

module.exports = CategoryObj;