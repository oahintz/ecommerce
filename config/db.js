const  Sequelize  = require('sequelize');

const ProductModel = require('../models/product');
const UserModel = require('../models/user');


const sequelize = new Sequelize('ecommerce_development', 'alexis', '1234', {
  host: 'localhost',
  dialect: 'mysql'
});

const Product = ProductModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);

sequelize.sync({  force: false  })
    .then(() =>{
        console.log('Tablas Sincronizadas')
    })


module.exports = {
    Product,
    User,
}