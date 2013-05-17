var database = require("./server/database");

init();

function init() {
	console.log("Get Latest AQI Information at " + (new Date()));

	try{
		// read API key
		var fs = require('fs');
		var data = fs.readFileSync('./metadata/API-KEY.txt');
		var api_key = data.toString();

		// get AQI data
		var http = require('http');
		//var url = 'http://pm25.in/api/querys/all_cities.json?token=' + api_key;
		var url = 'http://pm25.in/api/querys.json?token=' + api_key;

		http.get(url, function(res) {
			var body = '';

      		res.on('data', function(chunk) {
         		body += chunk;
      		});

      		res.on('end', function() {
        		var response = JSON.parse(JSON.stringify(body, null, 3));
        		//console.log("Got response: " + response);

        		// write file to json
    //     		fs.writeFile('./metadata/allcities.json', body, function (err) {
  		// 			if (err) throw err;
  		// 			console.log('It\'s saved!');
				// });

      			// write back to database
      			var doc = { cities : body };

      			database.openDbInsert(doc);
      		}).on('error', function(e){
      			console.log("Got error: " + e.message);
      		});
		});
	}catch(err){
		throw err;
	}
}

setInterval(init(), 2700000);