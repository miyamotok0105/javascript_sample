
//グローバルスコープを汚染したくないのでプロトタイプに追加。
//関数も追加できんだお
Vue.prototype.$reverseText = function(propertyName) {
  this[propertyName] = this[propertyName]
    .split('')
    .reverse()
    .join('')
}

new Vue({
  el: '#app',
  data: {
    message: 'Hello'
  },
  created: function() {
    console.log(this.message) // => "Hello"
    //メソッドもthisで$をつけて呼び出すんだお
    this.$reverseText('message')
    console.log(this.message) // => "olleH"
  }
})
