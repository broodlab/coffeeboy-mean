"use strict";

var gulp = require("gulp");
var seq = require("run-sequence");

gulp.task("workflow:test-unit-api-run", function () {

  seq("task:clean-build-directory",
    "task:install-api-typings",
    "task:compile-api-unit-node-ts",
    "task:compile-api-shared-node-ts",
    "task:run-api-unit-tests"
  );
});
