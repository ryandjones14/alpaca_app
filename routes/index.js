var express = require('express');
var router = express.Router();

var llamas = ['http://media.vogue.com/r/h_480,w_480/2015/02/11/llamas-and-haircuts-tilda-swinton.jpg', 'https://pbs.twimg.com/profile_images/269279233/llama270977_smiling_llama_400x400.jpg']


/* GET home page. */
router.get('/', function(req, res, next) {
  llamas.forEach(function(val){
    var llama = val;
    res.render('index', { title: 'OKAlpaca', llama: llama});
  })
});

module.exports = router;
