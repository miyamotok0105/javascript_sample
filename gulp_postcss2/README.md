
## 環境

postcssのエディター拡張も便利

[vscode](https://marketplace.visualstudio.com/items?itemName=ricard.PostCSS)


```
npm init -y
npm i gulp --save-dev
npm i -g gulp-cli
npm i gulp-postcss --save-dev
npm i autoprefixer --save-dev
npm i postcss-custom-properties -D
npm i postcss-simple-vars -D
npm i postcss-import -D
```


```
mkdir dist
mkdir src
touch src/index.css
touch gulpfile.js
```

## cssビルド

```
gulp css
```

## CSSで変数を扱う

postcss-simple-varsやpostcss-custom-propertiesを使うと良い。
一旦はsimple-varsのがみやすいので、こっちを使うことにする。


```
$blue: #20aee5;

.hoge {
  color: $blue;
}
```

- postcss-simple-varsのgulp変更    

```
gulp.task('css', function () {
  // PostCSSで使用するプラグインを指定
  var plugins = [
    autoprefixer({browsers: ['last 2 version']}),
  ];
  return gulp.src('src/*.css')
    .pipe(postcss(plugins))
    .pipe(postcss([ require('postcss-simple-vars')({ silent: true }) ])) //追加
    .pipe(gulp.dest('dist'));
});
```

- postcss-custom-propertiesのgulp変更    

```
gulp.task('css', function () {
  // PostCSSで使用するプラグインを指定
  var plugins = [
    autoprefixer({browsers: ['last 2 version']}),
  ];
  return gulp.src('src/*.css')
    .pipe(postcss(plugins))
    .pipe(postcss([require('postcss-custom-properties')])) //追加
    .pipe(gulp.dest('dist'));
});
```




# 参照

https://qiita.com/yuyake0084/items/301b716214e0352360c5

