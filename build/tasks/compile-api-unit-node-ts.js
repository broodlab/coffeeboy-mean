"use strict";

const factory = require("../shared/compile-node-ts");

factory.createCompileNodeTsTask({
  destDirPath: "dist/d/api/unit",
  sourceFilePaths: [
    "src/api/**/*.ts",
    "!src/api/**/*.e2e.ts"
  ],
  taskName: "task:compile-api-unit-node-ts"
});
