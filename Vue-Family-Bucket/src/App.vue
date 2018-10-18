<template>
  <div id="app">
    <br>
    <router-link to="/">
      <button class="link-btn">
        Index
      </button>
    </router-link>
    <router-link to="/nobody">
      <button class="link-btn">
        Nobody
      </button>
    </router-link>
    <router-link to="/jaykey-info">
      <button class="link-btn">
        Jaykey
      </button>
    </router-link>
    <router-link to="/javirs-info">
      <button class="link-btn">
        Javirs
      </button>
    </router-link>
    <router-link to="/mjg-info">
      <button class="link-btn">
        MJG
      </button>
    </router-link>
    <router-link to="/mb-ui">
      <button class="link-btn">
        MBUI
      </button>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
    }
  },
  methods: {
    test () {
      this.$mbDialogs.show({
        content: 'hello mb-ui',
        hideCancel: true,
        maskClickToHide: true,
        confirm: '确认'
      })
      document.getElementById('input111').blur()
    }
  }
}
</script>

<style>
#app {
  margin-top: 60px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
