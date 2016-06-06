"use strict";

const gulp = require("gulp");
const path = require("path");
const typescript = require("gulp-typescript");
const utils = require("./utils");

exports.createCompileNodeTsTask = (options) => {
  gulp.task(options.taskName, () => {
    return gulp.src(options.sourceFilePaths)
      .pipe(typescript())
      .on("error", utils.createErrorHandler({
        exit: process.exit,
        exitOnError: options.exitOnError,
        logTitle: "TypeScript"
      }))
      .pipe(gulp.dest(path.join(options.destDirPath)));
  });
};
