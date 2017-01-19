const express = require('express');
const path = require('path');
const routes = require('./routes/index');

const app = express();
const port = 8080;


app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

console.log(`App listening on port: ${port}`);
app.listen(port)

module.exports = app;
