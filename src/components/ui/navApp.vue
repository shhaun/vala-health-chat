<template>
  <v-bottom-navigation v-model="bottomNav" class="navApp">
    <v-btn width="75px" height="35px" to="/therapy">Therapy</v-btn>
    <v-btn width="75px" height="35px" to="/chat">Chat</v-btn>
    <v-btn width="75px" height="35px" to="/"><img src="../../assets/pictures/vlogo.svg" alt="" height="30px"></v-btn>
    <v-btn width="75px" height="35px" to="/Buddy"> <img src="../../assets/pictures/buddy.jpg" alt="" height="30px"></v-btn>
    <v-btn width="75px" height="35px" to="/About">About</v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#navApp {
  position: absolute;
  height: 35px;
}
</style>
