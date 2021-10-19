<template>
  <div class="app-header-ctn">
    <v-app-bar dense>
      <span class="title">{{ title }}</span>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    title: { type: String, default: '' },
  },
}
</script>

<style scoped>
.app-header-ctn {
  display: flex;
  width: 100%;
}
.title {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
