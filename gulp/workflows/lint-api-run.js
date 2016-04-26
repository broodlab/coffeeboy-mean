"use strict";

var gulp = require("gulp");
var seq = require("run-sequence");

gulp.task("workflow:lint-api-run", function () {

  seq("task:install-api-typings",
    "task:lint-api"
  );
});
