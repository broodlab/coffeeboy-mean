"use strict";

const gulp = require("gulp");
const seq = require("run-sequence");

gulp.task("workflow:test-unit-ui", () => {
  seq(
    ["task:clean-dist-directory", "task:install-ui-typings"],
    "task:run-ui-unit-tests"
  );
});
