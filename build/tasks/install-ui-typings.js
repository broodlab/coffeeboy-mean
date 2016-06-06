"use strict";

const factory = require("../shared/install-typings");

factory.createInstallTypingsTask({
  taskName: "task:install-ui-typings",
  typingsFilePath: "./typings.json"
});
