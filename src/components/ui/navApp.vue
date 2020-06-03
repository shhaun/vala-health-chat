<template>
    <v-bottom-navigation
            color="indigo lighten-1"
            shift

    >
        <v-btn v-for="(navItem, i) in navItems"
               :key="i"
               :to="navItem.link">
            <span>{{ navItem.name }}</span>
            <br>
            <v-icon>{{ navItem.icon }}</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
    export default {
        data() {
            return {
                drawer: false,
                navItems: [
                    {name: "Therapy", link: "/therapy", icon: "$calendar"},
                    {name: "Chat", link: "/chat", icon: "$chat"},
                    {name: "Home", link: "/", icon: "$home"},
                    {name: "Buddy", link: "/buddy", icon: "$chat"},
                    {name: "About", link: "/About", icon: "$calendar"},
                ]
            };
        },
    }
</script>

