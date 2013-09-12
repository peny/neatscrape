var director = require('director');
var fs = require('fs');

function renderIndex(){
  var _this = this;
  
  _this.res.writeHead(200,{'Content-Type': 'text/html'});
  fs.readFile('templates/index.html',function(err,data){
    _this.res.end(data);
  });
}

var router = new director.http.Router({
  '/': {
    get: renderIndex
  },
  '/site': {
    get: renderIndex 
  }
});

module.exports = router;
