"use strict";

var factory = require("../shared/compile-node-ts");

factory.createCompileNodeTsTask({
  destDirPath: "build/dist-d/api/shared",
  sourceFilePaths: [
    "src/shared/**/*.ts"
  ],
  taskName: "task:compile-api-shared-node-ts"
});
