<template>
  <main class="mdl-layout__content">
    <div class="page-content">
      <search></search>
      <card v-for="n in 10"></card>
    </div>
  </main>
</template>

<script>
import Search from './Search'
import Card from './Card'

export default {
  components: {
    Search,
    Card
  }
}
</script>

<style>
  main {
    background-color: #f6f6f6;
    width: 100%;
    margin: 0 auto;
  }
  .page-content {
    display: flex;
    flex-direction: column;
  }
</style>