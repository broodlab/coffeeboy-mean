"use strict";

const gulp = require("gulp");
const seq = require("run-sequence");

gulp.task("workflow:test-unit-ui", () => {
  process.env["COFFEEBOY_PROFILE"] = "development";

  seq(
    ["task:clean-dist-directory", "task:install-ui-typings"],
    "task:run-ui-unit-tests"
  );
});
