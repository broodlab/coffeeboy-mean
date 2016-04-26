"use strict";

var config = require("../config");
var gulp = require("gulp");
var path = require("path");
var typescript = require("gulp-typescript");
var utils = require("./utils");

exports.createCompileNodeTsTask = function (options) {
  gulp.task(options.taskName, function () {
    return gulp.src(options.sourceFilePaths)
      .pipe(typescript(config.tsConfig))
      .on("error", utils.createErrorHandler({
        exit: process.exit,
        exitOnError: options.exitOnError,
        logTitle: "TypeScript"
      }))
      .pipe(gulp.dest(path.join(options.destDirPath)));
  });
};
