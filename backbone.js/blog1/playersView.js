// class PlayersView extends Backbone.View {
//   constructor(args) {
//     super(args);
//   }

//   render() {
//     this.collection.each((model) => {
//       let playerView = new PlayerView({model: model});
//       this.$el.append(playerView.render().el);
//     });
//   }
// }

// let tanaka = new PlayerModel('田中', '広輔', 2);
// let kikuchi = new PlayerModel('菊池', '涼介', 33);
// let maru = new PlayerModel('丸', '佳浩', 9);
// let suzuki = new PlayerModel('鈴木', '誠也', 51);
// let arai = new PlayerModel('新井', '貴浩', 25);
// let matsuyama = new PlayerModel('松山', '竜平', 44);
// let abe = new PlayerModel('安部', '友裕', 6);
// let aizawa = new PlayerModel('會澤', '翼', 27);
// let yabuta = new PlayerModel('薮田', '和樹', 23);
// let ogata = new PlayerModel();

// let carp = new Backbone.Collection([tanaka, kikuchi, maru, suzuki, arai, matsuyama, abe, aizawa, yabuta, ogata]);

// let playersView = new PlayersView({
//   el: '#carp',
//   collection: carp
// });
// playersView.render();
