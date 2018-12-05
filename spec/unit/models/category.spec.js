describe('CategoryObj', () => {
  const category = {
    find: function () { },
    save: function () { },
    set: function () { },
    remove: function () { }
  };
  const CategoryObj = require('../../../server/models/category');

  it('getAll()', () => {
    spyOn(category, 'find');
    const callback = function () { };

    CategoryObj.getAll(category, callback);

    expect(category.find).toHaveBeenCalled();
    expect(category.find).toHaveBeenCalledWith('all', callback);
  });

  it('getById()', () => {
    spyOn(category, 'find');
    const categId = 1;
    const callback = function () { };

    CategoryObj.getById(category, categId, callback);

    expect(category.find).toHaveBeenCalled();
    expect(category.find).toHaveBeenCalledWith('all', Object({ where: 'id=1' }), callback);
  });

  it('add()', () => {
    spyOn(category, 'save');
    const callback = function () { };

    CategoryObj.add(category, callback);

    expect(category.save).toHaveBeenCalled();
    expect(category.save).toHaveBeenCalledWith(callback);
  });

  it('delete()', () => {
    spyOn(category, 'set');
    spyOn(category, 'remove');

    const categId = 1;
    const callback = function () { };

    CategoryObj.delete(category, categId, callback);

    expect(category.set).toHaveBeenCalled();
    expect(category.set).toHaveBeenCalledWith('id', 1);
    expect(category.remove).toHaveBeenCalled();
    expect(category.remove).toHaveBeenCalledWith(callback);
  });
});
