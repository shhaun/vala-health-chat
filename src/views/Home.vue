<template>
    <div class="homeApp">
        <div class="banner">
            <div class="avatar-banner"></div>
        </div>
        <v-row>
            <v-col>
                <v-btn rounded small to="/" color="indigo lighten-1">
                    Health Status
                </v-btn>
            </v-col>
            <v-col>
                <v-btn rounded small to="/settingsApp" color="indigo lighten-1">
                    Options
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <router-view></router-view>
        </v-row>
    </div>
</template>

<script>
    export default {
        components: {},
    };
</script>

<style lang="scss">
    .banner {
        height: 15vh;
        display: flex;
        justify-content: center;
        z-index: 2;
        background-size: 100% 100%;
        background-image: url(../assets/pictures/wallpaper.png);
    }
    .avatar-banner {
        width: 15vh;
        height: 15vh;
        border-radius: 50%;
        transform: translate(0rem, 3.2rem);
        z-index: 99;
        background-image: url(../assets/pictures/morciak.jpg);
        background-size: 100% 100%;
    }
</style>
