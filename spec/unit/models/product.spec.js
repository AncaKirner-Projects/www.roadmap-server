describe('ProductObj', () => {
  const product = {
    find: function () { },
    query: function () { },
    save: function () { },
    set: function () { },
    remove: function () { }
  };
  const ProductObj = require('../../../server/models/product');

  it('getAll()', () => {
    spyOn(product, 'find');
    const callback = function () { };

    ProductObj.getAll(product, callback);

    expect(product.find).toHaveBeenCalled();
    expect(product.find).toHaveBeenCalledWith('all', callback);
  });

  it('getAllWithCategory()', () => {
    spyOn(product, 'query');
    const callback = function () { };

    ProductObj.getAllWithCategory(product, callback);

    expect(product.query).toHaveBeenCalled();
  });

  it('getAllFromCategory()', () => {
    spyOn(product, 'query');
    const categ_ids = '1,2';
    const callback = function () { };

    ProductObj.getAllFromCategory(product, callback);

    expect(product.query).toHaveBeenCalled();
  });

  it('getById()', () => {
    spyOn(product, 'find');
    const prodId = 1;
    const callback = function () { };

    ProductObj.getById(product, prodId, callback);

    expect(product.find).toHaveBeenCalled();
    expect(product.find).toHaveBeenCalledWith('all', Object({ where: 'id=1' }), callback);
  });

  it('add()', () => {
    spyOn(product, 'save');
    const callback = function () { };

    ProductObj.add(product, callback);

    expect(product.save).toHaveBeenCalled();
    expect(product.save).toHaveBeenCalledWith(callback);
  });

  it('delete()', () => {
    spyOn(product, 'set');
    spyOn(product, 'remove');

    const prodId = 1;
    const callback = function () { };

    ProductObj.delete(product, prodId, callback);

    expect(product.set).toHaveBeenCalled();
    expect(product.set).toHaveBeenCalledWith('id', 1);
    expect(product.remove).toHaveBeenCalled();
    expect(product.remove).toHaveBeenCalledWith(callback);
  });
});
