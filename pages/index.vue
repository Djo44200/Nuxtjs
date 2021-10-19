<template>
  <div class="feedback-ctn">
    <feedback-table :headers="feedbackHeaders" :items="feedBackItems" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import FeedbackTable, { HeadersTable } from '@/components/FeedbackTable.vue'

@Component({
  components: { FeedbackTable },
})
export default class Index extends Vue {
  get feedbackHeaders(): HeadersTable[] {
    const allFeedback: HeadersTable[] = [
      {
        text: 'Commentaire',
        value: 'comment',
      },
      {
        text: 'Note',
        value: 'mark',
      },
    ]
    return allFeedback
  }
  //   get feedBackItems(): any[] {
  //     return []
  //   }
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
