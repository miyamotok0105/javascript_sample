Vue.component('comp-child', {
  // テンプレートで受け取ったvalを使用
  template: '<p>{{ val }}</p>',
  // 受け取る属性名を指定
  props: ['val']
})

new Vue({
  el: '#app',
  data: {
    valueA: 'これは子A',
    valueB: 'これは子B'
  }
})
