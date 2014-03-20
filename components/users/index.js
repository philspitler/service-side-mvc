var componentModule = function (required) {
  var express = required.express;
  var users_component = express();
  var path = required.path;
  var util = required.util;

  //MODEL DATA
  var users = (function () {
    var data = [{'name': 'Keith'},
      {'name': 'Jason'},
      {'name': 'Phil'},
      {'name': 'Patrick'},
      {'name': 'Wes'}
    ];

    return {
      findAll: function () {
        return data;
      },
      find: function (id) {
        return data[id - 1];
      }
    }
  }());

  //CHILD-APP DIRECTORIES
  var controllerDir = path.join(__dirname, '/controller');
  var viewDir = path.join(__dirname, '/view');

  //REQUIRE SERVICES
  var controller = require(controllerDir);
  var view = require(viewDir);

  //SETUP STATIC PAGES ON CHILD-APPS
  view.use(express.static(viewDir));
  controller.use(express.static(controllerDir));

  //INJECT THE MODEL INTO THE CONTROLLER
  controller.set('model', users);

  //INJECT THE CONTROLLER INTO THE VIEW
  view.set('controller', controller);

  //SETUP THE SERVICES AS ROUTES
  users_component.use('/users', view);
  view.use('/controller', controller);

  return users_component;
};

if (!module.parent) {
  var required = {
    express: require('express'),
    path: require('path'),
    util: require('util')
  }
  componentModule(required).listen(3000);
  console.log('Listening on port 3000...');
}

module.exports.component = componentModule;
