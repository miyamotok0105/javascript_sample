
Vue.component('talk-item', {
    props: ['talk'],
    template: '<li>{{ talk.name }} {{ talk.body }}</li>'
});



var app = new Vue({
    el: '#root',
    data: {
      message: 'チャットだよー',
      results: [],
      talkList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    },
    mounted () {
        this.getTalks('room1');
    },
    methods: {
        getTalks(room) {            
            axios.get('http://localhost:3001/api/getItems', {
                params: {
                },
                crossdomain: true
              })
              .then(response => {
                // console.log(response.data.logs.length);
                // console.log(response.data.logs[0].name);
                // console.log(response.data.logs[0].body);
                // console.log(response.data.logs[0].stime);
                this.results = response.data.logs;
              })
              .catch(error => {
                console.log(error);
              });
        }
    }
});




