<template>
    <div class="chatApp">
            <v-row class="ma-0 align-center">
                <v-col>
                    <v-img height="10vh" src="https://i.insider.com/5e78f1961378e37d3200ff19?width=1136&format=jpeg"></v-img>
                </v-col>
                <v-col>
                    <v-img height="10vh" src="https://i.insider.com/5e78f1961378e37d3200ff19?width=1136&format=jpeg"></v-img>
                </v-col>

            </v-row>
            <v-row v-for="(messageItem, i) in messageItems"
                   :key="i">
                <v-col>
                    <h4>{{ messageItem.name }}</h4>
                </v-col>
                <v-col>
                    <p>{{ messageItem.text }}</p>
                </v-col>
            </v-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                components: {},
                messageItems: [
                    {
                        name: "Doctor",
                        text: "How are you feeling since we last spoke?"
                    },
                    {
                        name: "Client",
                        text: "A lot better, my general mood has improved and Buddy seems to health with healthy water intake"
                    },
                    {
                        name: "Doctor",
                        text: "Alright, splendid - Buddy has been alright too?"
                    },
                ]
            };
        },
    };
</script>

<style lang="scss" scoped>
.chatApp {
    height: calc(85vh - 75px);
}

</style>
