var express = require("express"),
    app     = express(),
    http    = require("http"),
    server  = http.createServer(app);

app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.get('/', function(req, res) {
  res.send("Hello world!");
});

routes = require('./routes/recibos')(app);

server.listen(8080, function() {
  console.log("Node server running on 8080 port");
});
