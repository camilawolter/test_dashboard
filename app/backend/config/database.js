const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  database: process.env.MYSQL_DB_NAME,
  username: process.env.MYSQL_USER,
  host:  process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  password: process.env.MYSQL_PASSWORD,
  dialect: 'mysql'
});

module.exports = sequelize;
