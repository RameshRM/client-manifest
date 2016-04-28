'use strict';

var express = require('express');
var app = express();
var debug = require('debug')('client-manifest');

var metaRouterMW = require('meta-router/middleware');
var metaRouter = metaRouterMW.match(require.resolve('./routes.json'));


var listener = app.listen(55909);
debug('Server running on port:%s', listener.address().port);

app.use(metaRouter);
app.use(metaRouterMW.invokeHandler());
