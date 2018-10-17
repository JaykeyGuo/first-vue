<template>
  <div class="info">
    <p class="info-title">{{ gettersJarvis.name }}</p>
    <table class="table">
      <tr>
        <th>sex</th>
        <th>age</th>
        <th>year</th>
      </tr>
      <tr>
        <td>{{ gettersJarvis.sex }}</td>
        <td>{{ gettersJarvis.age }}</td>
        <td>{{ gettersJarvis.year }}</td>
      </tr>
    </table>
<!--     <div class="btn-group">
      <button @clickSex='clickSex'>变性</button>
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Jarvis Info',
  computed: {...mapGetters(['gettersJarvis'])}
}
</script>
