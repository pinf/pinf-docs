
const ASSERT = require("assert");
const PATH = require("path");
const PINF = require("pinf");


PINF.main(function main(options, callback) {

	return options.$pinf.sandbox(PATH.join(__dirname, ".."), function(sandbox) {

		var log = [];

		options.$pinf._api.console = {
			log: function(message) {
				log.push(message);
			}
		}

		sandbox.main(options);

		ASSERT.deepEqual(log, [
			"Hello World"
		]);

		return callback();
	}, callback);

}, module);
