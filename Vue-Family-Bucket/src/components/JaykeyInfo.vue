<template>
  <div class="info">
    <p class="info-title">{{ gettersJaykey.name }}</p>
    <table class="table">
      <tr>
        <th>sex</th>
        <th>age</th>
        <th>year</th>
      </tr>
      <tr>
        <td>{{ gettersJaykey.sex }}</td>
        <td>{{ gettersJaykey.age }}</td>
        <td>{{ gettersJaykey.year }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Jaykey Info',
  computed: {...mapGetters(['gettersJaykey'])}
}
</script>

<style>
.info {
  width: 500px;
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
  height: 50px;
  border: red 1px solid;
}
td {
  height: 50px;
  font-size: 25px;
  border: green 1px solid;
}
</style>
