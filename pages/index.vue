<template>
  <div class="feedback-ctn">
    <div class="first-slot">
      <div class="feedback-table">
        <feedback-table :headers="feedbackHeaders" :items="feedBackItems" />
      </div>
      <v-divider class="divider" vertical></v-divider>
      <div class="stats">
        <stat class="stat" :title="'Nombre de Feedback'" :result="feedbackNumber" />
        <stat class="stat" :title="'Moyenne des Feedback'" :emoji="true" :result="averageFeedback" />
      </div>
    </div>
    <v-divider></v-divider>
    <div class="second-slot">
      <v-divider vertical></v-divider>
    </div>
  </div>
</template>
<script>
import FeedbackTable from '@/components/FeedbackTable.vue'
import ChartDonuts from '@/components/ChartDonuts.vue'
import Stat from '@/components/Stat.vue'
import FeedbackService from '@/services/FeedbackService'

export default {
  name: 'index',
  components: { FeedbackTable, ChartDonuts, Stat },
  async mounted() {
    this.averageNoteFeedback()
  },
  async asyncData({ error }) {
    try {
      const { data } = await FeedbackService.getAllFeedback();
      return {
        feedBackItems: data.feedbacks,
        feedbackNumber: data.feedbacks.length,
      };
    } catch (e) {
      error({
        statusCode: 503,
        message: "Oops !"
      });
    }
  },
  methods: {
    averageNoteFeedback() {
      let total = 0;
      this.feedBackItems.forEach(feedback => {
        total = total + feedback.mark
      });
      this.averageFeedback = Math.round(total/this.feedbackNumber)
    }

  },
  data() {
    return {
      feedbackHeaders: [
        {
          text: 'Commentaire',
          value: 'comment',
        },
        {
          text: 'Note',
          value: 'mark',
        },
      ],
      averageFeedback:0,
      feedBackItems: [],
      optionsDonuts: {},
      seriesDonuts: [50, 50],
      feedbackNumber: 0,
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
  .first-slot {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 50%;
    .feedback-table,
    .stats {
      padding: 0vh 3vw 0vh 3vw;
      width: 45%;
      height: 50%;
    }
    .stats {
      display: flex;
      align-items: center;
      justify-items: center;
      .stat {
        padding: 1vw;
      }
    }
    .divider {
      width: 10%;
    }
  }
  .second-slot {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 50%;
  }
}
</style>
