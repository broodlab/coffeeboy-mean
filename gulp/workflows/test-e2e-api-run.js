"use strict";

var gulp = require("gulp");
var runNodeApp = require("../shared/run-node-app");
var seq = require("run-sequence");

gulp.task("workflow:test-e2e-api-run", function () {

  runNodeApp.createStartStopNodeAppTasks({
    appFilePath: "build/dist-d/api/api/api.app.js",
    appName: "CoffeeBoy API",
    startTaskName: "task:start-api",
    stopTaskName: "task:stop-api"
  });

  seq("task:clean-build-directory",
    "task:install-api-typings",
    ["task:compile-api-node-ts", "task:compile-api-shared-node-ts", "task:compile-api-e2e-node-ts"],
    "task:start-api",
    "task:run-api-e2e-tests",
    "task:stop-api"
  );
});
