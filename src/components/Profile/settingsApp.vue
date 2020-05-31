<template>
  <div class="settingsApp">
    <v-btn depressed color="primary" dark>Primary</v-btn>
    <v-btn depressed color="primary" dark>Contact Settings</v-btn>
    <v-btn depressed color="primary" dark>Privacy Settings</v-btn>
    <v-btn depressed color="primary" dark>Themes</v-btn>
    <v-btn depressed color="primary" dark>Primary</v-btn>
    <v-btn depressed color="primary" dark>Dark Mode</v-btn>
  </div>
</template>

<script>
export default {
  name: "settingsApp",
};
</script>

<style lang="scss" scoped>
.settingsApp {
  height: 60vh;
  background-color: rgb(75, 99, 179);
  display: grid;
  grid-template-columns: 1fr;
}
</style>
