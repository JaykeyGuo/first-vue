<template>
  <div class="tasks">
    <h1>This is the tasks page</h1>
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