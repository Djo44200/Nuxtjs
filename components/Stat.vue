<template>
    <div class="stat-ctn">
        <v-card class="card mx-auto">
          <v-card-title class="title text-caption">
            {{title}}
          </v-card-title>
          <v-card-text class="result" v-if="!emoji">
           {{result}}
          </v-card-text>
          <v-card-text class="result" v-if="emoji">
            <v-icon
            large
            :color="emojis().color"
            >
             {{emojis().mood}}
            </v-icon>
          </v-card-text>
        </v-card>
    </div>
</template>
<script>

export default  {
  name: 'Stat',
  props: {
    title: { type: String, default: '' },
    result: { type: Number, default: 0 },
    emoji:{type:Boolean, default:false}
  },
  methods:{
    emojis(){
      let object = {color:'', mood:''}
      switch (this.result) {
        case 0:
          object.color = 'red'
          object.mood = 'mdiEmoticonDeadOutline'
          break;
        case 1:
          object.color = 'red'
          object.mood = 'mdiEmoticonSadOutline'
          break;
        case 2:
          object.color = 'red'
          object.mood = 'mdiEmoticonNeutralOutline'
          break;
        case 3:
          object.color = 'red'
          object.mood = 'mdiEmoticonHappyOutline'
          break;
        case 4:
          object.color = 'red'
          object.mood = 'mdiEmoticonExcitedOutline'
          break;
        default:
          object.color = 'red'
          object.mood = 'mdiEmoticonDevilOutline'
          break;
      }
      return object
    }
  },
  data(){
    return {
        
    }
  }
}
</script>
<style lang="scss" scoped>
.stat-ctn {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
    .card{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .title{
        font-weight: bold;
      }
      .result{
        display: flex;
        justify-content: center;
        align-items: center;
      }

}
}

</style>
