var app = new Vue({
    el: '#app',
    data: {
        seenTrue: true,
        seenFalse: false,
        url: "http://aaaaa",
        

    },
    methods: {
        doSomething: function () {
            console.log("!!")
            if(this.seenTrue == true) {
                this.seenTrue = false
            }
            else{
                this.seenTrue = true
            }
        }
    }
})

