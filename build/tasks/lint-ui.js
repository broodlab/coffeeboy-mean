"use strict";

const gulp = require("gulp");
const webpackConfig = require("../webpack.config");
const webpackStream = require("webpack-stream");

gulp.task("task:lint-ui", () => {
  return gulp.src("src/ui/index.ts")
    .pipe(webpackStream({
        module: {
          preLoaders: [
            webpackConfig.moduleLoaders.tslint
          ],
          loaders: [
            webpackConfig.nullModuleLoaders.css,
            webpackConfig.nullModuleLoaders.component_sass,
            webpackConfig.nullModuleLoaders.shared_sass,
            webpackConfig.nullModuleLoaders.html,
            webpackConfig.nullModuleLoaders.font_image,
            webpackConfig.moduleLoaders.ts
          ]
        },
        resolve: {
          extensions: webpackConfig.resolveExtensions
        },
        tslint: {
          configuration: require("../../tslint.json")
        },
        watch: true
      },
      null,
      webpackConfig.feedbackHandler))
    .on("error", function () {
      this.emit("end");
    });
});
