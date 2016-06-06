"use strict";

const path = require("path");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");

module.exports = function (config) {

  const configuration = {
    autoWatch: true,
    basePath: "..",
    browsers: ["PhantomJS"],
    files: ["src/ui/index.unit.ts"],
    frameworks: ["mocha"],
    plugins: [
      "karma-mocha",
      "karma-phantomjs-launcher",
      "karma-spec-reporter",
      "karma-webpack"
    ],
    preprocessors: {
      "src/ui/index.unit.ts": ["webpack"]
    },
    reporters: ["spec"],
    singleRun: false,
    webpack: {
      entry: {
        "index.unit": "./src/ui/index.unit.ts"
      },
      module: {
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
      watch: true
    },
    webpackMiddleware: {
      noInfo: true
    }
  };

  config.set(configuration);
};
