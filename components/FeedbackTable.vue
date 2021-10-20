<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page="itemsPage"
  ></v-data-table>
</template>
<script>

export default  {
  name: 'FeedbackTable',
  props: {
    headers: { type: [], default: [] },
    items: { type: [], default: [] },
    itemsPage:{type:Number, default:5}
  },
}
</script>
<style scoped>
.elevation-1 {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
