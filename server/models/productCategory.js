const ProductObj = {
  add: (product, callback) => {
    product.save(callback);
  }
};

module.exports = ProductObj;