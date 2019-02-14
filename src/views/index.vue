<template>
  <h1>
    This is Index
  </h1>
</template>
<script>
export default {
  name: 'Index',
  data() {
  },
  created() {
    this.$store.commit('SET_NAME', 'Guest')
  }
}
</script>

<style scoped >

</style>
