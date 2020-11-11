var express = require('express');
var router = express.Router();



module.exports = router;



    /*EJEMPLOS
  req.body.nombre de la variable (JSON) (POST)
  req.params.:id/    ---id del producto (Ruta linda) (GET)
  req.query. signo de pregunta en la url (?asd=1) (GET)

   GET home page. 
router.get('/', function (req, res, next) {
  res.render('index', { title: req.query.title })
});

router.post('/', function (req, res, next) {
  res.send(req.body.registername + req.body.registersurname + req.body.dni)
});

router.get('/search', function (req, res, next) {
  res.send(req.query)
})

router.get('/search/:q', function (req, res, next) {
  res.send(req.params.q + req.query.s) */