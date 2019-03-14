<template>
  <component :is="iconComponent" />
</template>

<script>
import { vuesticIcons } from './vuestic-icons'

export default {
  name: 'VuesticIcon',
  props: {
    icon: {
      validator: (icon) => {
        return icon in vuesticIcons
      }
    }
  },
  computed: {
    iconComponent() {
      return vuesticIcons[this.icon]
    }
  }
}
</script>

<style lang="scss">
.vuestic-icon {

}
</style>
