'use strict';
import gulp from 'gulp';
import jshint from 'gulp-jshint';
import jscs from 'gulp-jscs';
import browserify from 'browserify';
import fs from 'fs';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';

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

gulp.task('build-min', ['build'], function () {
  return gulp.src('build/query-ui.js')
    .pipe(uglify())
    .pipe(rename('query-ui-min.js'))
    .pipe(gulp.dest('build'));
});
