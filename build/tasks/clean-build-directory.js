"use strict";

const clean = require("gulp-clean");
const gulp = require("gulp");

gulp.task("task:clean-dist-directory", () => {
  return gulp.src("dist", {read: false})
    .pipe(clean());
});

gulp.task("task:clean-dist-d-api-js-files", () => {
  return gulp.src("dist/d/api/api", {read: false})
    .pipe(clean());
});

gulp.task("task:clean-dist-d-api-shared-js-files", () => {
  return gulp.src("dist/d/api/shared", {read: false})
    .pipe(clean());
});

gulp.task("task:clean-dist-d-api-e2e-js-files", () => {
  return gulp.src("dist/d/api/e2e", {read: false})
    .pipe(clean());
});

gulp.task("task:clean-dist-d-api-unit-js-files", () => {
  return gulp.src("dist/d/api/unit", {read: false})
    .pipe(clean());
});
