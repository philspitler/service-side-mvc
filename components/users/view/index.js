var express = require('express');
var users_view_service = express();
var util = require('util');

users_view_service.use(express.static(__dirname));

if (!module.parent) {
  users_view_service.listen(3000);
  console.log('Listening on port 3000...');
}

module.exports = users_view_service;
