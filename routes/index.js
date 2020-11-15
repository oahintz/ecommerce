var express = require('express');
var router = express.Router();

const { Product } = require('../models');

router.get('/', (req, res) => {
  console.log(Product.name)
  res.render('index');
}); 

module.exports = router;


