'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var eslint = require('gulp-eslint');

var DEST = '.';

gulp.task('scripts', function () {
    return gulp.src('angular-auto-complete.js')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest(DEST));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
    gulp.watch('angular-auto-complete.js', ['scripts']);
});

gulp.task('default', ['scripts', 'watch']);
