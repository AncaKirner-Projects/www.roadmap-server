const ProductObj = {
  getAll: (product, callback) => {
    product.find('all', callback);
  },
  getAllWithCategory: (product, callback) => {
    const query = "\
    SELECT p.*, pc.category_id \
    FROM product p \
    LEFT JOIN product_category pc ON p.id = pc.product_id \
    ORDER BY p.id";
    product.query(query, callback);
  },
  getAllFromCategory: (product, category_ids, callback) => {
    const query = "\
    SELECT p.*, pc.category_id \
    FROM product p \
    INNER JOIN product_category pc ON p.id = pc.product_id \
    WHERE pc.category_id IN(" + category_ids + ")";
    product.query(query, callback);
  },
  getById: (product, id, callback) => {
    product.find('all', { where: `id=${id}` }, callback);
  },
  add: (product, callback) => {
    product.save(callback);
  },
  delete: (product, id, callback) => {
    product.set('id', id);
    product.remove(callback);
  }
};

module.exports = ProductObj;