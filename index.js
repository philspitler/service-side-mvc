var app_users = require('ssmvc-users');
var express = require('express');
var app_service_side_example = express();

app_service_side_example.use('/users', app_users);

if (!module.parent) {
  app_service_side_example.listen(3000);
  console.log('Listening on port 3000...');
}

module.exports = app_service_side_example;
