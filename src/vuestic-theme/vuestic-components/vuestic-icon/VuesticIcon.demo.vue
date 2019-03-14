<template>
  <div class="demo-container">
    <div
      v-for="icon in icons"
      :key="icon"
      class="demo-container__item"
    >
      <vuestic-icon :icon="icon" />
    </div>
  </div>
</template>

<script>
import VuesticIcon from './VuesticIcon.vue'
import { vuesticIcons } from './vuestic-icons'

export default {
  components: {
    VuesticIcon
  },
  computed: {
    icons: () => {
      return Object.keys(vuesticIcons)
    }
  }
}
</script>
