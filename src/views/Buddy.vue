<template>
  <v-container>
    <div class="buddyApp">
      <div class="buddyPanel">
        <v-row>
          <v-col>
            <h1>Buddy App</h1>
            <br>
            <h3>
              Welcome to the Buddy App!
            </h3>
          </v-col>
        </v-row>
      </div>
      <img
        class="buddy"
        src="../assets/pictures/buddy.jpg"
        alt=""
        width="100%"
        height="50%"
      />
    </div>
    <router-view></router-view>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.buddyPanel {
  justify-content: center;
  color: rgb(255, 255, 255);
  background-color: rgb(27, 14, 48);
  height: 15vh;
  border-radius: 25px;
}
.buddyApp {
  height: 100vh;
}
</style>
