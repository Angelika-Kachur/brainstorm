const parse = require('querystring');
const http = require('http');
const port = 3000;
var sum = 0;

var s = http.createServer();

s.on('request', function(request, response) {

  if(request.url === '/calculator/' && request.method === 'GET') {
    let body = '';
    console.log(1+1);
    console.log(request.url);
    response.write('Result is ' + sum)
    response.end();
  }
});
 
s.listen(port);
console.log('Browse to http://127.0.0.1:' + port);