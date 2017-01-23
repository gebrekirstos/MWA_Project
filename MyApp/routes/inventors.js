var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var file = fs.readFileSync(__dirname +'/inventors.json','utf8');
    var jsonData= JSON.parse(file);

 res.render('inventors', { title: jsonData });
});

module.exports = router;
