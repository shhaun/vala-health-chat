<template>
  <div class="chatApp">
<<<<<<< Updated upstream
    <h1>Chat App</h1>
    <router-link to="/chat"> <button>Chat</button></router-link>
     <router-link to="/chatHistory"> <button>Chat History</button></router-link>
  <router-view></router-view>
=======
    <v-row class="chatNavigation">
      <v-col>
        <v-btn to="/chat" dark>
          Chat
        </v-btn>
      </v-col>
      <v-col>
        <v-btn to="/chatHistory" dark>
          Meeting History
        </v-btn>
      </v-col>
    </v-row>
    <router-view></router-view>
>>>>>>> Stashed changes
  </div>
  
</template>

<script>
export default {};
</script>

<<<<<<< Updated upstream
<style lang="scss" scoped></style>
=======
<style lang="scss" scoped>
.chatNavigation {
  background-color: black;
  justify-content: center;

}
.chatApp{
  font-family: 'Cairo', sans-serif;
}
</style>
>>>>>>> Stashed changes
