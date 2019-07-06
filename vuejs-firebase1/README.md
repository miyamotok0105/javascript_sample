# vuejs-firebase1


```
#初期設定
vue init webpack vuejs-firebase1
cd vuejs-firebase1
npm install
npm install firebase
#動くことを確認
npm run dev

#firebase初期設定
firebase init
#distを選択

#動くことを確認
firebase deploy

npm run build
```

```js:main.js
import firebase from 'firebase'
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// add                                                                                                  
const firebaseConfig = {
  apiKey: 'hoge',
  authDomain: 'hoge',
  databaseURL: 'hoge',
  projectId: 'hoge',
  storageBucket: '',
  messagingSenderId: 'hoge',
  appId: 'hoge'
}
firebase.initializeApp(firebaseConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

```

aaaを入れてみる。

```:App.vue
<template>
  <div id="app">
    <img src="./assets/logo.png">
    aaaaaaaaaaaaaaa
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
```

変更が反映されてること確認。

```
npm install --save firebase
npm run dev
npm run build
firebase deploy
```

