"use strict";

const factory = require("../shared/lint");

factory.createLintTask({
  exitOnError: false,
  sourceFilePaths: ["src/api/**/*.ts"],
  taskName: "task:lint-api"
});
