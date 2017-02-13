var express = require('express');
var MainMenu = require('MainMenu')('index');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Главная' , Menu : MainMenu.toArray() , PageName : "Главная" });
});

module.exports = router;
