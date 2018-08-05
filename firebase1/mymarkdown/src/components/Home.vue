<template>
    <div id="home">
        <h1><img class="logo" alt="MyMarkdown" src="../assets/mymarkdown_logo.png"></h1>
        <h1>{{ msg }}</h1>
        <button @click="googleLogin">Google login</button>
    </div>
</template>
<script>
export default {
    name: "home",
    data() {
        return {
            msg: "Welcome to MyMarkdown. Let's make an idea."
        };
    },
    methods: {
        googleLogin: function(){
            firebase
            .auth()
            .signInWithRedirect(new firebase.auth.GoogleAuthProvider());
        }
    }
};
</script>

<style lang="scss">
.home {
    margin-top: 60px;
}
.logo {
    height: 100px;
    width: 400px;
}
</style>
