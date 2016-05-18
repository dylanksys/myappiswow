var express = require ('express');

var thewow = require('../routers/thewow');

var app = express();

app.use('/', thewow);

app.listen(9000, function () {
  console.log('theappiswow listening on port 9000');
};
