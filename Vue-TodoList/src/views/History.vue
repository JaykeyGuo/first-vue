<template>
  <div class="history">
    <History msg="History"></History>
  </div>
</template>

<script>
// @ is an alias to /src
import History from '@/components/History.vue'

export default {
  name: 'history',
  components: {
    History
  }
}
</script>

<style>
.history {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
