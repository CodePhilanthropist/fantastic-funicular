const gulp = require('gulp');
const inlineCss = require('gulp-inline-css');

gulp.task('inline', function() {
  return gulp.src('./index.html')
  .pipe(inlineCss())
    .pipe(gulp.dest('./dist'));
});
