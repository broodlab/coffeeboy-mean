"use strict";

const gulp = require("gulp");
const seq = require("run-sequence");

gulp.task("workflow:test-unit-api", () => {
  process.env["COFFEEBOY_PROFILE"] = "development";

  seq(
    ["task:clean-dist-directory", "task:install-api-typings"],
    ["task:compile-api-unit-node-ts", "task:compile-api-shared-node-ts"],
    "task:run-api-unit-tests"
  );

  gulp.watch([
    "src/api/**/*.ts",
    "!src/api/**/*.e2e.ts"
  ], () => {
    seq(
      "task:clean-dist-d-api-js-files",
      "task:compile-api-unit-node-ts",
      "task:run-api-unit-tests"
    );
  });

  gulp.watch(["src/shared/**/*.ts"], () => {
    seq(
      "task:clean-dist-d-api-shared-js-files",
      "task:compile-api-shared-node-ts",
      "task:run-api-unit-tests"
    );
  });
});
