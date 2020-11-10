const  Sequelize  = require('sequelize');

const ProductModel = require('../models/product');


const sequelize = new Sequelize('ecommerce_development', 'alexis', '1234', {
  host: 'localhost',
  dialect: 'mysql'
});

const Product = ProductModel(sequelize, Sequelize);


sequelize.sync({  force: false  })
    .then(() =>{
        console.log('Tablas Sincronizadas')
    })


module.exports = {
    Product,
    
}
