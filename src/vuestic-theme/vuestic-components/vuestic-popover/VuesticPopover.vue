<template>
  <v-popover
    :popover-class="popoverClass"
    :open="open"
    :disabled="disabled"
    :placement="placement"
    :auto-hide="autoHide"
  >
    <slot name="trigger" />
    <template slot="popover">
      <div v-if="isIconPresent" class="popover-icon">
        <slot name="icon" />
      </div>
      <div class="popover-content">
        <div class="popover-header">
          <slot name="header" />
        </div>
        <div class="popover-body">
          <slot name="body" />
        </div>
      </div>
    </template>
  </v-popover>
</template>

<script>
import { VPopover } from 'v-tooltip'

export default {
  name: 'VuesticPopover',

  components: { VPopover },

  props: {
    open: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: 'auto'
    },
    popoverClass: {
      type: [String, Array],
      default: 'vuestic-tooltip'
    },
    autoHide: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    isIconPresent() {
      return !!this.$slots.icon
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
