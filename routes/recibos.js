//File: routes/recibos.js
module.exports = function(app) {

//POST - Insert a new recibo in the DB
addRecibo = function(req, res) {
  console.log('POST');
  console.log(req.body);

  res.send("Post recibo");
};

app.post('/recibo', addRecibo);
}
