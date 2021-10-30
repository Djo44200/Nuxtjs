<template>
  <div class="app-header-ctn">
    <v-app-bar dense>
      <span class="title">{{ title }}</span>
      <div class="date-ctn">
        <date-picker :minDate="threeYearsAgo" :maxDate="now" @newDatePicker="firstDate" :title="'Date de début'" class="date-picker" />
        <date-picker :minDate="minSecondDate" :maxDate="now" @newDatePicker="seconDate" :title="'Date de fin'" class="date-picker" />
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import {threeYearsAgo,dateToString} from'@/utils/dayJs'
export default {
  name: 'AppHeader',
  data(){
    return {
      minSecondDate:null,
      firstDate:null,
      secondDate:null,
    }
  },
  computed:{
    threeYearsAgo(){
      return threeYearsAgo(new Date(), 'YYYY-MM-DD')
    },
    now(){
      return dateToString(new Date(), 'YYYY-MM-DD')
    },
  },
  methods:{
    firstDate(date){
      this.firstDate = date;
      this.minSecondDate = date?date:'';
    },
    secondDate(date){
      this.secondDate = date
    }
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
    padding-top: 3vh;
    .date-picker {
      padding-left: 1vw;
    }
  }
  // .date-picker {
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-around;
  //   width: 20%;
  // }
}
</style>
