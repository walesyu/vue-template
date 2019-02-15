<template>
  <h1>
    This is Index
  </h1>
</template>
<script>
export default {
  name: 'Index',
  created() {
    console.log(process.env)
    this.$store.commit('SET_NAME', 'Guest')
  }
}
</script>

<style scoped >

</style>
