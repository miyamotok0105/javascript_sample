var app = new Vue({
  //mountする要素
  //:elは紐付ける要素セレクタ
  el: '#app',
  //アプリケーションで使用するデータ
  //:アプリで使うデータ、オブジェクトや配列
  data: {
    message: 'Vue.js'
  },
  //算出プロパティ
  //:dataと似てる。関数によって算出されたデータ。ch04に詳細。
  computed: {
    computedMessage: function() {
        //何か処理をした結果をデータとして返す
        return this.message + '!'
    }
  },
  //ライフサイクルフック
  //:フック＝決まったタイミングに処理を割り込みさせる
  //:イベントみたいなやつ
  //beforeCreate:インスタンス初期化前
  //created:作成時
  //beforeMount:インスタンスがマウントされる前
  //mounted:マウントされた後
  //beforeUpdate:データが変更され、DOMに適応される前
  //updated:DOMに適応された後
  //beforeDestoryed:Vueインスタンスが破棄される前
  //destoryed:破棄された後
  //errorCaptured:任意の子孫コンポーネントからエラーが検知された時
  created () {
    //インスタンス作成、初期化が終わったらすぐ
    //この時点でDOMは構築されていない。
    //インスタンス自身を指すthisにはアクセスできるが、$elやgetElementById()などを使ったDOMにアクセスはできない。
    alert('created!!')
  },
  mounted () {
    //DOMが作成された直後！$el、getElementById()が使える。
    //全ての子コンポーネントがマウントされている保証はない。
    alert('mounted!')
  },
  //アプリケーションで使用するメソッド
  methods: {
    sayHi: function () {
      alert('Hi!')
    }
  }
})

