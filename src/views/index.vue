<template>
  <div>
    Index {{ $t('HomePage.Hello') }} {{ $store.getters.name }}
  </div>
</template>
<script>
export default {
  name: 'Index',
  created() {
    this.$store.commit('SET_NAME', 'Guest')
  },
  methods: {

  }
}
</script>

<style scoped >

</style>
