new Vue({
  el: '#app',
  data: {
    list: [
      { id: 1, name: 'スライム', hp: 100 },
      { id: 2, name: 'ゴブリン', hp: 200 },
      { id: 3, name: 'ドラゴン', hp: 500 }
    ]
  },
  methods: {
    // 要素を削除ボタンをクリックしたときのハンドラ
    doRemove: function (index) {
      // 受け取ったインデックスの位置から1個要素を削除
      this.list.splice(index, 1)
    }
  }
})