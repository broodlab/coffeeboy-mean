"use strict";

const util = require("gulp-util");

exports.createErrorHandler = (options) => {
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
