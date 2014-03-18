var express = require('express');
var users_component = express();
var path = require('path');

//MODEL DATA
var users = [
  {'name': 'Keith'},
  {'name': 'Jason'},
  {'name': 'Phil'},
  {'name': 'Patrick'},
  {'name': 'Wes'}
];

//REQUIRE SERVICES
var view = require(path.join(__dirname, '/users'));
var controller = require(path.join(__dirname, '/controller'));

//INJECT THE MODEL INTO THE CONTROLLER
controller.set('model', users);

//INJECT THE CONTROLLER INTO THE VIEW
view.use('/controller', controller);

//SETUP THE SERVICES AS ROUTES
users_component.use('/users', view);

if (!module.parent) {
  users_component.listen(3000);
  console.log('Listening on port 3000...');
}

module.exports = users_component;
