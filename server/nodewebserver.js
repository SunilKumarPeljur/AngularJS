var express = require('express');
var cors = require('cors');
var fs = require('fs');
const PORT = 8888;
var app = express();
app.use(cors());

//http://IP:PORT/players
app.get('/players', function (req, res) {
	console.log('Handling req....')
	fs.readFile(__dirname + "/player.json", "utf-8", function (err, data) {
		res.end(data);
		console.log('Req handled');
	});
});

//Listen to this port
app.listen(PORT, function () {
	console.log('Server started on port ' + PORT + ' ....');
});