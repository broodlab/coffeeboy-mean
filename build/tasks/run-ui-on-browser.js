"use strict";

const browserSync = require("browser-sync");
const gulp = require("gulp");
const proxy = require("http-proxy-middleware");
const spa = require("browser-sync-spa");

gulp.task("task:run-ui-on-browser", (done) => {

  browserSync.use(spa());

  browserSync.init({
    port: 8090,
    server: {
      baseDir: [".", "dist/d/ui"],
      index: "dist/d/ui/index.html",
      middleware: proxy("/api", {
        changeOrigin: true,
        target: "http://localhost:8080"
      })
    }
  }, () => {
    done();
  });
});
