'use strict';

module.exports = function (req, res) {
	res.status(200).send('Ok');
};


'use strict';

var fs = require('fs');
var path = require('path');
var handlebars = require('handlebars');


var viewFile = fs.readFileSync(path.join(__dirname, '/index.hbs')).toString();

var template = handlebars.compile(viewFile);

module.exports = function (req, res) {
	res.status(200).send(template({}));
};
