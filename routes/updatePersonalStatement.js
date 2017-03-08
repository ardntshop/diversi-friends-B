var data = require('../data.json');
/*
 * POST our new personal statment page.
 */

exports.view = function(req, res){

	// Updates our personal statement with the text in the input form with name="fname"
  	data.profile[0].personalStatement = req.body.fname;

  	// Redirect to '/profile' (which means it will call the profile view)
  	res.redirect('/profile');
};