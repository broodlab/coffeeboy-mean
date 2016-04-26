"use strict";

var gulp = require("gulp");
var typings = require("gulp-typings");

exports.createInstallTypingsTask = function (options) {
  gulp.task(options.taskName, function () {
    return gulp.src(options.typingsFilePath)
      .pipe(typings());
  });
};
