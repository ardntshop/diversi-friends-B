
/*
 * GET Friends page.
 */

exports.view = function(req, res){

	var fs = require('fs');
	var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
  	res.render('friends', data);
};