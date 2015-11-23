var http = require('http');
var account = require('./module_03.js');

var server = http.createServer(function (request, response) {
	
response.writeHead(200);
response.write(account.balance());
response.end();

})

server.listen(8080);