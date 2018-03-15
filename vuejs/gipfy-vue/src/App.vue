<template>
  <div id="app">
    <!-- ここに先ほど作ったヘッダーを配置 -->
    <vue-header></vue-header>
  </div>
</template>

<script>
import VueHeader from './components/Header'

export default {
  components: {
    VueHeader
  }
}
</script>