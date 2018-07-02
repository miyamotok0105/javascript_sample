

# メモ

jsfiddleのコンソール
Resourcesに以下のURLを貼ればコンソール表示可能

https://getfirebug.com/firebug-lite-debug.js



{{message}}はMustache(マスタッシュ)と呼ばれる記法


# 式と文の違いに注意
以下はOK（式はOK）
{{1 + 1}}
以下はNG（文はダメ）
{{var foo = message}}
javascriptイコールの右側に記述できるものなら式


# Mustacheはテキストコンテンツ特有の記法。

属性に使用することはできません。
属性へのバインディングはv-bindを使う

省略表記もできる :と記載可能

```
<p :style="{ color: textColor, backgroundColor: bgColor }" class="item">sample</p>
```

# v-bindの修飾子
修飾子   作用
.prop   DOMプロパティとしてバインドする
.camel  ケバブケースの属性名をキャメルケースに変換
.sync   双方向バインディング（CHAPTER5で詳細）


```html:
<!-- textContentプロパティにバインド -->
<div v-bind:text-content.prop="message"></div>
<!-- scrollTopプロパティにバインド -->
<div v-bind:scroll-top.prop="scroll"></div>

```


```js:
new Vue({
  el: '#app',
  data: {
    message:  'Hello Vue.js!',
    scroll: 0
  }
})
```

# thisは今何を指している？ p60


```js:
new Vue({
  el: '#app',
  data: {
    count: 0
  },
  methods: {
    increment: () => {       // ラムダではthisダメ（thisはWindowオブジェクトをさすらしい）
      this.count += 1
    }
  }
})
```

# プレーンな属性と一緒に利用した場合
上書き、または マージされる


```html:
<p class="child" v-bind:class="{ 'is-active' : isActive }" >Text</p>

<p style="color:blue" v-bind:style="{ color : textColor }" >Text</p>
```


# オブジェクトデータを渡す p63

複数の属性データのバインディング p64


```html:
<p v-bind:class="classObject">Text</p>
<img v-bind="item">
<img v-bind="item" v-bind:id="'thumb-' + item.id">
```



```js:
new Vue({
  el: '#app',
  data: {
    classObject: {
        child: true,
        'is-active': false
    },
    item: {
        id: 1,
        src: 'item1.jpg',
    }
  }
})
```



# 仮想DOMとv-if p69, p92
仮想DOMは差分を検出して差分がある部分をDOMに反映する
v-ifを使って表示を切り替えたりする場合、予期せず表示が引き継がれてしまう ケースがあるようです
例えば、テキストボックスを切り替えたい際に、テキストボックスの中身が残ってしまう等。

keyを設定することにより、この問題を解決できるようです


```html:
  <!-- 仮想DOMのKEY -->
  <div>
  <button v-on:click="toggle=!toggle">toggle</button>
    <div v-if="toggle" key="a">
      A <input type="text">
    </div>
    <div v-else="toggle" key="b">
      B <input type="text">
    </div>
  </div>
```


# 繰り返し描画しながら、さまざまな条件を適用する


itemのiはindexでkはkeyでvはvalue。


```html:
 <div>
    <ul>
      <li v-for="(item, idx) in testList" v-bind:key="item.id">
        <h2>Index={{idx}} ID.{{item.id}} {{item.name}} {{item.hp}}</h2>
        <ul>
            <li v-for="(v, k, i) in item" v-bind:key="k">
               [{{i}}] key={{k}} : {{v}}
               <span v-if="k == 'hp' && isTuyoi(v)" style="{color:'red'}"> つよい</span>
            </li>
        </ul>
      </li>
    </ul>
  </div>
```


```js:
new Vue({
  el: '#app',
  data: {
    testList:
    [
        {id: 1, name: 'スライム', hp: 300},
        {id: 2, name: 'ゴブリン', hp: 400},
        {id: 3, name: 'ドラゴン', hp: 500},
    ],
  },
  methods: {
        isTuyoi: function(v)
        {
            return v > 300;
        },  
    }
})
```


# リストの更新 p75
以下の変更では更新を検知できません

インデックス数値を使った配列要素の更新
後から追加されたプロパティの更新
this.list = []              // これはプロパティの更新
this.list[0].name = 'NEW'   // これはプロパティの更新
this.list[0] = 'NEW'        // これは配列要素の更新なのでNG

push unshiftを使えば検知できる。     
this.list.push(新しい要素)


spliceを使って削除を行う.    


# 外部からデータを取得する p83
JSONファイルやWebAPIなどからデータを取得する
Ajaxライブラリaxiosを使った例


```:list.json
[
  { "id": 1, "name": "スライム", "hp": 100 },
  { "id": 2, "name": "ゴブリン", "hp": 200 },
  { "id": 3, "name": "ドラゴン", "hp": 500 }
]
```

```html:
<div id="app">
  <ul>
    <li v-for="(item, index) in list" v-bind:key="item.id">
      ID.{{ item.id }} {{ item.name }} HP.{{ item.hp }}
    </li>
  </ul>
</div>
```


```js:
new Vue({
  el: '#app',
  data: {
    // あらかじめ空リストを用意しておく
    list: []
  },
  created: function () {
    axios.get('list.json').then(function (response) {
      // 取得完了したらlistリストに代入
      this.list = response.data
    }.bind(this)).catch(function (e) {
      console.error(e)
    })
  }
})
```


# S11 DOMを直接参照する $elと$refs

データバインディングでDOMの更新は効率化されますが、
リアルなDOMへのアクセスが必要になるケースもあります。
要素の画面上の位置や高さはDOMでなければわかりません

$el
DOMのコンポーネントに$elで参照できます
mounted以降で使用できます


```js:
new Vue({
  el: '#app',
  mounted: function() {
      console.log(this.$el)
  }
})
```

$refs
ref属性で名前をつけ、それを扱います


```html:
<div id="app">
  <p ref="hello">Hello</p>
  <!-- p要素にhelloという名前をつけた -->
</div>
```



```js:
new Vue({
  el: '#app',
  mounted: function() {
      console.log(this.$refs.hello)     // p要素のDOM
  }
})
```




