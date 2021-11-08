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
          :title="'Début'"
          class="date-picker"
        />
        <date-picker
          :minDate="minSecondDate"
          :maxDate="now"
          @newDatePicker="secondDatePicker"
          :defaultValue="defaultSecondDate"
          :title="'Fin'"
          class="date-picker"
        />
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import { threeYearsAgo, dateToString } from '@/utils/dayJs'
import { mapState } from 'vuex'

export default {
  name: 'AppHeader',
  data() {
    return {
      minSecondDate: threeYearsAgo(),
    }
  },
  computed: {
    ...mapState({
      stateStartPeriod(state) {
        return state.startPeriod
      },
      stateEndPeriod(state) {
        return state.endPeriod
      },
    }),
    threeYearsAgo() {
      return threeYearsAgo(new Date(), 'YYYY-MM-DD')
    },
    now() {
      return dateToString(new Date(), 'YYYY-MM-DD')
    },
    defaultFirstDate() {
      return dateToString(this.stateStartPeriod, 'YYYY-MM-DD')
    },
    defaultSecondDate() {
      return dateToString(this.stateEndPeriod, 'YYYY-MM-DD')
    },
  },
  methods: {
    async firstDatePicker(newDate) {
      if (newDate !== dateToString(this.stateStartPeriod, 'YYYY-MM-DD')) {
        const date = {
          start: dateToString(newDate, 'YYYY-MM-DD'),
          end: dateToString(this.stateEndPeriod, 'YYYY-MM-DD'),
        }
        this.$store.commit('changeStartPeriod', new Date(newDate))
        await this.$store.dispatch('feedback/changeDateFeedbackItems', date)
        this.minSecondDate = newDate ? newDate : ''
      }
    },
    async secondDatePicker(newDate) {
      if (newDate !== dateToString(this.stateEndPeriod, 'YYYY-MM-DD')) {
        const date = {
          start: dateToString(this.stateStartPeriod, 'YYYY-MM-DD'),
          end: dateToString(newDate, 'YYYY-MM-DD'),
        }

        this.$store.commit('changeEndPeriod', new Date(newDate))
        await this.$store.dispatch('feedback/changeDateFeedbackItems', date)
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
    @media (max-width: 500px) {
      width: 40%;
      span {
        font-size: 3vw;
      }
    }
  }
  .date-ctn {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    .date-picker {
      padding-left: 1vw;
    }
    @media (max-width: 500px) {
      width: 60%;
    }
  }
}
</style>
