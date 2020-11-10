var express = require('express');
var router = express.Router();

 const { Product } = require('../config/db');
  
  router.get('/products/:id', async (req, res) => {
    const prod = await Product.findByPk(1)
    console.log(prod)
    res.send(prod)
  });

/* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index',{title: req.query.title})
});

router.post('/', function(req, res, next) {
  res.send(req.body.registername + req.body.registersurname + req.body.dni)
});

router.get('/search', function(req, res, next){
  res.send(req.query)
})

router.get('/search/:q', function(req, res, next){
  res.send(req.params.q+ req.query.s)
}) 

module.exports = router;

    //EJEMPLOS
  //req.body.nombre de la variable (JSON) (POST)
  //req.params.:id/    ---id del producto (Ruta linda) (GET)
  //req.query. signo de pregunta en la url (?asd=1) (GET)