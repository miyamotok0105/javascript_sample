var obj = {
  foo: 'bar',
  a: 1
}

Object.freeze(obj)

new Vue({
  el: '#app',
  data: obj,
  created: function () {
    // `this` は vm インスタンスを指します
    console.log('a is: ' + this.a)
  }
})