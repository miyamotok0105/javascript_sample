/* gulp task */

/*----------------------------
 パッケージ読み込み
----------------------------*/
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const rewriteCSS = require('gulp-rewrite-css');
const plumber = require('gulp-plumber');
const csscomb = require('gulp-csscomb');
const imagemin = require("gulp-imagemin");
const cleanCSS = require('gulp-clean-css');
const autoprefixer =require('autoprefixer');
const postcss =require('gulp-postcss');
const cssmqpacker = require('css-mqpacker');
const sourcemaps = require('gulp-sourcemaps');
const packageImporter = require('node-sass-package-importer');

/*----------------------------
 初期設定
----------------------------*/
const site_dir = '../';
const css_dir = '../css/';
const sass_dir = './sass/**/*.scss';

/*----------------------------
 開発用タスク
----------------------------*/

// ローカルサーバー起動
gulp.task('server', function() {
	browserSync.init({
    files: [site_dir],
		server: { baseDir:site_dir }
	});
});

// SASSコンパイル・プリフィクス追加・並び替え
gulp.task('sass', function(){
  const processors = [
    autoprefixer({browsers: ['last 4 versions', 'ie >= 9', 'iOS >= 9', 'Android >= 4.4']}),
    cssmqpacker
  ];

  return gulp
    .src(sass_dir)
    .pipe(plumber())
    .pipe(csscomb())
    .pipe(sourcemaps.init())
    .pipe(sass({
      importer: packageImporter({
        extensions: ['.scss', '.css']
      })
    }))
    .pipe(rewriteCSS({
      destination:css_dir
    }))
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(css_dir))
    .pipe(browserSync.stream());
});

// 画像圧縮
gulp.task('minimg', function() {
  return gulp
    .src([site_dir + 'images/*.jpg', site_dir + 'images/*.png'])
    .pipe(imagemin())
    .pipe(gulp.dest(site_dir + 'images/'));
});

//CSS圧縮
gulp.task('minify-css', function() {
  return gulp
    .src([site_dir + 'css/*.css'])
    .pipe(cleanCSS())
    .pipe(gulp.dest(css_dir));
});

/*----------------------------
 監視用タスク
----------------------------*/
gulp.task('watch', function() {
	gulp.watch(site_dir + '**/*.scss', ['sass']);
});

/*----------------------------
 タスク開始
----------------------------*/
gulp.task('default', ['server', 'watch']);