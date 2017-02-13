var express = require('express');
var MainMenu = require('MainMenu')('place');
var router = express.Router();
var place = require('Place');


/*
  Это если запросили все
*/
router.get('/', function(req, res) {
  res.render('place', { 
      title: place.config.name , 
      Menu : MainMenu.toArray() , 
      Places  : place.getFilter().toArray()
  });
});


/*
  Это если запросили только один
*/
router.get('/:id/', function(req, res) {
  res.render('index', { title: 'Главная' , Menu : MainMenu.toArray() , PageName : "Главная" });
});



module.exports = router;