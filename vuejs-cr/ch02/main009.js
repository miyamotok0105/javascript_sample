new Vue({
  el: '#app',
  data: {
    // あらかじめ空リストを用意しておく
    list: []
  },
  created: function () {
    //axiosってファイルをとることもできるのね
    //とはいえローカルからの読み込みはブラウザにオプションつけて動かさないとセキリュティ上だめ
    axios.get('list.json').then(function (response) {
      // 取得完了したらlistリストに代入
      this.list = response.data
    }.bind(this)).catch(function (e) {
      console.error(e)
    })
  }
})