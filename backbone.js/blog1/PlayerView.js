// class PlayerView extends Backbone.View {
//   constructor(args){
//     super(args);
//   }

//   render(){
//     this.$el.text('PlayerView');
//   }
// }

// let playerView = new PlayerView({el:'#user'});
// playerView.render();

class PlayerView extends Backbone.View {
  constructor(args) {
    super(args);
  }

  render() {
    let contents = `<div>名前：${this.model.getName()}</div>
    <div>背番号：${this.model.get('number')}</div`;

    this.$el.html(contents);
    return this;
  }
}

let tanaka = new PlayerModel('田中','広輔',2);
let ogata = new PlayerModel();

let tanakaView = new PlayerView({
  el: '#user1',
  model: tanaka
});
let ogataView = new PlayerView({
  el: '#user2',
  model: ogata
});
tanakaView.render();
ogataView.render();
