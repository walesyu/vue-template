<template>
  <div class="form-group with-icon-left">
    <div class="input-group">
      <input id="input-icon-left" v-model="valueProxy" name="input-icon-left" required />
      <i class="glyphicon glyphicon-search icon-left input-icon search-icon"/>
      <label class="control-label" for="input-icon-left">
{{ label }}
</label><i class="bar"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterBar',
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  computed: {
    valueProxy: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      },
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.search-icon {
  transform: rotate(90deg);
}
.form-group {
  min-width: 7rem;
}
@media (max-width: 768px) {
  .form-group {
    width: 80%;
  }
}
</style>
