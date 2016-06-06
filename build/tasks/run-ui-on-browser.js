"use strict";

const browserSync = require("browser-sync");
const gulp = require("gulp");

gulp.task("task:run-ui-on-browser", (done) => {

  browserSync.init({
    port: 8090,
    server: {
      baseDir: [".", "dist/d/ui"],
      index: "dist/d/ui/index.html"
    }
  }, () => {
    done();
  });
});
