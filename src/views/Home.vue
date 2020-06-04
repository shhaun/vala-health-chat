<template>
    <div class="homeApp">
        <div class="banner">
            <div class="avatar-banner"></div>

        </div>

        <v-row id="optionsPanel" class="ma-0">
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
        <v-row class="justify-center ma-0">
            <div class="userName">Marie</div>
            <div class="nickName">Slayer Dragon</div>
        </v-row>
        <v-row class="justify-center ma-0">
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
        height: 25vh;
        display: flex;
        justify-content: center;
        z-index: 2;
        background-size: 100% 100%;
        background-image: url("https://media0.giphy.com/media/xTiN0A1yDc84UV9WZa/giphy.gif?cid=ecf05e476245dbd696d701f53b48fa49f4ceebb665c523b4&rid=giphy.gif");
    }

    .avatar-banner {
        width: 15vh;
        height: 15vh;
        border-radius: 50%;
        transform: translate(0rem, 15vh);
        z-index: 99;
        background-image: url("https://i.pinimg.com/564x/e3/dc/c3/e3dcc3179837a8f1696a51319ef86138.jpg");
        background-size: 100% 100%;
    }

    #optionsPanel {
        background-color: #d4d3e0;
    }
</style>
