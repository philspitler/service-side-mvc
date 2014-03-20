var appModule = function (required) {
  var app_users = require('components/users')(required);

  var app_service_side_example = required.express();

  app_service_side_example.use('/users', app_users);
}

if (!module.parent) {
  app_service_side_example({
    express: require('express')
  }).listen(3000);
  console.log('Listening on port 3000...');
}

module.exports = app_service_side_example;
