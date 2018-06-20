<template>
  <div id="app">
  <p>The safely stored number: {{safelyStoredNumber}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      // Mounts the "safelyStoredNumber" getter to the scope of your component.
      'safelyStoredNumber'
    ])
  }
}
</script>