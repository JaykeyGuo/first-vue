<template>
  <div class="mbui">
    <input type="text" name="test"
      placeholder="无限弹窗"
      @keyup.enter="test()" id="input111"/>
    <mb-ripple
      @click="test"
      class="mb-ripple-test">
      弹窗提醒
    </mb-ripple>
  </div>
</template>

<script>
export default {
  name: 'mb-ui',
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
.mb-ripple-test {
  margin: 15px 15px;
  padding: 15px 15px;
  border: #2c3e50 1px solid;
  border-radius: 5px;
  font-size: 25px;
  color: red;
}
</style>
