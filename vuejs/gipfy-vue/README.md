# gipfy-vue

Vue.js + Vuexで開発をしてみよう！をやって見るメモ。    
https://engineer.recruit-lifestyle.co.jp/techblog/2016-09-15-try-vue-flux/    

src/componentsにHeader.vueを作成。    
touch src/components/Header.vue    


```:src/components/Header.vue
<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <i class="material-icons">dehaze</i>
        <span class="mdl-layout-title">GIPHY-VUE</span>
      </div>
    </header>
  </div>
</template>

<style scoped>
.mdl-layout__header-row {
  padding: 0 16px;
}
i {
  padding-right: 16px
}
</style>
```

元のApp.vueを消してこれにする。    


```:src/App.vue
<template>
  <div id="app">
    <!-- ここに先ほど作ったヘッダーを配置 -->
    <vue-header></vue-header>
  </div>
</template>

<script>
import VueHeader from './components/Header'

export default {
  components: {
    VueHeader
  }
}
</script>
```

デザインを適用する。

```
npm install --save-dev vue-mdl
```

下記を追加    


```:src/main.js
// es2015の場合
import VueMdl from 'vue-mdl'
Vue.use(VueMdl)
```

下記を追加    


```:index.html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel="stylesheet" href="https://code.getmdl.io/1.1.3/material.indigo-pink.min.css">
<script src="https://code.getmdl.io/1.1.3/material.min.js"></script>
```

で適応されるはず。    



