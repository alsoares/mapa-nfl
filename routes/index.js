var express = require('express');
var fs = require('fs');
var router = express.Router();
var temporadaAtual = require('../public/times.json');
var https = require("https");
var GoogleMapsAPI = require('googlemaps');





/* GET home page. */
router.get('/', function(req, res, next) {

  var config = {
    key: 'AIzaSyCLYBtLfJBStBP9qsVRK34263G95ZhWg0U',
    stagger_time:       1000, // for elevationPath 
    encode_polylines:   false,
    secure:             true, // use https 
    proxy:              'http://127.0.0.1:3000' // optional, set a proxy for HTTP requests 
  };
  
  
  var gmAPI = new GoogleMapsAPI(config);

  var geocodeParams = {
    "address":    "121, Curtain Road, EC2A 3AD, London UK",
    "components": "components=country:GB",
    "bounds":     "55,-1|54,1",
    "language":   "en",
    "region":     "uk"
  };
   
  gmAPI.geocode(geocodeParams, function(err, result){
    
    console.log(err);
    console.log(result);
  });
  res.render('index', { title: 'Express' });
  

});






module.exports = router;
