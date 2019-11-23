// https://www.npmjs.com/package/gulp-connect is alternative to package https://www.npmjs.com/package/gulp-webserver
// version 4 of gulp has different syntax than version 3 - https://goede.site/setting-up-gulp-4-for-automatic-sass-compilation-and-css-injection

const gulp = require('gulp'),
  connect = require('gulp-connect'),
  sass = require('gulp-sass');

function runServer() {
  connect.server();
}

function compileScss() {
  return (
    gulp
      .src('scss/*.scss')
      .pipe(sass())
      .on('error', sass.logError)
      .pipe(gulp.dest('css'))
  )
}

function watchFiles() {
  gulp.watch('scss/*.scss', compileScss);
}

const build = gulp.parallel(runServer, watchFiles);

exports.default = build;