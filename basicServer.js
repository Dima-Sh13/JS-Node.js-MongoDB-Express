/* servidor basico de http */

var http = require("http");


var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
    response.end("<h3>Hello World, im a Node.js server<h3>");
});


// arrancamos servidor

server.listen(1337, "127.0.0.1");

console.log("servidor working properly on 127.0.0.1:1337")


