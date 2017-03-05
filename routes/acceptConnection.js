/*
 * Accept Connection.
 */

exports.view = function(req, res){

	var fs = require('fs');
	var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

	for (var i = 0; i < data.requests.length; i++) {
		if (data.requests[i].name == req.query.name) {
			data.requests[i].display = false;
		

for (var i = 0; i < data.friends.length; i++) {
		if (data.friends[i].name == req.query.name) {
			data.friends[i].display = true;
		}



		}

	
	}
	}
	
	var json = JSON.stringify(data, null, "\t");

	fs.writeFileSync('data.json', json, 'utf8');
  	res.json(data);
};
