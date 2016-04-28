'use strict';
var today = new Date();
var started = new Date();
var manifest = require('../resources/manifest');
var modUtils = require('../mod-utils');
var manifestVersion = (modUtils.checksums.generate(manifest.toString()));
module.exports = function (req, res) {

	var expires = today;
	expires.setDate(today.getDate() + 7);

	res.set({
		'Cache-Control': 'public, max-age=31536000',
		'Last-Modified': started
	});
	res.status(200).send({
		clientManifests: manifest,
		version: manifestVersion
	});
};
