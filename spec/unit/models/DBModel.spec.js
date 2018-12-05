const MyAppModel = require('../../../server/db_connection/mysqlConnection');
const model = require('../../../server/models/DBModel');

describe('DBModel', () => {
  it('return new Model', () => {
    spyOn(MyAppModel, 'extend').and.returnValue(Object);
    const table = 'name';
    const pmodel = {};

    const result = model(table, pmodel);

    expect(MyAppModel.extend).toHaveBeenCalled();
    // expect(product.save).toHaveBeenCalledWith(callback);
  });
});
