<template>
  <div class="tasks">
    <Tasks msg="Tasks"></Tasks>
  </div>
</template>

<script>
// @ is an alias to /src
import Tasks from '@/components/Tasks.vue'

export default {
  name: 'tasks',
  components: {
    Tasks
  }
}
</script>

<style>
.tasks {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
