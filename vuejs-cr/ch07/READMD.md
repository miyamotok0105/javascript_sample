
# より大規模なアプリケーション開発

## Vue CLI の導入

プロジェクト作る    

```
vue init webpack my-app
cd my-app
npm install
npm run dev
```




### プラグインを自作してみよう

本で理解できなかったので、初めは下記の記事で動かした。


Vue.jsで自作のプラグインを作ってみる    
https://qiita.com/peg_73_/items/261ece93f9a8a7ca53cb    


```
touch src/qiita-click.js
```


```js:qiita-click.js
const VueQiitaClick = {
  install (Vue, options) {
    Vue.directive('qiita-click', {
      bind: (el) => {
        el.addEventListener('click', click, false)
      }
    })

    const click = () => {
      console.log('qiita!!')
    }
  }
}

export default VueQiitaClick
```

importは初めにしないとダメってエラー出た     


```js:main.js
import VueQiitaClick from './qiita-click'

Vue.use(VueQiitaClick)
...
```


vueにも追加    

```:App.vue
...
<div v-qiita-click>divテスト</div>
...
```


実行.    

```
npm run dev
```


divテストをクリックするとlogが出るようになった。    


本に書いてるwindow-pluginも別出ししとく。    


```
touch window-plugin.js
```


```js:window-plugin.js
var windowPlugin = {
  install: function (Vue) {
    // プラグインデータ用にVueインスタンスを利用する
    var store = new Vue({
      data: {
        scrollY: 0
      }
    })
    // ウィンドウのスクロールイベントをハンドル
    var timer = null
    window.addEventListener('scroll', function () {
      if (timer === null) {
        timer = setTimeout(function () {
          // 200ms間隔でscrollYプロパティに代入
          store.scrollY = window.scrollY
          clearTimeout(timer)
          timer = null
        }, 200)
      }
    })
    // インスタンスプロパティに登録
    Vue.prototype.$window = store.$data
  }
}

export default windowPlugin

```

main.jsに紐付けとく。    


```js:main.js
import windowPlugin from './window-plugin'

Vue.use(windowPlugin)
Vue.component('my-component', {
  template: '<div>{{ scrollY }}</div>',
  computed: {
    scrollY: function () {
      return this.$window.scrollY
    }
  }
})
```








