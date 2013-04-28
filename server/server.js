var express = require('express');

function start(route, handle){
	var app = express();

	app.get('/' , function(req, res){
		route(handle, '/start', res);
	});

	app.get('/map', function(req, res){
		route(handle, '/map', res);
	});

	app.use(express.static('./css'));
	app.use(express.static('./js'));
	app.use(express.static('./img'));

	app.listen(3000);
	console.log('Listening on port 3000');
}

exports.start = start;	
