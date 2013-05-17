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

