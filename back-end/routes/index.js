var express = require('express');
var client = require('node-rest-client').Client;
var Client = new client();
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  var url = 'https://newsapi.org/v2/top-headlines?country=br&category=business&apiKey=23a6a2db334c4d87b5d10a3152610a12';
  
  Client.get(url, (data, response) => {
    console.log(data)
    res.send(data)
  })
})

module.exports = router;
