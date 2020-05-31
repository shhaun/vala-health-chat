<template>
  <div id="app">
    <v-content>
       <router-view/>
    </v-content>
    <bottomMenu/>
  </div>
</template>

<script>
// @ is an alias to /src
import bottomMenu from '@/components/ui/navApp.vue'

export default {
  name: 'app',
  components: {
    bottomMenu
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
