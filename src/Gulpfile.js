var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');

gulp.task('views', function buildHTML() {
  return gulp.src('./*.jade')
  .pipe(pug())
  .pipe(gulp.dest('..'));
});

gulp.task('sass', function buildCSS() {
  return gulp.src('./*.scss')
  .pipe(sass())
  .pipe(gulp.dest('..'));
});

gulp.task('default', ['views', 'sass']);
