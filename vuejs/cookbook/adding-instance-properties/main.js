
//グローバルスコープを汚染したくないのでプロトタイプに追加。
Vue.prototype.$appName = 'My App'

var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    },
    beforeCreate: function() {
        //thisで$をつけて呼び出すんだお
        console.log(this.$appName)
    }
})
