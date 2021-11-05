<template>
  <v-app class="app">
    <app-header class="header" :title="'Dashboard Feedback'" />
    <v-main>
      <v-container class="container-ctn">
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
import { makeServer } from '../mirage'

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' })
}
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
      title: 'Feedback',
    }
  },
}
</script>
<style scoped>
.app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.container-ctn {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
