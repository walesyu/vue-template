<template>
  <div class="vuestic-pallet-custom">
    <vuestic-simple-palette-picker
      v-model="valueProxy"
      :palette="palette"
      class="vuestic-pallet-custom__palette"
    />
    <vuestic-color-picker-input
      v-model="valueProxy"
      mode="advanced"
      class="vuestic-pallet-custom__input"
    >
      <vuestic-color-input v-model="valueProxy" :selected="dotisSelected" />
    </vuestic-color-picker-input>
  </div>
</template>

<script>

import VuesticColorPickerInput from './VuesticColorPickerInput'
import VuesticSimplePalettePicker from './VuesticSimplePalettePicker'
import VuesticColorInput from './VuesticColorInput'

export default {
  name: 'VuesticPalletCustom',
  components: {
    VuesticColorInput,
    VuesticColorPickerInput,
    VuesticSimplePalettePicker
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    palette: {
      type: Array
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
    },
    dotisSelected() {
      if (this.value !== '') {
        if (this.palette.includes(this.value)) {
          return false
        } else {
          return true
        }
      }
    }
  }
}
</script>

<style lang="scss">
.vuestic-pallet-custom {
  display: flex;

  &__palette {
    margin-right: 20px;
  }

  &__input {
    float: right;
  }
}
</style>
