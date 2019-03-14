<template>
  <div class="vuestic-color-dropdown">
    <div
      ref="toggleRef"
      class="vuestic-color-dropdown__toggle"
      @click="toggle()"
    >
      <slot name="toggle" />
    </div>
    <div v-show="isOpen">
      <div ref="content" class="vuestic-color-dropdown__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VuesticColorDropdown',
  data() {
    return {
      isOpen: false
    }
  },
  mounted() {
    const content = this.$refs.content
    const toggleRef = this.$refs.toggleRef
    window.addEventListener('click', (event) => {
      let target = event.target
      while (target !== null) {
        target = target.parentNode
        if (target === toggleRef || target === content) {
          break
        }
      }
      if (target !== toggleRef && target !== content) {
        this.isOpen = false
      }
    })
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss">
.vuestic-color-dropdown {
  &__toggle {
    position: relative;
  }

  &__content {
    position: absolute;
    padding-top: 20px;
    z-index: 1;
  }
}
</style>
