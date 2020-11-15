var express = require('express');
var router = express.Router();

const { Product } = require('../models');

// PRODUCT INDEX

router.get('/', async (req, res) => {
    const products = await Product.findAll();
    console.log(products);
    res.render('products/index', {
      products: products
    });
 }); 

 // PRODUCT DETAIL

router.get('/:id(\\d+)', async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  res.render('products/show', {
    product: product
  });
});

// NEW PRODUCT FORM

router.get('/new', (req, res) => {
  res.render('products/new');
});

// ADD PRODUCT

router.post('/', async (req, res) => {
  await Product.create({ 
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl
  });

  res.redirect('/products');
} )

router.get('/:id(\\d+)/edit', async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  res.render('products/edit', {
    product: product
  });
});

router.post('/:id(\\d+)', async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  await product.update({
    title: req.body.title,
    imageUrl: req.body.imageUrl,
    description: req.body.description,
  });
  res.redirect(`/products/${req.params.id}`);
});

router.post('/:id(\\d+)/delete', async (req, res) => {
  await Product.destroy({
    where: {
      id: req.params.id
    }
  });
  res.redirect('/products');
});
  

module.exports = router