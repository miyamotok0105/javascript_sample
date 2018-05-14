var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
})

var vm = new Vue({
    el: '#example2',
    data: {
      message: 'Hello'
    },
    computed: {
      // 算出 getter 関数
      reversedMessage: function () {
        // `this` は vm インスタンスを指します
        return this.message.split('').reverse().join('')
      }
    }
  })