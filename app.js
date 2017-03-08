
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')
// Example route
// var user = require('./routes/user');

// below added by tommy
var login = require('./routes/login');
var requests = require('./routes/requests');
var index = require('./routes/index');
var profile = require('./routes/profile');
var friends = require('./routes/friends');
var hideMatch = require('./routes/hideMatch');
var hideRequest = require('./routes/hideRequest');
var acceptConnection = require('./routes/acceptConnection');
var showConnectionRequest = require('./routes/showConnectionRequest');
var hideFriend = require('./routes/hideFriend');
var updatePersonalStatement = require('./routes/updatePersonalStatement');
//var indexb = require('./routes/indexb');


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
// Example route
// app.get('/users', user.list);

//below added by tommy
app.get('/login', login.view);
app.get('/requests', requests.view);
app.get('/index', index.view);
app.get('/profile', profile.view);
app.get('/friends', friends.view);
//app.get('/indexb', indexb.view);
app.get('/bVersion', index.viewBVersion);

//write JSON data (Added by Tommy 2/28):
//app.post('/requests/:id', requests.declineRequest);
app.get('/hideMatch', hideMatch.view);
app.get('/hideRequest', hideRequest.view);
app.get('/acceptConnection', acceptConnection.view);
app.get('/showConnectionRequest', showConnectionRequest.view);
app.get('/hideFriend', hideFriend.view);
app.post('/updatePersonalStatement', updatePersonalStatement.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


















