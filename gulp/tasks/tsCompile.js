/**
 * TypeScriptのコンパイルタスク
 *
 * @author ICS-Kano
 */
const config = require("../../build_config")

const taskName = require("../taskName")

const gulp = require("gulp")
const webpackStream = require("webpack-stream");
const webpack = require("webpack");

const webpackConfig = require('../../webpack.config.js')


const sourcemaps = require("gulp-sourcemaps")

// TODO:webpak 2 fix

gulp.task(taskName.tsCompile, () => {
  return webpackStream(webpackConfig, webpack)
    // .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(config.jsFolder))
})
