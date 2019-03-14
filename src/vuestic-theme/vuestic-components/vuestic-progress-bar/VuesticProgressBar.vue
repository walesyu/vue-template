<template>
  <div class="vuestic-progress-bar">
    <horizontal-bar
      v-if="type == 'horizontal'"
      :value="transformedValue"
      :text="text"
      :size="size"
      :disabled="disabled"
      :animated="animated"
      :theme="theme"
    />
    <vertical-bar
      v-if="type == 'vertical'"
      :value="transformedValue"
      :text="text"
      :size="size"
      :disabled="disabled"
      :animated="animated"
      :theme="theme"
    />
    <circle-bar
      v-if="type == 'circle'"
      :value="transformedValue"
      :text="text"
      :disabled="disabled"
      :animated="animated"
      :theme="theme"
      :background-theme="backgroundTheme"
    />
  </div>
</template>

<script>
import HorizontalBar from './progress-types/HorizontalProgressBar.vue'
import VerticalBar from './progress-types/VerticalProgressBar.vue'
import CircleBar from './progress-types/CircleProgressBar.vue'

export default {
  name: 'VuesticProgressBar',
  components: {
    HorizontalBar,
    VerticalBar,
    CircleBar
  },
  props: {
    value: {
      type: Number,
      default: 0,
      validator: function(value) {
        return value >= 0 && value <= 100
      }
    },
    text: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'Primary'
    },
    backgroundTheme: {
      type: String,
      default: 'White'
    },
    type: {
      type: String,
      default: 'horizontal'
    },
    size: {
      type: String,
      default: 'basic',
      validator: function(value) {
        return ['thin', 'thick', 'basic'].indexOf(value) !== -1
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    animated: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      transformedValue: 0,
      valueAnimationInterval: 5000
    }
  },
  mounted() {
    if (this.type === 'circle' && this.animated) {
      this.animateValue()
    } else {
      this.transformedValue = this.value
    }
  },
  methods: {
    animateValue() {
      const valueMsecs = this.valueAnimationInterval / 200
      const delta = Math.sign(this.value - this.transformedValue)
      const valueInterval = setInterval(() => {
        if (this.transformedValue === this.value) {
          clearInterval(valueInterval)
        } else {
          this.transformedValue += delta
        }
      }, valueMsecs)
    }
  }
}
</script>
