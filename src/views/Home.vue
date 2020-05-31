<template>
  <div>
    <div class="banner">
      <div class="avatar-banner"></div>
    </div>

    <router-link to="/">
      <button class="button">
        <img src="../assets/icon-3.jpg" alt="" height="50px" /></button
    ></router-link>
    <router-link to="/settingsApp">
      <button class="button" id="space">
        <img src="../assets/icon-1.jpg" alt="" height="50px" /></button
    ></router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss">
.banner {
  height: calc(35vh - 75px);
  width: 100%;
  background-color: darkblue;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 2;
  background-size: 100% 100%;
  background-image: url(../assets/pictures/wallpaper.png);
}

.avatar-banner {
  width: 23vh;
  height: 23vh;
  border-radius: 50%;
  background-color: red;
  transform: translate(0rem, 3.2rem);
  z-index: 99;
  background-image: url(../assets/pictures/morciak.jpg);
  background-size: 100% 100%;
}
.button {
  width: 20%;
  max-height: 30px;
  margin: 0 0 0 0;
}
#space {
  margin: 0 0 0 235px;
}
</style>
