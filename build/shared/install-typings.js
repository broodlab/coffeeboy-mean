"use strict";

const gulp = require("gulp");
const typings = require("gulp-typings");

exports.createInstallTypingsTask = (options) => {
  gulp.task(options.taskName, () => {
    return gulp.src(options.typingsFilePath)
      .pipe(typings());
  });
};
