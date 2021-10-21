<template>
  <div class="feedback-ctn">
    <feedback-table :headers="feedbackHeaders" :items="feedBackItems" />
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
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .card-ctn {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    align-items: center;
    .card {
      margin: 2wv;
      width: 30vw;
    }
  }
}
</style>
