<template>
  <div class="title-ctn">
    <span class="title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'AppTitle',
  props: {
    title: { type: String, default: '' },
  },
}
</script>

<style lang="scss" scoped>
.title-ctn {
  display: flex;
  width: 100%;
  height: 100%;
  @media (max-width: 500px) {
    .title {
      font-size: 3vw !important;
    }
  }
}
</style>
