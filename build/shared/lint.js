"use strict";

const gulp = require("gulp");
const tslint = require("gulp-tslint");
const typescript = require("gulp-typescript");
const utils = require("./utils");

exports.createLintTask = (options) => {
  gulp.task(options.taskName, () => {
    return gulp.src(options.sourceFilePaths)
      .pipe(tslint({formatter: "prose"}))
      .pipe(tslint.report({emitError: false}))
      .on("error", utils.createErrorHandler({
        exit: process.exit,
        exitOnError: options.exitOnError,
        silent: true
      }))
      .pipe(typescript())
      .on("error", utils.createErrorHandler({
        exit: process.exit,
        exitOnError: options.exitOnError,
        logTitle: "TypeScript"
      }));
  });
};
