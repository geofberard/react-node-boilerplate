var express = require('express');
var request = require('request');
var path = require('path');

var app = express();

app.use(express.static('public'));

app.get('/api/helloworld', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send({value: "hello world"});
});

app.all('/node_modules/*', function (req, res) {
    console.log(req.path);
    res.sendFile(path.join(__dirname, req.path));
});

app.all('*', function (req, res) {
    res.sendFile(path.join(__dirname, './public', 'index.html'));
});

app.listen(8080);

// Dev environment.
// Server that manage watching/live reload and forward requests to real server

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    contentBase: "./public",
    hot: true,
    historyApiFallback: true,
    colors: true,
    stats: 'normal',
    proxy: {
      "*": "http://localhost:8080"
    }
}).listen(8081, 'localhost', function (err, result) {
    if (err) {
        return console.log(err);
    }

    console.log('Listening at http://localhost:8081/');
});