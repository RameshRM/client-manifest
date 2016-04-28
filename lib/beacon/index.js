'use strict';
var modUtils = require('../mod-utils');

var manifest = require('../resources/manifest');
var manifestVersion = (modUtils.checksums.generate(manifest.toString()));

module.exports = function (req, res) {
	res.set({
		'Content-Type': 'image/gif'
	});
	res.end(modUtils.beacon.generate(req.query.v === manifestVersion), 'binary');
};
