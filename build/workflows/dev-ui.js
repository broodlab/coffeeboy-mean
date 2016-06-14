"use strict";

const bundleUi = require("../shared/bundle-ui");
const gulp = require("gulp");
const seq = require("run-sequence");

gulp.task("workflow:dev-ui", () => {
  process.env["COFFEEBOY_PROFILE"] = "development";

  bundleUi.createBundleUiTask({
    destDirPath: "dist/d/ui",
    taskName: "task:bundle-ui-dist-d",
    tasksOnFirstRun: ["task:run-ui-on-browser"],
    tasksOnRerun: ["task:reload-ui-on-browser"],
    rerunOnChanges: true
  });

  seq(
    ["task:clean-dist-directory", "task:install-ui-typings"],
    "task:bundle-ui-dist-d"
  );
});
