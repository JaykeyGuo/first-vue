<template>
  <div class="info">
    <p class="info-title">{{ gettersName }}</p>
    <table class="table">
      <tr>
        <th>sex</th>
        <th>age</th>
        <th>year</th>
      </tr>
      <tr>
        <td>{{ gettersSex }}</td>
        <td>{{ gettersAge }}</td>
        <td>{{ gettersYear }}</td>
      </tr>
    </table>
    <br>
    <div class="btn-group">
      <button @click="changeSex">变性</button>
      <button @click="changeYoung">变年轻</button>
      <button @click="changeOld">变老</button>
    </div>
    <br>
    <div class="change-info">
      <table>
        <tr>
          New Name
          <input v-model="newInfo.InfoName" />
        </tr>
        <tr>
          New Sex
          <input v-model="newInfo.InfoSex" />
        </tr>
        <tr>
          New Age
          <input v-model="newInfo.InfoAge" />
        </tr>
      </table>
      <button @click='submit'>Update</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Nobody',
  data () {
    return {
      newInfo: {
        InfoName: '',
        InfoSex: '',
        InfoAge: ''
      }
    }
  },
  computed: {...mapGetters(
    [
      'gettersName',
      'gettersSex',
      'gettersAge',
      'gettersYear'
    ])
  },
  methods: {...mapActions([
    'changeSex',
    'changeYoung',
    'changeOld',
    'updateInfo'
  ]),
  submit () {
    this.$store.dispatch('updateInfo', this.newInfo)
  }
  }
}
</script>

<style>
.info {
  width: 500px;
  /* background: green; */
  overflow: hidden;
}
.info-title {
  widows: 100%;
  position: relative;
  display: block;
  text-align: center;
  font-size: 25px;
  color: black;
}
.table {
  width: 100%;
  border: black 1px solid;
  border-radius: 5px;
}
th {
  border: red 1px solid;
}
td {
  font-size: 25px;
  border: green 1px solid;
}
</style>
