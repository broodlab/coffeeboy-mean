"use strict";

var util = require("gulp-util");

exports.createErrorHandler = function (options) {
  return function (error) {
    if (!options.silent) {
      util.log(util.colors.red("[" + options.logTitle + "]"), error.toString());
    }
    if (options.exitOnError) {
      options.exit(1);
    }
    this.emit("end");
  };
};
