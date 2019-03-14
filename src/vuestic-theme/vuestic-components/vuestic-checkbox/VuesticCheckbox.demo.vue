<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-checkbox v-model="value">
        <div slot="label">
          Selected
        </div>
      </vuestic-checkbox>
      <vuestic-checkbox v-model="value" label="Readonly" readonly />
      <vuestic-checkbox v-model="value" label="Disabled" disabled />
      <vuestic-checkbox v-model="value" error label="Error" is-error />
      <vuestic-checkbox v-model="value" error-messages="errorMessages" label="Error-message" />
      <vuestic-checkbox v-model="value" :error-messages="errorMessages" :error-count="2" label="Error-message" />
      <vuestic-checkbox v-model="value" error disabled label="Error + disabled" />
    </div>
  </div>
</template>

<script>
import VuesticCheckbox from './VuesticCheckbox'

export default {
  components: {
    VuesticCheckbox
  },
  data() {
    return {
      value: true,
      errorMessages: ['error message 1', 'error message 2']
    }
  }
}
</script>
