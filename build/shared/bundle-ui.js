"use strict";

const gulp = require("gulp");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const seq = require("run-sequence");
const utils = require("../shared/utils");
const webpack = require("webpack");
const webpackConfig = require("../webpack.config");
const webpackStream = require("webpack-stream");

exports.createBundleUiTask = (options) => {

  gulp.task(options.taskName, () => {

    let firstRun = true;

    return gulp.src("dummy")
      .pipe(webpackStream({
          devtool: "source-map",
          entry: {
            "index": "./src/ui/index.ts",
            "polyfill": "./src/ui/polyfill.ts",
            "vendor": "./src/ui/vendor.ts"
          },
          module: {
            loaders: [
              webpackConfig.moduleLoaders.css,
              webpackConfig.moduleLoaders.component_sass,
              webpackConfig.moduleLoaders.shared_sass,
              webpackConfig.moduleLoaders.html,
              webpackConfig.moduleLoaders.font_image,
              webpackConfig.moduleLoaders.ts
            ]
          },
          output: {
            filename: "ui/[name].js"
          },
          plugins: [
            new HtmlWebpackPlugin({
              filename: "index.html",
              template: "src/ui/index.html",
              title: "CoffeeBoy"
            }),
            new webpack.optimize.CommonsChunkPlugin({
              name: ["index", "vendor", "polyfill"]
            })
          ],
          resolve: {
            extensions: webpackConfig.resolveExtensions
          },
          watch: options.rerunOnChanges
        },
        null,
        (err, stats) => {

          webpackConfig.feedbackHandler(err, stats);

          if (options.tasksOnFirstRun && firstRun) {
            setTimeout(() => seq(options.tasksOnFirstRun), 2500);
            firstRun = false;
          }
          else if (options.tasksOnRerun && !firstRun) {
            seq(options.tasksOnRerun);
          }
        }))
      .on("error", function () {
        this.emit("end");
      })
      .pipe(gulp.dest(options.destDirPath));
  });
};
