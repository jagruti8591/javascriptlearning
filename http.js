var http = require('http'); // 1 - Import Node.js core module
var fs = require('fs');

var server = http.createServer(function (req, res) {   // 2 - creating server

 
  if(req.url === '/getRandomNumber'){
     res.writeHead(200, {'Content-Type': 'text/html'});
     res.write(String(Math.random() * 100));
      res.end();
  }else if(req.url === '/home'){
        fs.readFile("clinet.html", function (error, pgResp) {
            if (error) {
                res.writeHead(404);
                res.write('Contents you are looking are Not Found');
                 res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(pgResp);
                 res.end();
            }
           
        });
  }
  else{
     res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
     res.end();
  }
 
});

server.listen(5000); //3 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')