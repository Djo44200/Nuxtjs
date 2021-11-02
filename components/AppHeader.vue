<template>
  <div class="app-header-ctn">
    <v-app-bar dense>
      <div class="title">
        <span>{{ title }}</span>
      </div>
      <div class="date-ctn">
        <date-picker
          :minDate="threeYearsAgo"
          :maxDate="now"
          @newDatePicker="firstDatePicker"
          :title="'Date de début'"
          class="date-picker"
        />
        <date-picker
          :minDate="minSecondDate"
          :maxDate="now"
          @newDatePicker="secondDatePicker"
          :title="'Date de fin'"
          class="date-picker"
        />
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import { threeYearsAgo, dateToString, dateStringToDate } from '@/utils/dayJs'
export default {
  name: 'AppHeader',
  data() {
    return {
      minSecondDate: null,
    }
  },
  computed: {
    threeYearsAgo() {
      return threeYearsAgo(new Date(), 'YYYY-MM-DD')
    },
    now() {
      return dateToString(new Date(), 'YYYY-MM-DD')
    },
  },
  methods: {
    firstDatePicker(newDate) {
      if (newDate) {
        this.$store.commit('changeStartPeriod', new Date(newDate))
        this.minSecondDate = newDate ? newDate : ''
      }
    },
    secondDatePicker(newDate) {
      if (newDate) {
        this.$store.commit('changeEndPeriod', new Date(newDate))
      }
    },
  },
  props: {
    title: { type: String, default: '' },
  },
}
</script>

<style lang="scss" scoped>
.app-header-ctn {
  display: flex;
  width: 100%;
  align-items: center;
  justify-items: center;
  justify-content: space-around;
  .title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 50%;
  }
  .date-ctn {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    .date-picker {
      padding-left: 1vw;
    }
  }
}
</style>
