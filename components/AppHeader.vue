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
          :defaultValue="defaultFirstDate"
          :title="'Date de début'"
          class="date-picker"
        />
        <date-picker
          :minDate="minSecondDate"
          :maxDate="now"
          @newDatePicker="secondDatePicker"
          :defaultValue="defaultSecondDate"
          :title="'Date de fin'"
          class="date-picker"
        />
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import { threeYearsAgo, dateToString } from '@/utils/dayJs'
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
    defaultFirstDate() {
      return dateToString(this.$store.state.startPeriod, 'YYYY-MM-DD')
    },
    defaultSecondDate() {
      return dateToString(this.$store.state.endPeriod, 'YYYY-MM-DD')
    },
  },
  methods: {
    async firstDatePicker(newDate) {
      if (
        newDate !== dateToString(this.$store.state.startPeriod, 'YYYY-MM-DD')
      ) {
        const date = {
          start: dateToString(newDate, 'YYYY-MM-DD'),
          end: dateToString(this.$store.state.endPeriod, 'YYYY-MM-DD'),
        }
        this.$store.commit('changeStartPeriod', new Date(newDate))
        await this.$store.dispatch('feedback/changeDateFeedbackItems', date)
        this.minSecondDate = newDate ? newDate : ''
      }
    },
    async secondDatePicker(newDate) {
      if (newDate !== dateToString(this.$store.state.endPeriod, 'YYYY-MM-DD')) {
        const date = {
          start: dateToString(this.$store.state.starPeriod, 'YYYY-MM-DD'),
          end: dateToString(newDate, 'YYYY-MM-DD'),
        }
        await this.$store.dispatch('feedback/changeDateFeedbackItems', date)
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
