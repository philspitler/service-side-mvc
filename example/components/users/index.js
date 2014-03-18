var express = require('express');
var users_component = express();
var path = require('path');

//REQUIRE SERVICES
var view_service = require('ssmvc-view-users');
var controller_service = require('ssmvc-controller-users');

//INJECT THE CONTROLLER INTO THE VIEW
view_service.use('/controller', controller_service);

//SETUP THE SERVICES AS ROUTES
users_component.use('/users', view_service);

if (!module.parent) {
  users_component.listen(3000);
  console.log('Listening on port 3000...');
}

module.exports = users_component;
