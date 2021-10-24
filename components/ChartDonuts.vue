
<template>
    <div>
      <VueApexCharts
        width="500"
        type="donut"
        :options="options"
        :series="series"
      ></VueApexCharts>
    </div>
</template>

<script>
export default {
    props: {
        options: { type: [], default: [] },
        series: { type: [], default: [] },
  },
  components: {
    VueApexCharts: () => import('vue-apexcharts')
  },
  data() {
    return {

    }
  }
}
</script>