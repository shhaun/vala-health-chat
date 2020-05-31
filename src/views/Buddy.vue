<template>
  <v-container>
    <div class="buddyApp">
      <h1>Buddy App</h1>
      <h3>
        Different images for Buddy here
      </h3>
    </div>
    <router-view></router-view>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.buddyApp {
  color: white;
  background-color: black;
  height: 480px;
}
</style>
