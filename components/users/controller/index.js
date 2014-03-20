var express = require('express');
var users_controller = express();

//LIST
users_controller.set('list', function () {
  var model = users_controller.get('model');
  return model.findAll();
});

users_controller.get('/', function(req, res){
  var model = users_controller.get('model');
  res.json(model.findAll());
});

//SHOW
users_controller.set('show', function (id) {
  var model = users_controller.get('model');
  return model.find(req.param['id']);
});

users_controller.get('/:id', function(req, res){
  var model = users_controller.get('model');
  res.json(find(req.param['id']));
});

//NEW

//ADD

//EDIT

//UPDATE

//DELETE

if (!module.parent) {
  users_controller.listen(3000);
  console.log('Listening on port 3000...');
}

module.exports = users_controller;
