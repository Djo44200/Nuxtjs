<template>
  <div class="feedback-ctn">
    <div class="first-slot">
      <div class="list-ctn">
        <app-title class="title-list" :title="'Liste des feedback'" />
        <div class="feedback-table">
          <feedback-table :headers="feedbackHeaders" :items="feedBackItems" />
        </div>
      </div>
    </div>
    <v-divider></v-divider>
    <div class="second-slot">
      <div class="donut-ctn">
        <app-title class="title-list" :title="'Statistiques'" />
        <div class="donut-chart">
          <chart-donuts :options="optionsDonuts" :series="seriesDonuts" />
        </div>
      </div>
      <v-divider vertical></v-divider>
      <div class="all-stats">
        <app-title class="title-list" :title="'Météo'" />
        <div class="stats-ctn">
          <stat
            class="stat"
            :title="'Nombre de Feedback'"
            :result="feedbackNumber"
          />
          <stat
            class="stat"
            :title="'Moyenne des Feedback'"
            :emoji="true"
            :result="averageFeedback"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'index',
  async mounted() {
    await this.$store.dispatch('feedback/changeFeedbackItems')
    this.averageNoteFeedback()
    this.countNote()
  },
  watch: {
    feedBackItems: function () {
      this.countNote()
      this.averageNoteFeedback()
    },
  },

  computed: {
    ...mapGetters({
      feedBackItems: 'feedback/getAllFeedback',
      feedbackNumber: 'feedback/getFeedbackLength',
    }),
  },
  methods: {
    averageNoteFeedback() {
      let total = 0
      this.feedBackItems.forEach((feedback) => {
        total = total + feedback.mark
      })
      this.averageFeedback = Math.round(total / this.feedbackNumber)
    },
    countNote() {
      let array = []
      for (let i = 0; i <= 5; i++) {
        const number = parseInt(
          this.feedBackItems.filter((feedback) => feedback.mark === i).length
        )
        array.push(number)
      }
      this.seriesDonuts = array
    },
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
      averageFeedback: 0,
      optionsDonuts: {
        labels: ['0', '1', '2', '3', '4', '5'],
        plotOptions: {
          pie: {
            donut: {
              size: '60%',
            },
          },
        },
      },
      seriesDonuts: [],
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
  padding-top: 2vh;
  .first-slot {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 50%;
    .list-ctn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      padding-left: 3vw;
      .title-list {
        width: 100%;
        height: 10%;
        justify-content: flex-start;
      }
      .feedback-table {
        width: 100%;
        height: 100%;
        justify-content: center;
        padding: 0vh 3vw 3vh 0vw;
      }
    }
  }
  .second-slot {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 50%;
    .donut-ctn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 100%;
      padding-left: 3vw;
      .title-list {
        width: 100%;
        justify-content: flex-start;
      }
      .donut-chart {
        display: flex;
        align-items: center;
        justify-items: center;
        justify-content: center;
        width: 50%;
        height: 100%;
      }
    }
    .all-stats {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 50%;
      padding-left: 3vw;
      .title-list {
        width: 100%;
        justify-content: flex-start;
      }
      .stats-ctn {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        .stat {
          padding: 0vh 3vw 3vh 0vw;
        }
      }
    }
  }
}
</style>
