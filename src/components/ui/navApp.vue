<template>
    <v-bottom-navigation
            v-model="bottomNav"
    >
        <v-btn value="nearby" to="/therapy" >
            <span>Therapy</span>
            <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn value="nearby" to="/chat">
            <span>Chat</span>
            <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn value="nearby" to="/">
            <span>Profile</span>
            <v-icon>mdi-map-marker</v-icon>
        </v-btn>
        <v-btn value="nearby" to="/buddy">
            <span>Buddy</span>
            <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn value="nearby" to="/About">
            <span>About</span>
            <v-icon>mdi-heart</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
    export default {
        data() {
            return {
                bottomNav: 'recent',
            }
        },
    }
</script>

