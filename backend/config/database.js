
require('dotenv').config();

module.exports = {
  username: process.env.MYSQLDB_USER || 'root',
  password: process.env.MYSQLDB_ROOT_PASSWORD || 'root',
  database: process.env.MYSQLDB_DATABASE || 'testdb',
  host: process.env.MYSQLDB_HOST || 'localhost',
  dialect: process.env.MYSQLDB_DIALECT || 'mysql',
  define: {
    timestamps: false,
    underscore: true
  }
}