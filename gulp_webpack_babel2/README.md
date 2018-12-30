

```
npm init -y
mkdir src
touch webpack.config.js
touch src/main.js
touch src/sub.js

npm i webpack @babel/core babel-loader @babel/preset-env webpack-cli gulp webpack-stream --save
```

Gulpのタスクを実行。
Gulpはタスクランナーなので、PugやSASSのコンパイルとかJSの結合などを設定する。

```
npx gulp
```


# 参考

https://qiita.com/tonkotsuboy_com/items/2d4f3862e6d05dc0bea1

