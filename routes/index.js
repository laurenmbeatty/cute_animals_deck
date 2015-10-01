var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var jsonquery = require('json-query');

var fileLocation = path.join(__dirname, '../models/cuteimages.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.get('/cute/:id?', function(request, response, next){
      var id = request.params.id;
      console.log(fileLocation);
      fs.readFile(fileLocation, function(err, data){
        var obj = JSON.parse(data);

        var query = getJsonQueryString('id', id);
        if(id) {
            var image = jsonquery(query, {data: obj}).value;
            console.log(image);
            response.json(image);
        }else{
            response.json(obj);
        }


      });

});

function getJsonQueryString(key, value){
    var queryString = '[' + key + '=' + value + ']';
    console.log('Generate query string: ' + queryString);
    return queryString;
    }

module.exports = router;
