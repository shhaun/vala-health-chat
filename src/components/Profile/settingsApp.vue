<template>
    <div class="settingsApp">
        <h2>Display name instead of Nickname </h2>
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
        name: 'settingsApp'
    }
</script>

<style lang="scss" scoped>
.settingsApp {
    height: 450px;
    background-color: rgb(75, 99, 179);
}

</style>