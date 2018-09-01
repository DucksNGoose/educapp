var express = require('express');
var http = require('https');
var router = express.Router();
var fetch = require('isomorphic-fetch')

/* GET home page. */
router.get('/', function(req, res, next) {
  var url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=23a6a2db334c4d87b5d10a3152610a12';
  console.log(url);
  var req =  new Request(url);
  fetch(req).then(function(response) {
    console.log(response.json());
  })
});

module.exports = router;
