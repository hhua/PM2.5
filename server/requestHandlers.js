
function start(response) {
  console.log("Request handler 'start' was called.");

  //response.sendfile(__dirname + '/html/test.html');
  response.sendfile('./html/index.html');

}

function getAllCities(response){
  console.log("Request handler 'cities' was called.");

  response.writeHead(200, {"Content-Type": "application/json"});
  var obj = {'hello' : 10};
  response.write(
  	JSON.stringify(obj)
    //JSON.stringify({ 
      //anObject: obj,
      //anArray: otherArray, 
      //another: "item",
    //})
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

exports.start = start;
exports.cities = getAllCities;
exports.allcities = getAllCitiesData;
exports.parseCityData = parseAllCitiesData;
exports.aboutPage = aboutPage;
