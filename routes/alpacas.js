var express = require('express');
var router = express.Router();
var Alpaca = require('../models/alpaca');


/* GET users listing. */
router.get('/', function(req, res, next) {
  var alpaca = Alpaca.findOne({name: "Zolon"}, 'name image bio', function(err, alpaca) {
    if (err) {
      console.log(err);
    } else {
      console.log(alpaca);
      res.render('alpacas/index', {title: 'OKAlpaca', alpaca: alpaca});
    }
  });
});

module.exports = router;
