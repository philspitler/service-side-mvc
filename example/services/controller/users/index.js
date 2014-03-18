var express = require('express');
var users_controller_service = express();

if (!module.parent) {
  users_controller_service.listen(3000);
  console.log('Listening on port 3000...');
}

module.exports = users_controller_service;
