
プレイグラウンド
https://ja.onsen.io/playground/?framework=vanilla&category=reference&module=page

参考    
https://html5experts.jp/n_matagawa/20766/    

```
npm init --yes
npm install onsenui@2.7.2 --save
//ブラウザバージョンごとにバージョン上げていかないとダメな場合もある。

touch index.html
```

バージョン変えてリンク直指定も可能。

```
<link rel="stylesheet" href="https://unpkg.com/onsenui@2.0.0/css/onsenui.css">
<link rel="stylesheet" href="https://unpkg.com/onsenui@2.0.0/css/onsen-css-components.css">
<script src="https://unpkg.com/onsenui@2.0.0/js/onsenui.js"></script>
```

とりまonsen uiが見れる


```html:index.html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta http-equiv="Content-Security-Policy" content="default-src * data:; style-src * 'unsafe-inline'; script-src * 'unsafe-inline' 'unsafe-eval'">
    <link rel="stylesheet" href="node_modules/onsenui/css/onsenui.css">
    <link rel="stylesheet" href="node_modules/onsenui/css/onsen-css-components.css">
    <script src="node_modules/onsenui/js/onsenui.min.js"></script>
</head>
<body>
    <ons-page>
        <ons-toolbar>
            <div class="center">Onsen UI</div>
        </ons-toolbar>
 
        <div style="text-align: center;">
            <p>Hello World!</p>
            <ons-button onclick="ons.notification.alert('Onsen UI alert');">Click Me!</ons-button>
        </div>
    </ons-page>
</body>
</html>
```

この構造。    

```
├── index.html
├── node_modules
│   └── onsenui
└── package.json
```

はじめてのOnsen UIアプリ
https://ja.onsen.io/v2/guide/#hajimetenoonsen-uiapuri


ボタンだけのシンプルの構成。    
<ons-button>コンポーネントを使用。これはボタンを表現するためのカスタムなタグ（Onsen UIタグ）です。すべてのOnsen UIタグはons-から始まります。


```html:002.html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://unpkg.com/onsenui/css/onsenui.css">
  <link rel="stylesheet" href="https://unpkg.com/onsenui/css/onsen-css-components.min.css">
  <script src="https://unpkg.com/onsenui/js/onsenui.min.js"></script>
</head>
<body>
  <ons-button onclick="alert('Hello World!')">Click Me</ons-button>
</body>
</html>
```

alertをons.notification.alertに変えてみる。    

```html:002.html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://unpkg.com/onsenui/css/onsenui.css">
  <link rel="stylesheet" href="https://unpkg.com/onsenui/css/onsen-css-components.min.css">
  <script src="https://unpkg.com/onsenui/js/onsenui.min.js"></script>
</head>
<body>
  <ons-button onclick="alert('Hello World!')">Click Me</ons-button>
  <ons-button onclick="ons.notification.alert('Hello World!')">Click Me</ons-button>
</body>
</html>
```

どんなコンポーネントがある？    

```
touch 003.html
```

Webアプリ、ハイブリッドアプリをネイティブに近づける



```
touch 004.html
```


テンプレート    


```
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://unpkg.com/onsenui/css/onsenui.css">
  <link rel="stylesheet" href="https://unpkg.com/onsenui/css/onsen-css-components.min.css">
  <script src="https://unpkg.com/onsenui/js/onsenui.min.js"></script>

  <script>



  </script>
</head>
<body>



</body>
</html>
```


