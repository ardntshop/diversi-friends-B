
/*
 * GET Requests Page.
 */

 var data = require('../data.json');

exports.view = function(req, res){
	var fs = require('fs');
	var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
	res.render('requests', data);
};


