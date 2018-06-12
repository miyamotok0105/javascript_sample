var app = new Vue({
  el: '#app',
  methods: {
    //v-on:clickでhandleClickが呼ばれてる
    handleClick: function (event) {
      alert(event.target) // [object HTMLButtonElement]
    }
  }
})