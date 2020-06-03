<template>
    <div class="aboutPage">
        <v-row class="ma-0" align-content="center">
            <v-col>
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

</style>
