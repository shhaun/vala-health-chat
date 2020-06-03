<template>
    <v-app id="app">
        <v-content>
            <v-container align-center class="pa-0">
                <transition name="fade" mode="out-in" appear>
                    <router-view></router-view>
                </transition>
            </v-container>
        </v-content>
        <bottomMenu/>
    </v-app>
</template>

<script>
    // @ is an alias to /src
    import bottomMenu from "@/components/ui/navApp.vue";

    export default {
        name: "app",
        components: {
            bottomMenu,
        },
    };
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        background-color: whitesmoke;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.2s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }
</style>
