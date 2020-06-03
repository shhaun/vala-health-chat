<template>
    <div class="therapyApp">
        <v-row class="justify-center ma-0">
            <router-view></router-view>
        </v-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        },
    };
</script>

<style lang="scss" scoped>
    .therapyApp {
        height: 75vh
    }
</style>
