"use strict";

const gulp = require("gulp");
const seq = require("run-sequence");

gulp.task("workflow:lint-ui", () => {
  process.env["COFFEEBOY_PROFILE"] = "development";
  
  seq(
    "task:install-ui-typings",
    "task:lint-ui"
  );
});
