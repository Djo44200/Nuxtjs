<template>
  <v-app class="app">
    <app-header :title="'Dashboard Feedback'" />
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

// if (process.env.NODE_ENV === 'development') {
//   require('../miragejs/server').makeServer();
// }
export default {
  name: 'default',
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
