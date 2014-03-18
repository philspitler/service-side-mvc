var express = require('express');
var users_view_service = express();
var controller = users_view_service.get('controller');

users_view_service.use(express.static(__dirname));

if (!module.parent) {
  users_view_service.listen(3000);
  console.log('Listening on port 3000...');
}

module.exports = users_view_service;
