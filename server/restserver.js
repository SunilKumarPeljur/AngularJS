var app = require('./webapi');

app.set('port', process.env.PORT || 9998);

var server = app.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + server.address().port);
});