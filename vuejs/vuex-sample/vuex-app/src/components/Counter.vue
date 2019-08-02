<template>
  <div>
    <h1>数字カウントアップ</h1>
    <button @click="incrementNumber">increment Number {{ step }}</button>
    <span>total {{ countNumber }}</span>

    <h1>文字カウントアップ</h1>
    <button @click="incrementString">increment String {{ step }}</button>
    <span>total {{ countString }}</span>

  </div>
</template>

<script>
  export default {
    name: "Counter",
    computed: {
      step() { return this.$store.getters.step},
      countNumber() { return this.$store.getters.countNumber},
      countString() { return this.$store.getters.countString}
    },
    methods: {
      incrementNumber() {
        this.$store.dispatch('incrementNumber')
      },
      incrementString() {
        this.$store.dispatch('incrementString')
      }
    }
  }
</script>

<style scoped>

</style>