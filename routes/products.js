var express = require('express');
var router = express.Router();

const { Product } = require('../config/db');

router.get('/', async (req, res) => {
    const prod = await Product.findAll();
    res.send(prod);
 }); 

router.get('/:id(\\d+)', async (req, res) => {
  const prod = await Product.findByPk(req.params.id);
  res.send(prod);
});

router.get('/new', (req, res) => {
  res.render('products/new');
});

router.post('/', async (req, res) => {
  await Product.create({title: 'pepito' , description: 'narigon'})  
  res.redirect('/products');
} )

module.exports = router;