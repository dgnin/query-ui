'use strict';
import gulp from 'gulp';
import jshint from 'gulp-jshint';
import jscs from 'gulp-jscs';
import browserify from 'browserify';
import fs from 'fs';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import concat from 'gulp-concat';
import clean from 'gulp-clean';
import runSequence from 'run-sequence';

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

gulp.task('build-1', ['jshint', 'jscs'], function () {
  return browserify('src/index.js')
    .transform('babelify', { presets: ['es2015']})
    .bundle()
    .pipe(fs.createWriteStream('build/query-ui-tmp.js'));
});

gulp.task('build-2', function () {
  return gulp.src(['lib/*.js', 'build/query-ui-tmp.js'])
    .pipe(concat('query-ui.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('build-3', function () {
  return gulp.src('build/query-ui-tmp.js').pipe(clean());
});

gulp.task('build', function () {
  return runSequence('build-1', 'build-2', 'build-3');
});

gulp.task('build-4', function () {
  return gulp.src('build/query-ui.js')
    .pipe(uglify())
    .pipe(rename('query-ui-min.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('build-min', function () {
  return runSequence('build-1', 'build-2', 'build-3', 'build-4');
});
