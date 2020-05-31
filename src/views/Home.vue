<template>
  <div>
    <div class="banner"></div>
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
  height: 20vh;
  background-color: darkblue;
}
</style>
