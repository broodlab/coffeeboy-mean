"use strict";

var childProcess = require("child_process");
var gulp = require("gulp");
var sleep = require("sleep");

exports.createStartStopNodeAppTasks = function (options) {

  var child;

  gulp.task(options.startTaskName, function (done) {
    child = childProcess.spawn("node", [options.appFilePath]);
    sleep.sleep(options.waitSecondsTilStart || 1);
    done();
  });

  gulp.task(options.stopTaskName, function (done) {
    child.kill("SIGINT");
    sleep.sleep(options.waitSecondsTilStop || 1);
    done();
  });
};
