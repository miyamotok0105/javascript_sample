
webpack：jsのバンドル    
gulp：jsのバンドル、cssコンパイルなど    
Babel：jsのトランスコンパイルなど    

webpackはcssやsassをcssにできない。jsにバンドルされる。cssにしたければgulpを使うことになる。



プロジェクト初期化。    

```
npm init -y
```

なんか色々入れる。    

babel-coreとか古くない？？
@babel/core使えば？って気はした。    


```
npm i -D webpack babel-core babel-loader babel-preset-env
npm i @babel/preset-env --save
```

package.jsonに下記追加。    


```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
```


# 参考

https://glatchdesign.com/blog/web/tools/1724

