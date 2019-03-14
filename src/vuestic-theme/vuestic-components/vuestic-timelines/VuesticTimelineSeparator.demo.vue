<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 100px; height: 100px">
      <vuestic-timeline-separator />
    </div>
    <div class="demo-container__item" style="width: 100px; height: 100px">
      <vuestic-timeline-separator vertical />
    </div>
    <div class="demo-container__item" style="width: 100px; height: 100px">
      <vuestic-timeline-separator active />
    </div>
    <div class="demo-container__item" style="width: 100px; height: 100px">
      <vuestic-timeline-separator active-previous />
    </div>
    <div class="demo-container__item" style="width: 100px; height: 100px">
      <vuestic-timeline-separator active-next />
    </div>
  </div>
</template>

<script>
import VuesticTimelineSeparator from './VuesticTimelineSeparator.vue'

export default {
  components: {
    VuesticTimelineSeparator
  }
}
</script>
