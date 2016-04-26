"use strict";

var gulp = require("gulp");
var seq = require("run-sequence");

gulp.task("workflow:test-unit-api-watch", function () {

  seq("task:clean-build-directory",
    "task:install-api-typings",
    "task:compile-api-unit-node-ts",
    "task:run-api-unit-tests"
  );

  gulp.watch(["src/api/**/*.ts", "!src/api/**/*.e2e.ts"], function () {
    seq("task:clean-dist-d-api-js-files",
      "task:compile-api-unit-node-ts",
      "task:run-api-unit-tests"
    );
  });
});
