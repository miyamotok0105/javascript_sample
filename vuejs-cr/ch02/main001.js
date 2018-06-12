new Vue({
  el: '#app',
  data: {
    // オブジェクトデータ
    message: {
      value: 'Hello Vue.js!'
    },
    // 配列データ 3 と 4 で使用
    list: ['りんご', 'ばなな', 'いちご'],
    // 別のデータを使用してlistから取り出す要素を動的に 4 で使用
    num: 1
  }
})