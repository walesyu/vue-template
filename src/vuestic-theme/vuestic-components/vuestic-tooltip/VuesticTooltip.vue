<template>
  <span v-tooltip="tooltipOptions" class="vuestic-tooltip-target">
    <slot />
  </span>
</template>

<script>
import { VTooltip } from 'v-tooltip'

export default {
  name: 'VuesticTooltip',

  directives: { tooltip: VTooltip },

  props: {
    options: {
      type: Object,
      default: () => []
    }
  },

  data() {
    return {
      defaultOptions: {
        classes: 'vuestic-tooltip'
      }
    }
  },

  computed: {
    tooltipOptions() {
      return Object.assign({}, this.defaultOptions, this.options)
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
