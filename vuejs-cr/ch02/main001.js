var state = { count: 0 }

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
    num: 1,
    state: state,
    //dataオプション内は後から追加できないので、
    //値が決まってなくても定義しておく。
    todos: [],
    error: null
  },
  methods: {
    incrementCount: function () {
      state.count++
    }
  },
  created () {
    state.count++ //state.countはリアクティブデータ
    state.count++
  },
})

