"use strict";

const gulp = require("gulp");
const runNodeApp = require("../shared/run-node-app");
const seq = require("run-sequence");

gulp.task("workflow:dev-api", () => {
  process.env["COFFEEBOY_PROFILE"] = "development";

  runNodeApp.createStartStopNodeAppTasks({
    appFilePath: "dist/d/api/api/index.js",
    appName: "CoffeeBoy API",
    startTaskName: "task:start-api",
    stopTaskName: "task:stop-api"
  });

  seq(
    ["task:clean-dist-directory", "task:install-api-typings"],
    ["task:compile-api-node-ts", "task:compile-api-shared-node-ts"],
    "task:start-api"
  );

  gulp.watch([
    "src/api/**/*.ts",
    "!src/api/**/*.e2e.ts",
    "!src/api/**/*.unit.ts"
  ], () => {
    seq(
      "task:clean-dist-d-api-js-files",
      "task:compile-api-node-ts",
      "task:stop-api",
      "task:start-api"
    );
  });

  gulp.watch(["src/shared/**/*.ts"], () => {
    seq(
      "task:clean-dist-d-api-shared-js-files",
      "task:compile-api-shared-node-ts",
      "task:stop-api",
      "task:start-api"
    );
  });

  gulp.watch(["src/api/**/*.e2e.ts"], () => {
    seq(
      "task:clean-dist-d-api-e2e-js-files",
      "task:compile-api-e2e-node-ts"
    );
  });

  gulp.watch(["src/api/**/*.unit.ts"], () => {
    seq(
      "task:clean-dist-d-api-unit-js-files",
      "task:compile-api-unit-node-ts"
    );
  });
});
