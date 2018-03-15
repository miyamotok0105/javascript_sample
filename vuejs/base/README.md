# base

Vue.js 基本的な使い方。    
https://entershare.jp/2397/    

#バインディング

{{}}は基本的なバインディング方式。    
el:はhtmlでVue.jsを使う範囲を指定。v-はディレクティブ。


```html:index.html
<div id="sample">
  {{message}}
</div>
```

```js:main.js
var sample = new Vue ({
  el: "#sample",
  data: {
    message: "hello Vue"
  }
})
```

<hr>

#v-on

```html:index.html
<div id="sample1">
  <p>{{count}}</p>
  <button v-on:click="countUp">プラス</button>
</div>
```

```js:main.js
var sample1 = new Vue ({
  el: "#sample1",
  data: {
    count: 0
  },
  methods: {
    countUp(){
        this.count = this.count + 1
    }
  }
})
```

<hr>

#v-model
html側のinputをリアルタイムでvueインスタンスのモデルに格納。    

```html:index.html
<div id="sample2">
  <div class="result">{{message}}</div>
  <div class="result-count">{{message.length}}</div>
  
  <input type="text" v-model="message">
</div>
```

```js:main.js
var sample2 = new Vue ({
  el: "#sample2",
  data: {
    message: ""
  }
})
```

<hr>

#v-for
繰り返し。    
配列の場合    


```html:index.html
<div id="sample3">
  <ul>
    <li v-for="color in colors">{{color}}</li>
  </ul>
</div>
```

```js:main.js
var sample3 = new Vue ({
  el: "#sample3",
  data: {
    colors: ["red", "blue", "yellow", "pink", "green"]
  }
})
```

ハッシュの場合    


<hr>

```html:index.html
<div id="sample4">
  <ul>
    <li v-for="color in colors">
        {{color}}のkeyは{{key}}です
    </li>
  </ul>
</div>
```

```js:main.js
var sample4 = new Vue ({
  el: "#sample4",
  data: {
    colors: {red: "赤", blue: "青", yellow: "黄色", pink: "ピンク"}
  }
})
```

<hr>

#v-if
条件分岐。    

```html:index.html
<div id="sample5">
  <p>{{message}}</p>
  <p v-if="message.length == 0">ない</p>
  <p v-if="message.length > 5">5文字以上です</p>
  <p v-if="message.length > 10">10文字以上です</p>
 
  <input type="text" v-model="message"> 
</div>
```

```js:main.js
var sample5 = new Vue ({
  el: "#sample5",
  data: {
    message: ""
  }
})
```

<hr>

#created

特定のタイミングでコードを実行したい時はライフサイクルフックという関数う。    

...エラーだったのでここまで。    

