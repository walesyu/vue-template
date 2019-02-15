<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-simple-select
        v-model="chartType"
        :options="chartTypes"
      />
      <button @click="refreshData()">
        Refresh data
      </button>

      <vuestic-chart :data="chartData" :type="chartType" />
    </div>
  </div>
</template>

<script>
import VuesticChart from './VuesticChart.vue'
import VuesticSimpleSelect from '../vuestic-simple-select/VuesticSimpleSelect'
import { chartTypes } from './VuesticChartConfigs'
import { getLineChartData } from '../../../data/charts/LineChartData'

export default {
  components: {
    VuesticSimpleSelect,
    VuesticChart
  },
  data() {
    return {
      chartData: getLineChartData(),
      chartType: 'pie'
    }
  },
  computed: {
    chartTypes: () => chartTypes
  },
  methods: {
    refreshData() {
      this.chartData = getLineChartData()
    }
  }
}
</script>
