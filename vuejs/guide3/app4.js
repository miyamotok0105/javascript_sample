var vm = new Vue({
    el: '#app',
    data: {
      firstName: 'Foo',
      lastName: 'Bar',
    },
    computed: {
        fullName: {
          // getter 関数
          get: function () {
            return this.firstName + ' : ' + this.lastName
          },
          // setter 関数
          set: function (newValue) {
            console.log("set!")
            var names = newValue.split(' ')
            this.firstName = names[0]
            this.lastName = names[names.length - 1]
          }
        }
    },
    methods: {
        rename: function(newName) {
            console.log("!")
            this.fullName = " : "
        }
    }
})