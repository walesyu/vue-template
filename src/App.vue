<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import "sass/main";

  body {
    height: 100%;
    #app {
      height: 100%;
    }
  }
</style>
