new Vue({
  el: '#app',
  data: {
    name: 'キマイラ',
    list: [
      { id: 1, name: 'スライム', hp: 100 },
      { id: 2, name: 'ゴブリン', hp: 200 },
      { id: 3, name: 'ドラゴン', hp: 500 }
    ]
  },
  methods: {
    // 追加ボタンをクリックしたときのハンドラ
    doAdd: function () {
      // リスト内で1番大きいIDを取得
      //いい書き方！
      var max = this.list.reduce(function (a, b) {
        return a > b.id ? a : b.id
      }, 0)
      // 新しいモンスターをリストに追加
      this.list.push({
        id: max + 1, // 現在の最大のIDに+1してユニークなIDを作成
        name: this.name, // 現在のフォームの入力値
        hp: 500
      })
    }
  }
})