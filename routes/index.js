
/*
 * GET home page.
 */
 //var data = require('../data.json');
//var fs = require('fs');
//var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
var bVersion = require('../data.json');

 exports.viewBVersion = function(req, res){
	//var fs = require('fs');
	//var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

	bVersion['bVersion'] = true;
 	res.render('index', bVersion)
 }

exports.view = function(req, res){

	//var fs = require('fs');
	//var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
	bVersion['bVersion'] = false;
  	res.render('index', bVersion);
};



