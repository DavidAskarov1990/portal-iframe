/**
 * Created by david on 19.05.17.
 */
var express = require('express');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var logger = require('morgan');

var app = express();
var port = process.env.PORT || 3000;

app.use(favicon(__dirname + '/favicon.ico'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(logger('dev'));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, application/json, X-Frame-Options Content-Type, Accept, Authorization, Content-Length, X-Requested-With');
    if ('OPTIONS' === req.method) {
        res.send(200);
    }
    else {
        next();
    }
});

app.use(express.static('./src/client/'));
app.use('/*', express.static('./src/client/index.html'));

app.listen(port, function() {
    console.log('Express server listening on port ' + port);
});
