<template>
  <div id="app">

            <router-view/>

    <div id="tabbar">
      <mt-tabbar v-model="selected">
        <mt-tab-item id="Home">
          <img src="http://placeholder.qiniudn.com/100x100" slot="icon">        
          <router-link to="/">Home</router-link>
        </mt-tab-item>
        <mt-tab-item id="Tasks">
          <img src="http://placeholder.qiniudn.com/100x100" slot="icon">          
          <router-link to="/tasks">Tasks</router-link>
        </mt-tab-item>
        <mt-tab-item id="History">
          <img src="http://placeholder.qiniudn.com/100x100" slot="icon">
          <router-link to="/history">History</router-link>
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>
import { Tabbar, TabItem } from 'mint-ui';

export default {
  name: 'app',
  components: {
    Tabbar,
    TabItem
  },
  data () {
    return {
      selected: 'tasks'
    }
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
#tabbar {
  
  position: fixed;
  bottom: 0rem;
  left: 0rem;
  background: white;
  width: 100%;
}
</style>
