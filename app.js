var http = require('http');

var Router = require('./routes/main.js');

var server = http.createServer(function(req, res){
  Router.dispatch(req, res, function(err){
    if(err){
      res.writeHead(404);
      res.end();
    }
  });
});

server.listen(3000);
