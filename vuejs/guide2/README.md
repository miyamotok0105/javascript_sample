

# テンプレート構文

https://jp.vuejs.org/v2/guide/syntax.html    


## 展開

2重括弧でテキストバインディングできる。    

```
<span>Message: {{ msg }}</span>
```

v-onceディレクティブで1回のみ展開するようにできる。    

```
<span v-once>This will never change: {{ msg }}</span>
```

- 生のHTML    

v-htmlディレクティブを使用するとHTMLとして使える。    
※XSSの危険があるので、HTML埋め込みはユーザーから提供されたコンテンツには許可しないこと!     

- 属性    

飛ばす    

- jsの使用    

飛ばす    

## ディレクティブ

ディレクティブはv-から始まる    

```
<a v-bind:href="url"> ... </a>
```

href は v-bind ディレクティブに要素の href 属性に式 url の値を束縛することを教えるための引数


## 省略記法



