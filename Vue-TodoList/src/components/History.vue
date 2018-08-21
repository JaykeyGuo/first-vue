<template>
  <div class="history">
    <h1>{{ msg }}</h1>
        <mt-cell v-for="item in items" :title="item.title" :key="item.id"></mt-cell>

  </div>
</template>

<script>
import { Cell } from 'mint-ui'
import { getTask } from '../api/tasks.js'

export default {
  name: 'History',
  props: {
    msg: String
  },
  data () {
      return {
          items: []
      }
  }, 
  components: {
      Cell
  },
  beforeCreate() {
      getTask(true).then(data => this.items = data)
  }
}
</script>