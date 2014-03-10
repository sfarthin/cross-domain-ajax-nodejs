var express = require("express"),
	app = express();

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.configure(function() {
    app.use(allowCrossDomain);
});

app.post('/', function(req, res) {
	res.send('hello world');
});

app.get('/', function(req, res) {
	res.send('hello world!!');
});

app.listen(3000);