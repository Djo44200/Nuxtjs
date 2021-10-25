<template>
  <div class="feedback-ctn">
    <div class="first-slot"><feedback-table class="feedback-table" :headers="feedbackHeaders" :items="feedBackItems" />
    <v-divider
  vertical
    ></v-divider>
    <stat class="stat" :title="titleStat" :result="0" />
    </div>
    <v-divider></v-divider>
    <div class="second-slot">
    <stat class="stat" :title="titleStat" :result="0" />
      <v-divider
        vertical
      ></v-divider>
     </div>
    
  </div>
</template>
<script>

import FeedbackTable from '@/components/FeedbackTable.vue'
import ChartDonuts from '@/components/ChartDonuts.vue'
import Stat from '@/components/Stat.vue'
import axios from "axios";

export default {
  name: 'index',
  components:{FeedbackTable,ChartDonuts,Stat},
  async mounted() {
    let feedbacksApi = await axios.get("/api/feedbacks");
    this.feedBackItems = feedbacksApi.data.feedbacks
  },
  data(){
    return{
      feedbackHeaders:[
        {
          text: 'Commentaire',
          value: 'comment',
        },
        {
          text: 'Note',
          value: 'mark',
        },
      ],
      feedBackItems:[],
      optionsDonuts:{},
      seriesDonuts:[50, 50],
      titleStat:'Nombre de Feedback',
      feedbackNumber: 0
    }
  },

}
</script>
<style lang="scss" scoped>
.feedback-ctn {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 2vh 0vw 0vh 0vw;
  .first-slot{
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 50%;
    .feedback-table,.stat{
      display: flex;
      flex-direction: column;
      width: 50%;
      padding: 0vh 3vw 0vh 3vw;
    }

  }
  .second-slot{
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 50%;
    .stat{
      width: 50%;
      padding: 3vh 3vw 0vh 3vw;
    }

  }

}
</style>
