<template>
    <div>
          <v-card
    class="mx-auto "
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
         {{nom}}
        </v-list-item-title>
        <v-list-item-subtitle>Prix : {{prix}} €</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
        <v-card-actions>
      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
        <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
    </div>
</template>

<script>
export default {
    name:'Produit',
    props:{
        nom: {type :String, default : ''},
        prix: {type :Number,default:0},
    },
        data(){
        return {
            show:false,
        }
    },
}
</script>

<style lang="scss" scoped>

</style>