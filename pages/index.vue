<template>
  <div class="feedback-ctn">
    <div class="first-slot"><feedback-table class="feedback-table" :headers="feedbackHeaders" :items="feedBackItems" />
    <v-divider
  vertical
    ></v-divider>
    <feedback-table class="feedback-table" :headers="feedbackHeaders" :items="feedBackItems" /> 
    </div>
    <v-divider></v-divider>
  </div>
</template>
<script>

import FeedbackTable from '@/components/FeedbackTable.vue'
import axios from "axios";

export default {
  name: 'index',
  components:{FeedbackTable},
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
    }
  },

}
</script>
<style lang="scss" scoped>
.feedback-ctn {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 5vh 0vw 0vh 0vw;
  .first-slot{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 50%;
  .feedback-table{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0vh 3vw 0vh 3vw;
  }
  }
}
</style>
