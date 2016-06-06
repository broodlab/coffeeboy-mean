"use strict";

const gulp = require("gulp");
const mocha = require("gulp-mocha");
const utils = require("./utils");

exports.createRunUnitTestsOnNodeTask = (options) => {
  gulp.task(options.taskName, () => {
    return gulp.src(options.sourceFilePaths, {read: false})
      .pipe(mocha({
        reporter: "spec"
      }))
      .on("error", utils.createErrorHandler({
        silent: true
      }));
  });
};
