"use strict";

const gulp = require("gulp");

gulp.task("workflow:test-e2e-ui", () => {
  process.env["COFFEEBOY_PROFILE"] = "development";
});
