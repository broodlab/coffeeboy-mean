"use strict";

const gulp = require("gulp");
const seq = require("run-sequence");

gulp.task("workflow:lint-api", () => {

  seq(
    "task:install-api-typings",
    "task:lint-api"
  );

  gulp.watch("src/api/**/*.ts", ["task:lint-api"]);
});
