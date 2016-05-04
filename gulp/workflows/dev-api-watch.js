"use strict";

var gulp = require("gulp");
var runNodeApp = require("../shared/run-node-app");
var seq = require("run-sequence");

gulp.task("workflow:dev-api-watch", function () {

  runNodeApp.createStartStopNodeAppTasks({
    appFilePath: "build/dist-d/api/api/api.app.js",
    appName: "CoffeeBoy API",
    startTaskName: "task:start-api",
    stopTaskName: "task:stop-api"
  });

  seq("task:clean-build-directory",
    "task:install-api-typings",
    "task:compile-api-node-ts",
    "task:compile-api-shared-node-ts",
    "task:start-api"
  );

  gulp.watch([
    "src/api/**/*.ts",
    "src/shared/**/*.ts",
    "!src/api/**/*.e2e.ts",
    "!src/api/**/*.unit.ts"
  ], function () {
    seq("task:clean-dist-d-api-js-files",
      "task:clean-dist-d-api-shared-js-files",
      "task:compile-api-node-ts",
      "task:compile-api-shared-node-ts",
      "task:stop-api",
      "task:start-api"
    );
  });

  gulp.watch(["src/api/**/*.e2e.ts"], function () {
    seq("task:clean-dist-d-api-e2e-js-files",
      "task:compile-api-e2e-node-ts"
    );
  });

  gulp.watch(["src/api/**/*.unit.ts"], function () {
    seq("task:clean-dist-d-api-unit-js-files",
      "task:compile-api-unit-node-ts"
    );
  });
});
