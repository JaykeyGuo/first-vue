<template>
  <div class="info">
    <p class="info-title">{{ gettersJaymo.name }}</p>
    <table class="table">
      <tr>
        <th>sex</th>
        <th>age</th>
        <th>year</th>
      </tr>
      <tr>
        <td>{{ gettersJaymo.sex }}</td>
        <td>{{ gettersJaymo.age }}</td>
        <td>{{ gettersJaymo.year }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Info',
  computed: {...mapGetters(['gettersJaymo'])}
}
</script>
