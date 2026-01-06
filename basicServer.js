/* servidor basico de http */

var http = require("http");


var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World\n");
});


// arrancamos servidor

server.listen(1337, "127.0.0.1");

