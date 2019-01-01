var gulp         = require('gulp');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
 
gulp.task('css', function () {
  // PostCSSで使用するプラグインを指定
  var plugins = [
    autoprefixer({browsers: ['last 2 version']}),
  ];
  return gulp.src('src/*.css')
    .pipe(postcss(plugins))
    .pipe(postcss([require('postcss-simple-vars')({ silent: true }) ])) //追加
    .pipe(postcss([require('postcss-custom-properties')])) //追加
    .pipe(postcss([require('postcss-import')])) //import
    .pipe(gulp.dest('dist'));
});
