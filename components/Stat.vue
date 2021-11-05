<template>
  <div class="stat-ctn">
    <v-card class="card mx-auto">
      <v-card-title class="title text-caption">
        {{ title }}
      </v-card-title>
      <v-card-text class="result" v-if="!emoji">
        {{ result }}
      </v-card-text>
      <v-card-text class="result" v-if="emoji">
        <v-icon large :color="emojis().color">
          {{ emojis().mood }}
        </v-icon>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  name: 'Stat',
  props: {
    title: { type: String, default: '' },
    result: { type: Number, default: 0 },
    emoji: { type: Boolean, default: false },
  },
  methods: {
    emojis() {
      let object = { color: '', mood: '' }
      switch (this.result) {
        case 0:
          object.color = 'red'
          object.mood = 'mdi-emoticon-dead-outline'
          break
        case 1:
          object.color = '#fa824e'
          object.mood = 'mdi-emoticon-sad-outline'
          break
        case 2:
          object.color = '#fccd3f'
          object.mood = 'mdi-emoticon-neutral-outline'
          break
        case 3:
          object.color = '#a0d77a'
          object.mood = 'mdi-emoticon-happy-outline'
          break
        case 4:
          object.color = '#6bca6c'
          object.mood = 'mdi-emoticon-excited-outline'
          break
        default:
          object.color = 'transparent'
          object.mood = 'mdi-emoticon-devil-outline'
          break
      }
      return object
    },
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.stat-ctn {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    .title {
      font-weight: bold;
    }
    .result {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
