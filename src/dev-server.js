/**
 * Created by Mili on 2017/6/19.
 */

var opn = require('opn');
var express = require("express");
var webpack = require("webpack");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var proxyMiddleware = require('http-proxy-middleware');
var webpackConfig = require("../webpack.config");

var app = express();
var compiler = webpack(webpackConfig);

var devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: '/'
});

app.use(devMiddleware);

let port = 8090;
let uri = 'http://localhost:' + port;

console.log('> Starting dev server...');
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n');
  opn(uri);
});

app.listen(port);

