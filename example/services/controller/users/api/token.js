var express = require('express'),
    app = express();
app.use(express.bodyParser());

// No-brainer auth: server will authenticate with
// username "ember" and password "casts", respond
// with a token, and forget the token when restarted.
var express = require('express'),
    app = express();

var currentToken;
app.post('/auth.json', function(req, res) {

  var body = req.body,
      username = body.username,
      password = body.password;

  if (username == 'ember' && password == 'casts') {
    // Generate and save the token (forgotten upon server restart).
    currentToken = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    res.send({
      success: true,
      token: currentToken
    });
  } else {
    res.send({
      success: false,
      message: 'Invalid username/password'
    });
  }
});

function validTokenProvided(req, res) {

  // Check POST, GET, and headers for supplied token.
  var userToken = req.body.token || req.param('token') || req.headers.token;

  if (!currentToken || userToken != currentToken) {
    res.send(401, { error: 'Invalid token. You provided: ' + userToken });
    return false;
  }

  return true;
}

if (!module.parent) {
  app.listen(3000);
  console.log('Listening on port 3000...');
}

module.exports = app;
