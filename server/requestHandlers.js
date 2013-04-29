
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

exports.start = start;
exports.cities = getAllCities;
