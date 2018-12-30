

# babel-preset-env

babel-preset-envはESバージョン間のトランスコンパイル。

```
cd blog1
```

```
npm install --save-dev babel-preset-env babel-cli
```

```
touch .babelrc
```

```:.babelrc
{
  "presets": [
    ["env", {
      "targets": {
        "browsers": ["last 2 versions", "safari >= 7"]
      }
    }]
  ]
}

```

.babelrcにsafari>=7って書いてる通りにトランスコンパイル。


```
./node_modules/.bin/babel ./src/index1.js
```



# 参考

https://qiita.com/ryuone/items/13f5d450c3865709ba10
