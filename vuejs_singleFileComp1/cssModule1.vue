<template>
    <p :class="$style.message">hello! </p>
</template>

<script>
    export default {
        created() {
            alert("css modules: $style "+ this.$style.message)
        }
    }
</script>

<style module>
.message { color: #42b983 }
</style>
