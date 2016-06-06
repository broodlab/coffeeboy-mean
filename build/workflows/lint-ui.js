"use strict";

const gulp = require("gulp");
const seq = require("run-sequence");

gulp.task("workflow:lint-ui", () => {
  seq(
    "task:install-ui-typings",
    "task:lint-ui"
  );
});
