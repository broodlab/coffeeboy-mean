"use strict";

const spawnProcess = require("child_process").spawn;
const gulp = require("gulp");
const gutil = require("gulp-util");

exports.createStartStopNodeAppTasks = (options) => {

  let childProcess;

  gulp.task(options.startTaskName, (done) => {

    childProcess = spawnProcess("node", [options.appFilePath]);
    const logPrefix = "[" + (options.appName || "node app") + "] ";

    childProcess.stdout.on("data", (data) => {
      gutil.log(logPrefix + data.toString());
    });
    childProcess.stderr.on("data", (data) => {
      gutil.log(gutil.colors.red(logPrefix), data.toString());
    });

    setTimeout(() => done(), options.waitSecondsTilStart || 1);
  });

  gulp.task(options.stopTaskName, (done) => {
    childProcess.kill("SIGINT");
    setTimeout(() => done(), options.waitSecondsTilStop || 1);
  });
};
