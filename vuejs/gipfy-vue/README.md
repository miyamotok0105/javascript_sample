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
    

componentsにファイルを作成。


```
touch src/components/Card.vue
touch src/components/Search.vue
touch src/components/TimeLine.vue

```


```:src/Card.vue
<template>
  <div class="gif mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title mdl-card--expand"></div>
    <div class="mdl-card__actions">
      <span class="filename">Title</span>
    </div>
  </div>
</template>

<style>
.gif {
  margin: 0 auto;
  width: 60%;
  display: flex;
  justify-content:space-between;
  margin-bottom: 60px;
}
.gif.mdl-card {
  width: 256px;
  height: 256px;
}
.gif> .mdl-card__actions {
  height: 52px;
  padding: 16px;
  background: rgba(0, 0, 0, 0.2);
}
.filename {
  color: #fff;
  font-size: 14px;
  font-weight: 500;
}

</style>
```


```:src/Search.vue
<template>
  <div class="mdl-textfield mdl-js-textfield">
    <input class="mdl-textfield__input" type="text" id="sample1">
    <i class="material-icons">search</i>
  </div>
</template>

<style media="screen">
  .mdl-textfield {
    padding: 0;
    background-color: #f6f6f6;
    margin: 30px auto;
    width: 60%;
    display: flex;
    margin-bottom: 60px;
  }
</style>
```


```:src/TimeLine.vue
<template>
  <main class="mdl-layout__content">
    <div class="page-content">
      <search></search>
      <card v-for="n in 10"></card>
    </div>
  </main>
</template>

<script>
import Search from './Search'
import Card from './Card'

export default {
  components: {
    Search,
    Card
  }
}
</script>

<style>
  main {
    background-color: #f6f6f6;
    width: 100%;
    margin: 0 auto;
  }
  .page-content {
    display: flex;
    flex-direction: column;
  }
</style>
```


```:src/App.vue
<template>
  <div id="app">
    <vue-header></vue-header>
    <time-line></time-line>
  </div>
</template>

<script>
import VueHeader from './components/Header'
import TimeLine from './components/TimeLine'

export default {
  components: {
    VueHeader,
    TimeLine
  }
}
</script>
```



