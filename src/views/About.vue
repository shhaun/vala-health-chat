<template>
    <div class="aboutPage">
        <v-row class="ma-0">
            <v-col>
                <v-btn rounded small to="/aboutTherapists" color="indigo lighten-1">
                    About Therapists
                </v-btn>
            </v-col>
            <v-col>
                <v-btn rounded small to="/aboutVala" color="indigo lighten-1">
                    About Vala
                </v-btn>
            </v-col>
            <v-col>
                <v-btn rounded small to="/quickSetup" color="indigo lighten-1">
                    Quick Setup
                </v-btn>
            </v-col>
            <v-col>
                <v-btn rounded small to="/quickSetup" color="indigo lighten-1">
                    About Developers
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

<style lang="scss" scoped>
    .aboutPage {
        height: calc(100vh - 75px);
    }
</style>
