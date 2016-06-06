"use strict";

const factory = require("../shared/run-unit-tests-on-node");

const path = require("path")

factory.createRunUnitTestsOnNodeTask({
  sourceFilePaths: ["./dist/d/api/e2e/**/*.e2e.js"],
  taskName: "task:run-api-e2e-tests"
});
