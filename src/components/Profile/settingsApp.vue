<template>
    <div class="settingsApp">
        <h2>Dark Mode</h2>
        <h2>Privacy Settings</h2>
        <h2>Display name instead of Nickname </h2>
        <h2>Contact Settings</h2>
        <h2>Themes</h2>
        <router-link to="/moodApp"> <button>moodApp</button></router-link>
        <router-link to="/healthStatusApp"> <button>healthStatusApp</button></router-link>
    </div>
</template>

<script>
    export default {
        name: 'settingsApp'
    }
</script>

<style lang="scss" scoped>

</style>