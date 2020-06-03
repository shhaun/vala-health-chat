<template>
    <div class="chatApp">

        <v-row>
            <v-col>
                <v-btn rounded small to="/chat">
                    Chat
                </v-btn>
            </v-col>
            <v-col>
                <v-btn rounded small to="/chatHistory">
                    Chat History
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <router-view></router-view>
        </v-row>
    </div>
</template>

<script>
    export default {};
</script>

<style lang="scss" scoped>

</style>
