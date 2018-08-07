Vue.component('my-component',{

  //ルート要素は単一でなければならない
  template: '<p>{{ message }}</p>',

  //data は関数でなければならない
  data: function(){
    return{
      message: 'Hellow Vue.js'
    }
  },
  methods: {
    // 関数もかけちゃう
  }
})

new Vue({
  el: '#app'
})
