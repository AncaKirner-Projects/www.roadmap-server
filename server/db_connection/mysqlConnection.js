var mysqlModel = require('mysql-model');

const MyAppModel = mysqlModel.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'roadmap',
  port: 3306
});

module.exports = MyAppModel;