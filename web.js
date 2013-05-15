var server = require("./server/server");
var router = require("./server/router");
var requestHandlers = require("./server/requestHandlers");

var handle = {};
handle["/"] = requestHandlers.map;
handle["/map"] = requestHandlers.map;
handle["/cities"] = requestHandlers.cities;
handle["/allcities"] = requestHandlers.allcities;
handle["/parseCityData"] = requestHandlers.parseCityData;
handle["/about"] = requestHandlers.aboutPage;

server.start(router.route, handle);

setInterval(function() {
	console.log("Get Latest AQI Information at " + (new Date()));

	try{
		// read API key
		var fs = require('fs');
		var data = fs.readFileSync('./metadata/API-KEY.txt');
		var api_key = data.toString();

		// get AQI data
		var http = require('http');
		var url = 'http://pm25.in/api/querys/all_cities.json?token=' + api_key;
		//var url = 'http://pm25.in/api/querys.json?token=' + api_key;

		http.get(url, function(res) {
			var body = '';

      		res.on('data', function(chunk) {
         		body += chunk;
      		});

      		res.on('end', function() {
        		var response = JSON.parse(JSON.stringify(body, null, 3));
        		console.log("Got response: " + response);

        		// write file to json
        		fs.writeFile('./metadata/allcities.json', JSON.stringify(body, null, 3), function (err) {
  					if (err) throw err;
  					console.log('It\'s saved!');
				});

      		}).on('error', function(e){
      			console.log("Got error: " + e.message);
      		});
		});
	}catch(err){
		throw err;
	}
}, 10000);