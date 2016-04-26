"use strict";

var gulp = require("gulp");
var mocha = require("gulp-mocha");
var utils = require("./utils");

exports.createRunUnitTestsOnNodeTask = function (options) {
  gulp.task(options.taskName, function () {
    return gulp.src(options.sourceFilePaths, {read: false})
      .pipe(mocha({
        reporter: "spec"
      }))
      .on("error", utils.createErrorHandler({
        silent: true
      }));
  });
};
