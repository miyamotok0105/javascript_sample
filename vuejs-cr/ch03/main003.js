new Vue({
  el: '#app',
  data: {
    message: ""
  },
  methods: {
    handler: function (comment) {
      this.message = this.message + "!!";
    }
  }
})