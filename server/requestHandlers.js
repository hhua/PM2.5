
function start(response) {
  console.log("Request handler 'start' was called.");

  //response.sendfile(__dirname + '/html/test.html');
  response.sendfile('./html/index.html');

}

exports.start = start;
