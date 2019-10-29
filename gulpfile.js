var gulp = require('gulp');
// Por fin !
gulp.task('tailwind', function () {
  const postcss = require('gulp-postcss')

  return gulp.src('src/css/app.css')
    // ...
    .pipe(postcss([
      // ...
      // require('postcss-import'),
      require('tailwindcss')('tailwindfull.js'),
      require('autoprefixer'),
      // ...
    ]))
    // ...
    .pipe(gulp.dest('dist/'))
})
