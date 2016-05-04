"use strict";

var factory = require("../shared/compile-node-ts");

factory.createCompileNodeTsTask({
  destDirPath: "build/dist-d/api/unit",
  sourceFilePaths: [
    "src/api/**/*.ts",
    "!src/api/**/*.e2e.ts"
  ],
  taskName: "task:compile-api-unit-node-ts"
});
