<template>
  <div class="table-ctn">
    <v-data-table
      class="table"
      :headers="headers"
      :page.sync="page"
      hide-default-footer
      :items="items"
      :items-per-page="itemsPage"
      @page-count="pageCount = $event"
    ></v-data-table>
    <div class="pagination text-center pt-2">
      <v-pagination v-model="page" :length="pageCount"></v-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FeedbackTable',
  props: {
    headers: { type: [], default: [] },
    items: { type: [], default: [] },
    itemsPage: { type: Number, default: 4 },
  },
  data() {
    return {
      page: 1,
      pageCount: 0,
    }
  },
}
</script>
<style lang="scss" scoped>
.table-ctn {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .table {
    width: 100%;
    height: 100%;
  }
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
