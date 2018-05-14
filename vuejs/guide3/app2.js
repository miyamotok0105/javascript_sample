var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    },
    // コンポーネント内
    methods: {
        reverseMessage: function () {
        return this.message.split('').reverse().join('')
        }
    },
    computed: {
        now: function () {
            return Date.now()
        }
    }
})
