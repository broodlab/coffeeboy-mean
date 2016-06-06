"use strict";

const gulp = require("gulp");
const wrench = require("wrench");

process.env["NODE_ENV"] = "development";

wrench.readdirSyncRecursive("./build")
  .filter((file) => (/\.(js)$/i).test(file))
  .map((file) => require("./build/" + file));

gulp.task("default", [], () => {
  gulp.start("workflow:dev_app_watch");
});
