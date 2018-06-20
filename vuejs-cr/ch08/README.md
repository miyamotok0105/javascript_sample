
# Vuex でアプリケーションの状態を管理

Vuexは拡張ライブラリで、データとその状態に関する全てを一元管理。    
ch05でpropsとカスタムイベントで親子間通信と、イベントパスで非親子間通信をした。    

より大規模になると処理が煩雑になるので、vuexを使うと楽。    


プロジェクト作る    

```
vue init webpack my-app
cd my-app
npm run dev
```


```
#最新版
npm install vuex babel-polyfill
#本のバージョン
npm install vuex@3.0.1 babel-polyfill@6.26.0
```


```
src/store.js
```


```js:src/store.js
import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// ストアを作成
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    // カウントアップするミューテーションを登録
    increment(state) {
      state.count++
    }
  }
})
export default store
```


```
touch src/main.js
```





