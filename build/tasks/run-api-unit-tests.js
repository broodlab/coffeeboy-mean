"use strict";

const factory = require("../shared/run-unit-tests-on-node");

factory.createRunUnitTestsOnNodeTask({
  sourceFilePaths: ["dist/d/api/**/*.unit.js"],
  taskName: "task:run-api-unit-tests"
});
