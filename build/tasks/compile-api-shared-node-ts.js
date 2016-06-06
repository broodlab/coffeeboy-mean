"use strict";

const factory = require("../shared/compile-node-ts");

factory.createCompileNodeTsTask({
  destDirPath: "dist/d/api/shared",
  sourceFilePaths: [
    "src/shared/**/*.ts"
  ],
  taskName: "task:compile-api-shared-node-ts"
});
