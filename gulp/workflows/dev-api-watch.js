"use strict";

var gulp = require("gulp");
var runNodeApp = require("../shared/run-node-app");
var seq = require("run-sequence");

gulp.task("workflow:dev-api-watch", function () {

  runNodeApp.createStartStopNodeAppTasks({
    appFilePath: "build/dist-d/api/api/foo/foo.resource.js",
    startTaskName: "task:start-api",
    stopTaskName: "task:stop-api"
  });

  seq("task:clean-build-directory",
    "task:install-api-typings",
    "task:compile-api-node-ts",
    "task:start-api"
  );

  gulp.watch(["src/api/**/*.ts", "!src/api/**/*.e2e.ts", "!src/api/**/*.unit.ts"], function () {
    seq("task:clean-dist-d-api-js-files",
      "task:compile-api-node-ts",
      "task:stop-api",
      "task:start-api"
    );
  });
});
