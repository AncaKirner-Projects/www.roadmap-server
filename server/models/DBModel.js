const MyAppModel = require('../db_connection/mysqlConnection');

module.exports = function (table, model) {
  const Model = MyAppModel.extend({
    tableName: table,
  });

  if (model) return new Model(model);
  return new Model();
};
