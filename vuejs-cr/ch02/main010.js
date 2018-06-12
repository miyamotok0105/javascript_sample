new Vue({
  el: '#app',
  data: {
    show: true
  },
  methods: {
    handleClick() {
      //$elや$refsは一時的な変更
      var count = this.$refs.count
      if (count) {
        count.innerText = parseInt(count.innerText, 10) + 1
      }
    }
  }
})