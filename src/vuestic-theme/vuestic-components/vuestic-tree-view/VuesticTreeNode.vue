<template>
  <div
    class="vuestic-tree-node"
    :class="{'vuestic-tree-node-selected': selected}"
  >
    <div v-if="$slots.checkbox" class="vuestic-tree-node-checkbox">
      <slot name="checkbox" />
    </div>
    <div v-if="$slots.icon" class="vuestic-tree-node-icon">
      <slot name="icon" />
    </div>
    <div class="vuestic-tree-node-label">
      <slot />
    </div>
    <div v-if="$slots.iconRight" class="vuestic-tree-node-icon-right">
      <slot name="iconRight" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VuesticTreeNode',
  props: {
    selected: {
      type: Boolean,
      default: false
    }

  }
}
</script>

<style lang="scss">
.vuestic-tree-node {
  .form-group {
    margin-bottom: 0px;
  }
  display: flex;
  &-checkbox {
    margin-right: 0.75rem;
  }
  &-icon {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 0.375rem;
  }
  &-icon-right {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 0.375rem;
  }
  &-label {
    flex-grow: 1;
    word-wrap: break-word;
    overflow: hidden;
  }
  &-selected #{&}-label {
    background-color: $vue-light-green;
  }

  // HACK Checkbox for presentation page
  .vuestic-checkbox {
    margin-bottom: 0;
    margin-top: -0.125rem;
    margin-right: -0.625rem;
  }
}
</style>
