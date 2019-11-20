// https://www.npmjs.com/package/gulp-connect is alternative to package https://www.npmjs.com/package/gulp-webserver

var gulp = require('gulp'),
  connect = require('gulp-connect');
 
gulp.task('connect', function() {
  connect.server();
});

// gulp.task('default', ['connect']); - syntax for gulp 3
// gulp version from 4 uses different way of defining tasks
// https://codeburst.io/switching-to-gulp-4-0-271ae63530c0
gulp.task('default', gulp.series('connect'));