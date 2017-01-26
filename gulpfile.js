var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssVars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');


gulp.task('html', function() {
  console.log("HTML working");
});

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssVars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/postcss/styles'));
});

gulp.task('watch', function() {
  watch('./app/index.html', function() {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });
});
