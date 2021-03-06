// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from '@/store.js'

Vue.config.productionTip = false

console.log(store.state.count) // -> 0
// incrementをコミットする
store.commit('increment')
// もう一度アクセスしてみるとカウントが増えている
console.log(store.state.count) // -> 1
