"use strict";

var spawnProcess = require("child_process").spawn;
var gulp = require("gulp");
var gutil = require("gulp-util");
var sleep = require("sleep");

exports.createStartStopNodeAppTasks = function (options) {

  var childProcess;

  gulp.task(options.startTaskName, function (done) {

    childProcess = spawnProcess("node", [options.appFilePath]);
    var logPrefix = "[" + (options.appName || "node app") + "] ";

    childProcess.stdout.on("data", function (data) {
      gutil.log(logPrefix + data.toString());
    });
    childProcess.stderr.on("data", function (data) {
      gutil.log(gutil.colors.red(logPrefix), data.toString());
    });

    sleep.sleep(options.waitSecondsTilStart || 1);
    done();
  });

  gulp.task(options.stopTaskName, function (done) {
    childProcess.kill("SIGINT");
    sleep.sleep(options.waitSecondsTilStop || 1);
    done();
  });
};
