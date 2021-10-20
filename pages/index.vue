<template>
  <div class="feedback-ctn">
    <feedback-table :headers="feedbackHeaders" :items="feedBackItems" />
  </div>
</template>
<script>

import FeedbackTable from '@/components/FeedbackTable.vue'

export default {
  name: 'index',
  components:{FeedbackTable},
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
      feedBackItems:[
          {
            comment: 'Frozen Yogurt',
            mark: 159,
          },
          {
            comment: 'Frozen Yogurt',
            mark: 159,
          },
          {
            comment: 'Frozen Yogurt',
            mark: 159,
          },
          {
            comment: 'Frozen Yogurt',
            mark: 159,
          },
          {
            comment: 'Frozen Yogurt',
            mark: 159,
          },
          {
            comment: 'Frozen Yogurt',
            mark: 159,
          },
          {
            comment: 'Frozen Yogurt',
            mark: 159,
          },
        ],
    }
  }
}
</script>
<style lang="scss" scoped>
.feedback-ctn {
  display: flex;
  flex-direction: column;
  align-content: center;
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
