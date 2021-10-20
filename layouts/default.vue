<template>
  <v-app class="app">
    <app-header :title="'Feedback'" />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
export default {
  name:'default',
  components: { AppHeader },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [],
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: 'Restaurant',
    }
  },
}
</script>
<style scoped></style>
