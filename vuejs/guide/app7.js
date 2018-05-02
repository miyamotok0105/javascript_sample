

Vue.component('todo-item1', {
  props: ['todo1'],
  template: '<li>aaaaaa</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {

  }
})

Vue.component('todo-item2', {
  props: ['todo2'],
  template: '<li>{{ todo2.text }}</li>'
})

var app8 = new Vue({
  el: '#app-8',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})