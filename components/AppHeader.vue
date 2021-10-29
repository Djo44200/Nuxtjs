<template>
  <div class="app-header-ctn">
    <v-app-bar dense>
      <span class="title">{{ title }}</span>
      <div class="date-ctn">
        <date-picker :title="'Date de début'" class="date-picker" />
        <date-picker :title="'Date de fin'" class="date-picker" />
      </div>
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

<style lang="scss" scoped>
.app-header-ctn {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  .title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 60%;
  }
  .date-ctn {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 40%;
    .date-picker {
      padding-left: 1vw;
    }
  }
  // .date-picker {
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-around;
  //   width: 20%;
  // }
}
</style>
