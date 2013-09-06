
const PINF = require("pinf");


PINF.main(function main(options) {
	options.$pinf.getAPI("console").log("Hello World");
	return true;
}, module);
