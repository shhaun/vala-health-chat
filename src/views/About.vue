<template>
  <div class="aboutPage">

    <div class="aboutPageNav">
      <router-link to="/about">
        <button
          depressed
          color="primary"
          width="75px"
          rounded
          small
          dark
          to="/about"
        >
          About Developers
        </button></router-link
      >
      <router-link to="/aboutTherapists">
        <button>About Therapists</button></router-link
      >
      <router-link to="/aboutVala"> <button>About Vala</button></router-link>
      <router-link to="/quickSetup"> <button>Quick Setup</button></router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
.banner {
  height: calc(35vh - 75px);
  background-color: rgb(255, 255, 255);
}
.aboutPageNav {
  height: 5vh;
  align-content: center;
  text-decoration: none;
}
.aboutPage {
  height: calc(100vh - 75px);
}
</style>
