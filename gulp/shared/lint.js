"use strict";

var config = require("../config");
var gulp = require("gulp");
var tslint = require("gulp-tslint");
var typescript = require("gulp-typescript");
var utils = require("./utils");

exports.createLintTask = function (options) {
  gulp.task(options.taskName, function () {
    return gulp.src(options.sourceFilePaths)
      .pipe(tslint())
      .pipe(tslint.report("prose", {emitError: true}))
      .on("error", utils.createErrorHandler({
        exit: process.exit,
        exitOnError: options.exitOnError,
        silent: true
      }))
      .pipe(typescript(config.tsConfig))
      .on("error", utils.createErrorHandler({
        exit: process.exit,
        exitOnError: options.exitOnError,
        logTitle: "TypeScript"
      }));
  });
};
