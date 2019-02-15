<template>
  <div class="vuestic-simple-palette-picker">
    <ul class="vuestic-simple-palette-picker__colors">
      <color-dot
        v-for="(color, index) in palette"
        :key="index"
        :color="color"
        :selected="isSelected(color)"
        @click.native="handlerClick(color)"
      />
    </ul>
  </div>
</template>

<script>
import ColorDot from './ColorDot'

export default {
  name: 'VuesticSimplePalettePicker',
  components: {
    ColorDot
  },
  props: {
    palette: {
      type: Array
    },
    value: {
      default: ''
    }
  },
  computed: {
    valueProxy: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    isSelected(color) {
      return this.value === color
    },
    handlerClick(color) {
      this.valueProxy = color
    }
  }
}
</script>

<style lang="scss">
.vuestic-simple-palette-picker {
  padding-top: 3px;

  &__colors {
    padding: 3px;
    display: flex;
  }
}

</style>
