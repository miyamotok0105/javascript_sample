

# 公式

webpack知らんがなって感じである為にざっくり勉強する所存。    
webpack v4が新しいのかな。    

https://webpack.js.org/guides/installation/


## 1.[インストール](https://webpack.js.org/guides/installation/)


バージョン指定してもいれれる。    


```
npm install --save-dev webpack
npm install --save-dev webpack@<version>
```

v4かそれ以降を使用してる時はcliも必要だよ。

```
npm install --save-dev webpack-cli
```

### グローバルインストール

webpackはnpmのグローバルインストールも可能だよ。    

```
npm install --global webpack
```

## ２.[設定を活用する](https://webpack.js.org/guides/getting-started/#using-a-configuration)

### 初歩：GettingStarted001フォルダ＝＞


```
mkdir webpack-demo && cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev
```


```
touch index.html
mkdir src
touch src/index.js
```

```js:src/index.js
function component() {
    let element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());

```

package.jsonにprivate trueにして間違って公開しないようにしておく。    

```
+   "private": true,
-   "main": "index.js",
```

### バンドルを作成する


```
mkdir dist
touch dist/index.html
```

```html:dist/index.html
<!doctype html>
<html>
  <head>
    <title>Getting Started</title>
    <script src="https://unpkg.com/lodash@4.16.6"></script>
  </head>
  <body>
    <script src="./main.js"></script>
  </body>
</html>

```

lodashは地味なライブラリで、高級関数とか諸々ついてる。    

```
npm install --save lodash
```

npxは $(npm bin)。npm_modules内のバイナリを実行してくれる。npxで書いた方が短くていい。
webpack実行すると

```
npx webpack
or
node ./node_modules/.bin/webpack
```

### ライブラリをimport

lodashをimportする。    

```js:src/index.js
+ import _ from 'lodash';
+
  function component() {
    let element = document.createElement('div');

-   // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
  }

  document.body.appendChild(component());
```

scriptで読み込んでたlodashを消す。    

```html:dist/index.html
  <!doctype html>
  <html>
   <head>
     <title>Getting Started</title>
-    <script src="https://unpkg.com/lodash@4.16.6"></script>
   </head>
   <body>
-    <script src="./src/index.js"></script>
+    <script src="main.js"></script>
   </body>
  </html>
```

runする。    
npxはNode 8.2/npm 5.2.0以上にある。    

```
npx webpack
```


### 設定：GettingStarted002フォルダ＝＞

webpackの設定はwebpack.config.jsに設定する。


```
touch webpack.config.js
```



```js:webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};

```


```
npx webpack --config webpack.config.js
```

設定ファイルをもっと知りたければ公式を見る。

https://webpack.js.org/configuration/


### NPMスクリプト

build webpackを追加すればnpm run buildでwebpackが通るようになる。


```:package.json
 {
    "name": "webpack-demo",
    "version": "1.0.0",
    "description": "",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
+     "build": "webpack"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "webpack": "^4.20.2",
      "webpack-cli": "^3.1.2"
    },
    "dependencies": {
      "lodash": "^4.17.5"
    }
  }
```

webpack build!!!


```
npm run build
```

単純なビルドの次はアセットマネージャーを読んで見ると良い。

https://webpack.js.org/guides/asset-management/


## ３.[Asset Management](https://webpack.js.org/guides/asset-management/)


まずは設定する。


```
mkdir webpack-demo && cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev

mkdir src
touch src/index.js
mkdir dist
touch dist/index.html

touch webpack.config.js

```


```:webpack.config.js
{
  "name": "webpack-demo",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^4.28.2",
    "webpack-cli": "^3.1.2"
  },
  "dependencies": {
    "loadash": "^1.0.0",
    "lodash": "^4.17.11"
  }
}

```


```:dist/index.html
  <!doctype html>
  <html>
    <head>
-    <title>Getting Started</title>
+    <title>Asset Management</title>
    </head>
    <body>
-     <script src="./main.js"></script>
+     <script src="./bundle.js"></script>
    </body>
  </html>

```

```:webpack.config.js
  const path = require('path');

  module.exports = {
    entry: './src/index.js',
    output: {
-     filename: 'main.js',
+     filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };
```

style-loaderはcssをhtmlで読み込めるようにする。
css-loaderはcssをjs上で読み込めるようにする。


```
npm install --save-dev style-loader css-loader lodash
```

webpack.config.jsにmoduleのルールを追加する。cssのstyle-loaderとcss-loaderを使用する。


```:webpack.config.js
  const path = require('path');

  module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
+   module: {
+     rules: [
+       {
+         test: /\.css$/,
+         use: [
+           'style-loader',
+           'css-loader'
+         ]
+       }
+     ]
+   }
  };
```

```
touch src/style.css
```

```:src/style.css
.hello {
  color: red;
}
```

