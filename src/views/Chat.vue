<template>
  <div class="chatApp">
    <v-row class="chatNavigation">
      <v-col>
        <v-btn to="/chat" light>
          Chat
        </v-btn>
      </v-col>
      <v-col>
        <v-btn to="/chatHistory" light>
          Meeting History
        </v-btn>
      </v-col>
    </v-row>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.chatNavigation {
  height: 10vh;
  background-color: black;
  justify-content: center;

}
</style>
