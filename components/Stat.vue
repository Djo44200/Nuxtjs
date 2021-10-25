<template>
    <div class="stat-ctn">
        <v-card class="card">
          <v-card-text class="title">
            {{title}}
          </v-card-text>
          <v-card-text class="result">
           {{result}}
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
  },
  data(){
    return {
        
    }
  }
}
</script>
<style scoped>
.stat-ctn {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.card{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
</style>
