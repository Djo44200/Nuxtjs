<template>
  <div>
    <v-data-table
      :headers="headers"
      :page.sync="page"
      hide-default-footer
      :items="items"
      :items-per-page="itemsPage"
      @page-count="pageCount = $event"
    ></v-data-table>
    <div class="text-center pt-2">
        <v-pagination
          v-model="page"
          :length="pageCount"
        ></v-pagination>

      </div></div>
</template>
<script>

export default  {
  name: 'FeedbackTable',
  props: {
    headers: { type: [], default: [] },
    items: { type: [], default: [] },
    itemsPage:{type:Number, default:4}
  },
  data(){
    return {
        page: 1,
        pageCount: 0,
    }
  }
}
</script>
<style scoped>
.elevation-1 {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
