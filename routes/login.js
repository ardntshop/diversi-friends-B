
/*
 * GET Login Page.
 */

 var fs = require('fs');

 var data = require('../data.json');

 exports.resetData = function(req, res){

 	console.log('resetData');

	fs.writeFileSync('../data.json', data);
	res.sendStatus(200);
 }

exports.view = function(req, res){
  res.render('login');
};