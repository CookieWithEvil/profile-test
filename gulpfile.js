const gulp         = require('gulp'),
      { watch, series, parallel } = require('gulp'),
      browserSync  = require('browser-sync').create(),
      htmlmin      = require('gulp-htmlmin'),
      sass         = require('gulp-sass'),
      cleanCSS     = require('gulp-clean-css'),
      autoprefixer = require('autoprefixer');


gulp.task('sass', () => {
  return gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist'))
});

gulp.task('html', () => {
  return gulp.src('*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
})

gulp.task('js', () => {
  return gulp.src('./js/*.js')
        .pipe(gulp.dest('dist'));
})

gulp.task('default', gulp.parallel(['sass', 'js', 'html']));

gulp.task('watch', () => {
  gulp.watch('**/*.scss', gulp.series(['sass']));
  gulp.watch('./js/*.js', gulp.series(['js']));
  gulp.watch('*.html', gulp.series(['html'])).on('change', browserSync.reload);
})
