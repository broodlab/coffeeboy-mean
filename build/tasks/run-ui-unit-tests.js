"use strict";

const gulp = require("gulp");
const karma = require("karma");
const path = require("path");

gulp.task("task:run-ui-unit-tests", [], (done) => {
  const server = new karma.Server({
    configFile: path.join(__dirname, "../karma.config.js")
  }, () => {
    done();
  });

  server.start();
});
