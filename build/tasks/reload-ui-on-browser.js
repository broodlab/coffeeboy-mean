"use strict";

const browserSync = require("browser-sync");
const gulp = require("gulp");

gulp.task("task:reload-ui-on-browser", () => {
  browserSync.reload();
});
