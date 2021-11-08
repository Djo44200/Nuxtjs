<template>
  <div class="chart">
    <VueApexCharts
      width="350"
      type="donut"
      class="donut-ctn"
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
    VueApexCharts: () => import('vue-apexcharts'),
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.chart {
  display: flex;
  .donut-ctn {
    @media (max-width: 500px) {
      font-size: 50%;
    }
  }
}
</style>
