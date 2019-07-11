<template>
  <div>
    <h1>
      This is Index
    </h1>
    單獨匯入element ui datePicker示意
    <date-picker v-model="exeStartTime" v-validate="{ required: true }" name="exeStartTime" :data-vv-as="$t('MyStrategy.StartTime')" type="datetime" :disabled="startCheck===1" />
  </div>
</template>
<script>
import { DatePicker } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

export default {
  name: 'Index',
  components: {
    DatePicker
  },
  data: function() {
    return {
      exeStartTime: null
    }
  },
  created() {
    console.log(process.env)
    this.$store.commit('SET_NAME', 'Guest')
  }
}
</script>

<style scoped >

</style>
