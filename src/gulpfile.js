var gulp = require('gulp');
var sass = require('gulp-sass');
const minify = require('gulp-minify');



gulp.task('watch', function(){
  gulp.watch('scss/*.scss', ['sass']);
  gulp.watch('js/*.js', ['minjs']);
});

gulp.task('sass', function(){
  return gulp.src('scss/styles.scss')
    .pipe(sass({outputStyle: 'compressed'})) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('../css'))
});
