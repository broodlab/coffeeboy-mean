"use strict";

var factory = require("../shared/compile-node-ts");

factory.createCompileNodeTsTask({
  destDirPath: "build/dist-d/api/api",
  sourceFilePaths: ["src/api/**/*.ts", "!src/api/**/*.e2e.ts", "!src/api/**/*.unit.ts"],
  taskName: "task:compile-api-node-ts"
});
