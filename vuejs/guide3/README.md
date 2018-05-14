
# 算出プロパティとウォッチャ

https://jp.vuejs.org/v2/guide/computed.html    


## 算出プロパティ

### 基本的な例

テンプレート内に式を書くとコードが肥大化してくる。    
そこで算出プロパティを使う。{{ reversedMessage }}のように書いて、    
メソッドをプロパティのようにして呼び出す。    


```
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
```

computedに紐づいてる！    

```
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // 算出 getter 関数
    reversedMessage: function () {
      // `this` は vm インスタンスを指します
      return this.message.split('').reverse().join('')
    }
  }
})
```

### 算出プロパティ vs メソッド

methodsは毎回呼ばれる。    
算出プロパティcomputedの場合は変更が通知されないと呼ばれない。    

### 算出プロパティ vs 監視プロパティ

watchプロパティで監視もできるが、    
算出プロパティcomputedの方が簡潔に書ける。    

### 算出 Setter 関数

算出プロパティでsetter getterが使える    

## ウォッチャー



## サンプル１

```
npm install -g json-server
```

```
json-server db1.json
```


