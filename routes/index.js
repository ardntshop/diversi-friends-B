
/*
 * GET home page.
 */
 //var data = require('../data.json');
//var fs = require('fs');
//var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));


 exports.viewBVersion = function(req, res){
	var fs = require('fs');
	var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

 	var bVersion = true;
 	res.render('index', data)
 }

exports.view = function(req, res){

	var fs = require('fs');
	var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
  	res.render('index', data);
};



