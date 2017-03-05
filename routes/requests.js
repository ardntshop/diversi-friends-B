
/*
 * GET Requests Page.
 */

 

exports.view = function(req, res){
	var fs = require('fs');
	var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
	res.render('requests', data);
};






/* if
	
	decline request button = clicked

	then

	remove profile from requests screen

	else

	leave profile alone
*/
