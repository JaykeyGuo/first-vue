<template>
  <div class="about">
    <h1>This is an about page</h1>
    <mt-range
      v-model="rangeValue"
      :min="10"
      :max="90"
      :step="10"
      :bar-height="5">
    </mt-range>
  </div>
</template>
