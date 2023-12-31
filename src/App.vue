<template>
  <div>
    <AppHeader title="Laravel - Vue.js - API REST" />
      <router-view />
  </div>
</template>


<script>
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'AppContainer',
  components: {
    AppHeader
  }
}
</script>

<style></style>
