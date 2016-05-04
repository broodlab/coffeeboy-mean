"use strict";

var gulp = require("gulp");
var seq = require("run-sequence");

gulp.task("workflow:test-unit-api-watch", function () {

  seq("task:clean-build-directory",
    "task:install-api-typings",
    "task:compile-api-unit-node-ts",
    "task:compile-api-shared-node-ts",
    "task:run-api-unit-tests"
  );

  gulp.watch([
    "src/api/**/*.ts",
    "src/shared/**/*.ts",
    "!src/api/**/*.e2e.ts"
  ], function () {
    seq("task:clean-dist-d-api-js-files",
      "task:clean-dist-d-api-shared-js-files",
      "task:compile-api-unit-node-ts",
      "task:compile-api-shared-node-ts",
      "task:run-api-unit-tests"
    );
  });
});
