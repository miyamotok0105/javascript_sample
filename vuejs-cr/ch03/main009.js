
Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})


var scroll = new SmoothScroll()
new Vue({
  el: '#app',
  methods: {
    scrollTop: function () {
      scroll.animateScroll(0)
    }
  }
})