var express = require('express');

function start(route, handle){
	var app = express();

	app.get('/' || '/start', function(req, res){
		route(handle, '/start', res);
  		
	});

	app.listen(3000);
	console.log('Listening on port 3000');
}

exports.start = start;	
