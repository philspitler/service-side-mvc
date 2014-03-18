var express = require('express');
var users_controller = express();

//LIST
// var list = function () {
//   return users_controller.get('model');
// }

users_controller.get('/', function(req, res){
  var data = users_controller.get('model');
  res.json(data);
});

//SHOW
// var show = function (id) {
//   var data = users_controller.get('model');
//   return data[req.param['id']];
// }

users_controller.get('/:id', function(req, res){
  var data = users_controller.get('model');
  res.json(data[req.param['id']]);
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
