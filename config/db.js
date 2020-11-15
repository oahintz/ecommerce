const Sequelize = require('sequelize');

const ProductModel = require('../models/product');
const UserModel = require('../models/user');

const sequelize = new Sequelize(
  process.env['DB_NAME'],
  process.env['DB_USER'],
  process.env['DB_PASS'],
  {
    host: process.env['DB_HOST'],
    dialect: 'mysql'
  }
);

const Product = ProductModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);

sequelize.sync({ force: false })
  .then(() => {
    console.log('db sync completed');
  });

module.exports = {
  Product,
  User,
};
