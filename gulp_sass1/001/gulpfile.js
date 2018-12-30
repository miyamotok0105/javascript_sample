// gulpプラグインの読み込み
const gulp = require('gulp');
// Sassをコンパイルするプラグインの読み込み
const sass = require('gulp-sass');
// プリフィックス追加
const postcss =require('gulp-postcss');
const autoprefixer = require('autoprefixer');
// メディアクエリをまとめる
const cssmqpacker = require('css-mqpacker');
 
// style.scssをタスクを作成する
gulp.task('default', function () {
  const processors = [
    autoprefixer({browsers: ['last 4 versions', 'ie >= 9', 'iOS >= 9', 'Android >= 4.4']}),
    cssmqpacker
  ];
  // style.scssファイルを取得
  return gulp.src('sass/style.scss')
    // Sassのコンパイルを実行
    .pipe(sass())
    // プリフィックス追加
    .pipe(postcss(processors))
    // cssフォルダー以下に保存
    .pipe(gulp.dest('css'));
});
