<template>
  <div class="card">
    <v-card class="mx-auto" max-width="344" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="text-h5 mb-1">
            {{ nom }}
          </v-list-item-title>
          <v-list-item-subtitle>Prix : {{ prix }} €</v-list-item-subtitle>
          <v-list-item-subtitle>{{ resume }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Produit',
  props: {
    nom: { type: String, default: '' },
    prix: { type: Number, default: 0 },
    resume: { type: String, default: '' },
  },
  data() {
    return {
      show: false,
    }
  },
}
</script>

<style lang="scss" scoped></style>
