
require('dotenv').config();

module.exports = {
  username: 'root',
  password: 'root',
  database: 'testdb',
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false,
    underscore: true
  }
}