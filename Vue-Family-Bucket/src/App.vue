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
    <br><br>
    <input type="text" name="test" @keyup.enter="test" />
    <mb-ripple
      @click="test"
      class="mb-ripple-test">
      100
    </mb-ripple>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    test () {
      console.log(100)
      this.$mbDialogs.show({
        content: 'hello mb-ui'
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.mb-ripple-test {
  width: 100px;
  height: 50px;
  border: #2c3e50 1px solid;
  border-radius: 5px;
  font-size: 25px;
  color: red;
}
</style>
