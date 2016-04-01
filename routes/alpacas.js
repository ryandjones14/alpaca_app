var express = require('express');
var router = express.Router();
var Alpaca = require('../models/alpaca');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Alpaca.find(function(err, alpaca){
    if (err) {
      console.log(err);
    } else {
      console.log(alpaca);
    }
    res.render('alpacas/index', {title: 'OKAlpaca', alpaca: alpaca[Math.floor(Math.random()*alpaca.length)]});
  });
});

router.get('/liked', function(req, res, next){
  var alpacas = Alpaca.find({likes: {$gt: 0 } }, function(err, alpaca){
      res.render('alpacas/liked', {title: "Alpacas you have liked!", })
  })
})

router.post('/', function (req, res) {
  // Update a document by another field
  var id = req.body.id;
  var like = req.body.like;
  console.log(like);
  Alpaca.findByIdAndUpdate(id, {likes: like}, function(err, alpaca) {
    if (err){
      console.log(err);
    } else {
      // console.log(alpaca);
      res.redirect('/alpacas');
    }
  });
});

module.exports = router;
