"use strict";

var clean = require("gulp-clean");
var gulp = require("gulp");

gulp.task("task:clean-build-directory", function () {
  return gulp.src("build", {read: false})
    .pipe(clean());
});

gulp.task("task:clean-dist-d-api-js-files", function () {
  return gulp.src("build/dist-d/api/api", {read: false})
    .pipe(clean());
});

gulp.task("task:clean-dist-d-api-e2e-js-files", function () {
  return gulp.src("build/dist-d/api/e2e", {read: false})
    .pipe(clean());
});

gulp.task("task:clean-dist-d-api-unit-js-files", function () {
  return gulp.src("build/dist-d/api/unit", {read: false})
    .pipe(clean());
});
