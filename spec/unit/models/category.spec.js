const CategoryObj = require('../../../server/models/category');

xdescribe('CategoryObj', () => {
  it('getAll categories', () => {


    // const category = {};
    const callback = jasmine.createSpy('callback');
    // spyOn(category, "find").and.callFake(function (arguments, can, be, received) {
    //   return 1001;
    // });
    const Category = function () { };
    let category = new Category();
    category.find = jasmine.createSpy("find() spy").and.callFake(function () {
      console.log('HERE');
      return 'BBB';
    });

    const result = CategoryObj.getAll(callback);
    console.log('$$$$$$', result);
    // expect(callback).toHaveBeenCalledWith(jasmine.objectContaining({
    //   bar: "baz"
    // }));

    expect(category.find).toHaveBeenCalled();
    // const res = category.find();
    // expect(true).toBe(true);
  })
});
