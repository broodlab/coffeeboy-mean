"use strict";

var factory = require("../shared/run-unit-tests-on-node");

factory.createRunUnitTestsOnNodeTask({
  sourceFilePaths: ["build/dist-d/api/**/*.unit.js"],
  taskName: "task:run-api-unit-tests"
});
