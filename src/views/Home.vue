<template>
  <v-card>
    <v-banner padless sticky="sticky" class="banner">
      <div class="avatar-banner"></div>
    </v-banner>
    <div id="optionsPanel">
      <v-row>
        <v-col>
          <router-link to="/">
            <button class="button">
              <img src="../assets/icon-3.jpg" alt="" height="30px" /></button
          ></router-link>
        </v-col>
        <div id="spacing"></div>
        <v-col>
          <router-link to="/settingsApp">
            <button class="button" id="space">
              <img src="../assets/icon-1.jpg" alt="" height="30px" /></button
          ></router-link>
        </v-col>
      </v-row>
    </div>
    <v-row>
      <router-view></router-view>
    </v-row>
  </v-card>
</template>

<script>
export default {};
</script>

<style lang="scss">
// ---------------------------------------------------- //
// Banner Image
.banner {
  height: calc(35vh - 75px);
  width: 100%;
  background-color: darkblue;
  display: flex;
  align-items: flex-end;
  z-index: 2;
  justify-content: center;
  background-size: 100% 100%;
  background-image: url(../assets/pictures/wallpaper.png);
  background-repeat: inherit;
  position: fixed;
}
// ---------------------------------------------------- //
// Morty's Face Profile Picture
.avatar-banner {
  width: 23vh;
  height: 23vh;
  border-radius: 50%;
  background-color: red;
  transform: translate(75%, -50%);
  z-index: 99;
  background-image: url(../assets/pictures/morciak.jpg);
  background-size: 100% 100%;
  position: fixed;
}

// ---------------------------------------------------- //
// Options Panel

#optionsPanel {
  height: 45px;
}

// ---------------------------------------------------- //
// Spacing between buttons
#spacing {
  width: 45%;
}

// ---------------------------------------------------- //
// Buttons
.button {
  width: 20%;
  max-height: 30px;
  margin: 0 0 0 0;
}
</style>
