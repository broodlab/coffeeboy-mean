"use strict";

var factory = require("../shared/run-unit-tests-on-node");

factory.createRunUnitTestsOnNodeTask({
  sourceFilePaths: ["build/dist-d/api/**/*.e2e.js"],
  taskName: "task:run-api-e2e-tests"
});
