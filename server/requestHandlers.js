

function map(response) {
  console.log("Request handler 'map' was called.");

  //response.sendfile(__dirname + '/html/test.html');
  response.sendfile('./html/map.html');

}

function getAllCities(response){
  console.log("Request handler 'cities' was called.");

  response.writeHead(200, {"Content-Type": "application/json"});
 /* 
  // choice one
  var http = require("http");
  var url = 'http://pm25.in/api/querys/all_cities.json?token=8YPakL9VAYc5p3sTXx2S';
  //var https = require("https");

  http.get(url, function(res){
    var body = '';
    res.setEncoding('utf8');

    res.on('data', function(chunk) {
      body += chunk;
    });

    res.on('end', function() {
      var jsonResponse = JSON.parse(body);
      console.log("Got response: " + body);
    });
  });
*/
  //var obj = {'hello' : 10};

  // choice two
  var test_cities = require("../html/test_cities")
  console.log("Got response: " + test_cities);

  response.write(
  	//JSON.stringify(obj)
    //JSON.stringify({ 
      //anObject: obj,
      //anArray: otherArray, 
      //another: "item",
    //})
    JSON.stringify(test_cities)
  );
  response.end();
}

function getAllCitiesData(response){
	  console.log("Request handler 'allcities' was called.");

  	//response.sendfile(__dirname + '/html/test.html');
  	response.sendfile('./html/cities.html');
}

function parseAllCitiesData(response){
    console.log("Request handler 'parse' was called.");

    response.writeHead(200, {"Content-Type": "application/json"});

    

    response.end();
}

function aboutPage(response){
    console.log("Request handler 'about' was called.");

    //response.sendfile(__dirname + '/html/test.html');
    response.sendfile('./html/about.html');
}

exports.map = map;
exports.cities = getAllCities;
exports.allcities = getAllCitiesData;
exports.parseCityData = parseAllCitiesData;
exports.aboutPage = aboutPage;
