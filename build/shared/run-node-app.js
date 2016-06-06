"use strict";

const spawnProcess = require("child_process").spawn;
const gulp = require("gulp");
const gutil = require("gulp-util");
const sleep = require("sleep");

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

    sleep.sleep(options.waitSecondsTilStart || 1);
    done();
  });

  gulp.task(options.stopTaskName, (done) => {
    childProcess.kill("SIGINT");
    sleep.sleep(options.waitSecondsTilStop || 1);
    done();
  });
};
