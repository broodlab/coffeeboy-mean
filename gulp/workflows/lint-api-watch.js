"use strict";

var gulp = require("gulp");
var seq = require("run-sequence");

gulp.task("workflow:lint-api-watch", function () {

  seq("task:install-api-typings",
    "task:lint-api"
  );

  gulp.watch("src/api/**/*.ts", ["task:lint-api"]);
});
