<template>
  <div class="history">
    <h1>{{ msg }}</h1>
        <mt-cell v-for="item in items" :title="item.title" :key="item.id"></mt-cell>

  </div>
</template>

<script>
import { Cell } from 'mint-ui'
import axios from 'axios'
import * as R from 'ramda'

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
    axios
      .get('https://api.myjson.com/bins/oufit')
      .then(response => response.data)
      .then(data => {
          var incompleted = n => n.completed;
          this.items = R.filter(incompleted, data)
      })
      .catch(console.log);
  }
}
</script>