<template>
  <v-bottom-navigation v-model="bottomNav" class="navApp">
    <v-btn width="75px" to="/therapy">Therapy</v-btn>
    <v-btn width="75px" to="/chat">Chat</v-btn>
    <v-btn width="75px" to="/">Profile</v-btn>
    <v-btn width="75px" to="/Buddy">Buddy</v-btn>
    <v-btn width="75px" to="/About">About</v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#navApp {
  height: 75px;
  position: fixed;
}
</style>
