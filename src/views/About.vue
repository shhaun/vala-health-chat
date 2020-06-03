<template>
    <div class="aboutPage">
        <v-row id="aboutPanel" class="ma-0" align-content="center" >
            <v-col class="pa-0">
                <v-btn class="ma-2"
                        rounded small v-for="(navItem, i) in navItems"
                       :key="i"
                       :to="navItem.link" >
                    {{ navItem.name }}
                </v-btn>
            </v-col>
        </v-row>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                drawer: false,
                navItems: [
                    {name: "About Vala", link: "/about"},
                    {name: "About Therapists", link: "/aboutTherapists"},
                    {name: "About Developers", link: "/aboutDevelopers"},
                ]
            };
        },
    };
</script>

<style lang="scss" scoped>
    #aboutPanel {
        height: 20vh;
        background-image: url("https://media0.giphy.com/media/xTiN0A1yDc84UV9WZa/giphy.gif?cid=ecf05e476245dbd696d701f53b48fa49f4ceebb665c523b4&rid=giphy.gif");
    }

</style>
