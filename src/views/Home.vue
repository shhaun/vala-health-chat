<template>
    <div class="homeApp">
        <div class="banner">
            <div class="avatar-banner"></div>
        </div>
        <v-row class="ma-0">
            <v-col>
                <v-btn rounded small to="/" >
                    Status
                </v-btn>
            </v-col>
            <v-col>
                <v-btn rounded small to="/settingsApp" >
                    Options
                </v-btn>
            </v-col>
        </v-row>
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
        height: 25vh;
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
        transform: translate(0rem, 15vh);
        z-index: 99;
        background-image: url(../assets/pictures/morciak.jpg);
        background-size: 100% 100%;
    }
</style>
