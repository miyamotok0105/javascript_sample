
# [Babelの公式サイト](https://babeljs.io/docs/en/)

BabelはJSコンパイラだよ。

## [Babelって何？](https://babeljs.io/docs/en/)

WhatisBabel001フォルダ=>

### BabelはJSのコンパイラ

Babelはツールチェーンで、主にjsを変換するのに使う。

- コード変換    
- 構文変換    
- 環境またぎの変換    

アロー関数を変換する例。

```
// Babel Input: ES2015 arrow function
[1, 2, 3].map((n) => n + 1);

// Babel Output: ES5 equivalent
[1, 2, 3].map(function(n) {
  return n + 1;
});

```

ここにはもっと例があるよ。


https://github.com/jamiebuilds/the-super-tiny-compiler

### JSXとReact

Babelはjsx構文を変換できる。
@babel/preset-reactが設定に追加される。

```
npm install --save-dev @babel/preset-react
```

jsxの例。

```jsx:
export default React.createClass({
  getInitialState() {
    return { num: this.getRandomNumber() };
  },

  getRandomNumber() {
    return Math.ceil(Math.random() * 6);
  },

  render() {
    return <div>
      Your dice roll:
      {this.state.num}
    </div>;
  }
});
```

### 型アノテーション

Babelは型チェックしない。FlowかTypeScriptであれば型チェックする。    

```
npm install --save-dev @babel/preset-flow
```

Flowの例。    
引数numberで返り値number。    

```
// @flow
function square(n: number): number {
  return n * n;
}
```

```
npm install --save-dev @babel/preset-typescript
```

typescriptの例。    


```
function Greeter(greeting: string) {
    this.greeting = greeting;
}
```

### プラグイン

一旦スキップ。    

https://babeljs.io/docs/en/

## [使い方ガイド](https://babeljs.io/docs/en/usage)

ちょっとした使い方について説明する。

### 概要

usage001フォルダ=>    

- @babel/polyfill    
polyfill（ポリフィル）。最近の機能をサポートしていない古いブラウザでその機能を使えるようにするコード。    
例えばIE7でSilverlightを使用してHTML Canvas要素の機能を擬似的に実現したり、CSSのrem単位やtext-shadowなど擬似的に実現したりする。    

- @babel/preset-env    
compat-tableを使用して環境に基づいて必要なBabelプラグインを自動で決定するライブラリ。    

- @babel/cli    
Babelのコマンドを使用できるようにする。    

```
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill
```

```
touch babel.config.js
mkdir src
touch src/index.js
```

src/index.jsには適当に値入れて、babel.config.jsにもなんか入れる。


```js:babel.config.js
const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
    },
  ],
];

module.exports = { presets };
```

下記のコマンドはsrcからlibに変換している。


```
./node_modules/.bin/babel src --out-dir lib
```

### CLIの基本

version7以降は@babelのモジュールを使う。@babel/coreとか@babel/cliとかって感じのを使う。

- Coreライブラリ    

```
npm install --save-dev @babel/core
```

@babel/coreやればrequireを直接使えるよ。ここの実例は一旦置いとく。


```:index.js
const babel = require("@babel/core");

babel.transform("code", optionsObject);
```

- CLIツール    


```
npm install --save-dev @babel/core @babel/cli
```

cli入れればbabelコマンド使えるよ。
概要のところでは入れてたのでcli使えてた。

```
./node_modules/.bin/babel src --out-dir lib
```

### プラグインとプリセット


```
npm install --save-dev @babel/plugin-transform-arrow-functions
```

```
./node_modules/.bin/babel src --out-dir lib --plugins=@babel/plugin-transform-arrow-functions
```

アロー関数から変換する。

```
const fn = () => 1;

// converted to

var fn = function fn() {
  return 1;
};
```

もちろんES間のトランスフォームも@babel/preset-envで出来る。


```
npm install --save-dev @babel/preset-env

./node_modules/.bin/babel src --out-dir lib --presets=@babel/env
```

## [Babelの設定](https://babeljs.io/docs/en/configuration)

Babelでは設定ファイルが便利。ESLint(.eslintrc)とかPrettier(.prettierrc)が似たツール。

### 設定のケーススタディ    

- babel.config.js    

プログラム的に設定を作成したい場合。node_modulesをコンパイルしたい場合。

- .babelrc    

個人的なパッケージに設定を適応したい場合。

### babel.config.js

こんな感じの設定ファイル。ルートプロジェクトにおいてね。


```js:babel.config.js
module.exports = function () {
  const presets = [ ... ];
  const plugins = [ ... ];

  return {
    presets,
    plugins
  };
}
```

細かくみたい場合は[ここ](https://babeljs.io/docs/en/config-files#project-wide-configuration)

### .babelrc

```.babelrc
{
  "presets": [...],
  "plugins": [...]
}
```

### package.json

あるいはpackage.jsonにbabelの設定をかける。

```package.json
{
  "name": "my-package",
  "version": "1.0.0",
  "babel": {
    "presets": [ ... ],
    "plugins": [ ... ],
  }
}
```

### .babelrc.js

.babelrcと同じようにjsでも書ける。


```.babelrc.js
const presets = [ ... ];
const plugins = [ ... ];

module.exports = { presets, plugins };
```

nodejsにアクセスもできる。例えば動的な設定もできる。

```.babelrc.js
const presets = [ ... ];
const plugins = [ ... ];

if (process.env["ENV"] === "prod") {
  plugins.push(...);
}

module.exports = { presets, plugins };
```

### CLI (@babel/cli)を使用する

```
babel --plugins @babel/plugin-transform-arrow-functions script.js
```

### API (@babel/core)を使用する

```
require("@babel/core").transform("code", {
  plugins: ["@babel/plugin-transform-arrow-functions"]
});
```
