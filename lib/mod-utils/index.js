'use strict';

var crypto = require('crypto');

module.exports.checksums = {
	generate: function (data) {
		return crypto
			.createHash('md5')
			.update(data, 'utf8')
			.digest('hex');
	}
};

module.exports.beacon = {
	generate: function (isValid) {
		if (!isValid) {
			return new Buffer('iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAEklEQVR42mNkYPhfzwAEjDAGAB6FAv/WXPi2AAAAAElFTkSuQmCC', 'hex');
		}
		return new Buffer('47494638396101000100800000dbdfef00000021f90401000000002c00000000010001000002024401003b', 'hex');
	},
};
