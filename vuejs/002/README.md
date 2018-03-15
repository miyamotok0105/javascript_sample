# 002

Vue.js入門 ―最速で作るシンプルなWebアプリケーション    
これの勉強記録じゃもん    
http://gihyo.jp/dev/serial/01/vuejs/0002    

Vueインスタンスとデータバインディング    
算出プロパティ    

srcのmain.jsとindex.htmlにコード追加した。


```html:index.html
<div id="example">
  <p>{{ name }} は {{ priceWithTax }}円</p>
</div>
```

```js:main.js
var vm = new Vue({
  el: '#example', // document.getElementById('example'), $('#example')[0] も可
  computed: {
    priceWithTax: function() {
      return this.price * 1.08;
    }
  },
  data: {
    name: 'みかん',
    price: 100
  }
});

// jsfiddle の環境で Console から vm を参照できるようにするため
window.vm = vm;
```

<hr>

リストレンダリングのパフォーマンスが良い。    
v-forとv-bind:keyで紐づけるんじゃ    

```html:index.html
<div id="example">
  <li v-for="item in items" v-bind:key="item.name">
    <p>{{ item.name }} は {{ item.price }}円</p>
  </li>
</div>
```

```js:main.js
var vm = new Vue({
  el: '#example',
  data: {
    items: [
      {
        name: 'みかん',
        price: 100
      },
      {
        name: 'もも',
        price: 300
      },
      {
        name: 'いちじく',
        price: 500
      },
      {
        name: 'メロン',
        price: 1000
      }
    ]
  }
});
// jsfiddle の環境で Console から vm を参照できるようにするため
window.vm = vm;
```

<hr>

条件付きレンダリング    
表示・非表示を切り替えたい場合には，v-showディクレティブ，v-ifディレクィブを使う    
nameが入ってないとshowされる。nameが入ってるとshowされない。    

```html:index.html
<div id="example">
  <p>名前 {{ name }}</p>
  <p v-show="!isValid">
    名前を入力してください
  </p>
</div>
```

```js:main.js
var vm = new Vue({
  el: '#example',
  data: {
    name: '',
  },
  computed: {
    isValid: function () {
      return this.name.length > 0;
    }
  }
});
window.vm = vm;
```

<hr>

クラスとスタイルのバインディング    
バリデーションエラーの場合はフォームを赤く囲んで表示などするならv-bind:class, v-bind:styleディレクティブ    
赤い枠が出る。    

```html:index.html
<div id="example" v-bind:style="{'border': (isValid ? '' : '1px solid red')}">
  <p>名前 {{ name }}</p>
  <p v-show="!isValid">
    名前を入力してください
  </p>
</div>
```

```js:main.js
var vm = new Vue({
  el: '#example',
  data: {
    name: '',
  },
  computed: {
    isValid: function () {
      return this.name.length > 0;
    }
  }
});
window.vm = vm;
```

<hr>

メソッドとイベントハンドリング    
v-onディレクティブを利用することで，DOMイベントをハンドリングして，JavaScriptのコードを実行    

```html:index.html
<div id="example" v-bind:style="{'border': (isValid ? '' : '1px solid red')}">
  <p>名前 {{ name }}</p>
  <p>
    <input type="text" v-on:input="updateName($event)">
  </p>
  <p v-show="!isValid">
    名前を入力してください
  </p>
  <p v-show="isValid">
    <button v-on:click="sendData">送信</button>
  </p>
</div>
```

```js:main.js
var vm = new Vue({
  el: '#example',
  data: {
    name: '',
  },
  computed: {
    isValid: function () {
      return this.name.length > 0;
    }
  },
  methods: {
    updateName: function(event) {
      this.name = event.target.value;
    },
    sendData: function() {
      alert(this.name);
    }
  }
});
window.vm = vm;
```

<hr>

フォーム入力バインディング    
lazyという修飾子を利用    

```html:index.html

```

```js:main.js

```

<hr>

```html:index.html

```

```js:main.js

```

<hr>

```html:index.html

```

```js:main.js

```

<hr>



