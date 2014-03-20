var express = require('express');
var users_component = express();
var path = require('path');
var util = require('util');
// var send = require('send');

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

//REQUIRE SERVICES
var controller = require(path.join(__dirname, '/controller'));
var view = require(path.join(__dirname, '/view'));

// view.use(function(req, res, next){
//   console.log(res.body);
//   // send(req, req.url)
//   res.body = '<script>alert("heythere");</script>';
//   next(res);
// });

//SETUP STATIC PAGES ON THE VIEW
// view.use(express.static(__dirname));

//INJECT THE MODEL INTO THE CONTROLLER
controller.set('model', users);

//INJECT THE CONTROLLER INTO THE VIEW
view.set('controller', controller);

//SETUP THE SERVICES AS ROUTES
users_component.use('/users', view);
view.use('/controller', controller);

if (!module.parent) {
  users_component.listen(3000);
  console.log('Listening on port 3000...');
}

module.exports = users_component;
