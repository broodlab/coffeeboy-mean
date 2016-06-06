"use strict";

const factory = require("../shared/compile-node-ts");

factory.createCompileNodeTsTask({
  destDirPath: "dist/d/api/e2e",
  sourceFilePaths: [
    "src/api/**/*.ts",
    "!src/api/**/*.unit.ts"
  ],
  taskName: "task:compile-api-e2e-node-ts"
});
