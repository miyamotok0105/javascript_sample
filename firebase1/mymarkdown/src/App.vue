<template>
    <div id="app">
        <Home v-if="!isLogin"></Home>
        <Editor v-if="isLogin" :user="userData"></Editor>
    </div>
</template>
<script>
import Home from "./components/Home.vue";
import Editor from "./components/Editor.vue";
export default {
    name: "app",
    data() {
        return {
            isLogin: false,
            userData: null
        };
    },
    components: {
        Home: Home,
        Editor: Editor
    },
    created: function() {
        console.log(this.isLogin);
        firebase.auth().onAuthStateChanged(user => {
          console.log(user);
          if (user) {
              this.isLogin = true;
              this.userData = user;
          }
          else {
              this.isLogin = false;
              this.userData = null;
          };
        })
    }
};
</script>
