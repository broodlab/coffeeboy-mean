"use strict";

var factory = require("../shared/install-typings");

factory.createInstallTypingsTask({
  taskName: "task:install-api-typings",
  typingsFilePath: "./typings.json"
});
