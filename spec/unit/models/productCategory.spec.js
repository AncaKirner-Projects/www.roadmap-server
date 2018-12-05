describe('ProductCategoryObj', () => {
  const product = {
    save: function () { }
  };
  const ProductObj = require('../../../server/models/productCategory');

  it('add()', () => {
    spyOn(product, 'save');
    const callback = function () { };

    ProductObj.add(product, callback);

    expect(product.save).toHaveBeenCalled();
    expect(product.save).toHaveBeenCalledWith(callback);
  });
});
