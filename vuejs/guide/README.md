

# ガイドをやってみる

1日もあればガイド終わるよってガイドに書いてあるので、
ガイドやってみる。


# はじめに

https://jp.vuejs.org/v2/guide/index.html    


## インポート

```html:
<!-- 開発バージョン、便利なコンソールの警告が含まれています -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<!-- 本番バージョン、サイズと速度のために最適化されています -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>

```


## 宣言的レンダリング

- dom描画    

app1.js html1.html    

vue側でelで場所指定し、dataの中身をhtmlにバインドする。    
htmlの{{ message }}の場所にDOM に描画。    


- v-bind 属性    

app2.js html2.html    

この場合はtitle 属性をバインドする。    

## 条件分岐とループ

- v-if

app3.js html3.html    
ある要素を表示したり、非表示にしたりできる。    

- v-for    

app4.js html4.html    
v-for ディレクティブで配列を回して表示できる。   


## ユーザー入力の制御

- v-on    

app5.js html5.html    
v-on ディレクティブでイベントリスナーを加えてメソッドを呼び出せる。

>reverseMessage メソッドの中では DOM 操作を行っていません。アプリケーションの状態のみを更新していることに注意してください。すべての DOM 操作を Vue に任せられるので、背後のロジックを書くことに集中することができます。

- v-model    

app6.js html6.html    
双方向バインディングが簡単にできる。


## コンポーネントによる構成

app7.js html7.html    
Vue.componentでコンポーネントを作り、v-bindで繋げる。    
v-forのitem2とv-bindのitem2は合ってないといけない。    
<todo-item2 v-for="item2 in groceryList" v-bind:todo2="item2"></todo-item2>    


# Vue インスタンス

https://jp.vuejs.org/v2/guide/instance.html

>全ての Vue アプリケーション は、Vue 関数で新しい Vue インスタンスを作成することによって起動されます。


Todo アプリのコンポーネントツリーの例    

```
ルートインスタンス
└─ Todoリスト
   ├─ Todoアイテム
   │  ├─ Todo削除ボタン
   │  └─ Todo編集ボタン
   └─ Todoリストフッター
      ├─ Todoクリアボタン
      └─ Todoリスト統計
```

## データとメソッド

- Vue インスタンスの作成    

app8.js html8.html    
Object.freeze()をするとリアクティブシステムが変更を追跡しなくなる。    
$をつけてインスタンスプロパティにアクセスできる。    

```
vm.$data === data // => true
vm.$el === document.getElementById('example') // => true
```

- インスタンスライフサイクルフック    

app9.js html9.html    
ライフサイクルフック(lifecycle hooks) を実行する。    

>例えば、created フックはインスタンスが生成された後にコードを実行したいときに使われます。





