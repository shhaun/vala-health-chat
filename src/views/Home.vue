<template>
  <div>
    <div class="banner">
      <div class="avatar-banner">
        
      </div>
    </div>

    <h1>
      Profile Page
    </h1>
    <router-link to="/"> <button>Profile Home</button></router-link>
    <router-link to="/moodApp"> <button>Mood App</button></router-link>
    <router-link to="/settingsApp"> <button>Settings</button></router-link>

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
  width:100%;
  background-color: darkblue;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 2;
  background-size: 100% 100%;
  background-image: url(../assets/pictures/wallpaper.png);
}

.avatar-banner{
  width:23vh;
  height:23vh;
  border-radius:50%;
  background-color:red;
  transform:translate(0rem, 3.2rem);
  z-index: 99;
  background-image: url(../assets/pictures/morciak.jpg);
  background-size: 100% 100%;
}
</style>
