'use strict';
import gulp from 'gulp';
import jshint from 'gulp-jshint';
import jscs from 'gulp-jscs';
import browserify from 'browserify';
import fs from 'fs';

gulp.task('jshint', function () {
  return gulp.src('src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('jscs', function () {
  return gulp.src('src/*.js')
    .pipe(jscs())
    .pipe(jscs.reporter());
});

gulp.task('build', ['jshint', 'jscs'], function () {
  return browserify('src/index.js')
    .transform('babelify', { presets: ['es2015']})
    .bundle()
    .pipe(fs.createWriteStream('build/query-ui.js'));
});
