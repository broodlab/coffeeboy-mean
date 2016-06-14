"use strict";

const gulp = require("gulp");
const seq = require("run-sequence");

gulp.task("workflow:lint-api", () => {
  process.env["COFFEEBOY_PROFILE"] = "development";

  seq(
    "task:install-api-typings",
    "task:lint-api"
  );

  gulp.watch("src/api/**/*.ts", ["task:lint-api"]);
});
