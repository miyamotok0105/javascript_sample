var app = new Vue({
  //mountする要素
  el: '#app',
  //アプリケーションで使用するデータ
  data: {
    message: 'Vue.js'
  },
  //
  couputed: {
    computedMessage: function() {
        return this.message + '!'
    }
  },
  //
  created: fuction() {
    
  }

})

