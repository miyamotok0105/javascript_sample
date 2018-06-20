// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueQiitaClick from './qiita-click'
import windowPlugin from './window-plugin'

Vue.config.productionTip = false
Vue.use(VueQiitaClick)
Vue.use(windowPlugin)
Vue.component('my-component', {
  template: '<div>{{ scrollY }}</div>',
  computed: {
    scrollY: function () {
      return this.$window.scrollY
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
