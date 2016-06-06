"use strict";

const config = {};
const gutil = require("gulp-util");
const path = require("path");
const webpack = require("webpack");

config.moduleLoaders = {
  css: {
    test: /\.css$/,
    loaders: ["style", "css"]
  },
  component_sass: {
    test: /\.scss$/,
    loaders: ["raw", "sass"],
    exclude: [path.resolve("src", "ui", "shared")]
  },
  shared_sass: {
    test: /\.scss$/,
    loaders: ["style", "css", "sass"],
    include: [path.resolve("src", "ui", "shared")]
  },
  html: {
    test: /\.html$/,
    loader: "html"
  },
  font_image: {
    test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
    loader: "file?name=assets/[name].[hash].[ext]"
  },
  ts: {
    test: /\.ts$/,
    loader: "ts"
  },
  tslint: {
    test: /\.ts$/,
    loader: "tslint"
  }
};

config.nullModuleLoaders = {
  css: {
    test: /\.css$/,
    loader: "null"
  },
  component_sass: {
    test: /\.scss$/,
    loader: "null",
    exclude: [path.resolve("src", "ui", "shared")]
  },
  shared_sass: {
    test: /\.scss$/,
    loader: "null",
    include: [path.resolve("src", "ui", "shared")]
  },
  html: {
    test: /\.html$/,
    loader: "null"
  },
  font_image: {
    test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
    loader: "null"
  }
};

config.resolveExtensions = ["", ".js", ".ts"];

config.feedbackHandler = (err, stats) => {

  if (err) throw new gutil.PluginError("webpack", err);

  gutil.log("[webpack]", stats.toString({
    colors: true,
    chunks: false,
    hash: false,
    version: false
  }));
};

module.exports = config;
