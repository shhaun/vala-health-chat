<template>
    <div class="chatApp">
        <router-view></router-view>
        <v-row class="ma-0 pa-0">
            <v-spacer></v-spacer>
            <v-col class="pa-1">
                <v-btn rounded small>
                    Meetings
                </v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="pa-1">
                <v-btn rounded small to="/chatHistory">
                    Chat History
                </v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="pa-1">
                <v-btn rounded small >
                    Settings
                </v-btn>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
    </div>
</template>

<script>
    export default {};
</script>

<style lang="scss" scoped>

</style>
