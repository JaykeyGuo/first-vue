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
    <input type="text" name="test"
      placeholder="无限弹窗"
      @keyup.enter="test()" id="input111"/>
    <mb-ripple
      @click="test"
      class="mb-ripple-test">
      无限弹窗
    </mb-ripple>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
const print = console.log

export default {
  directives: {
    focus: {
      inserted: function (el) {
        el.blur()
      }
    }
  },
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
