<template>
    <div class="chatApp">
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
                drawer: false,
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
                    {
                        name: "Client",
                        text: "Yeah! If it wasn't for him, I would of totally have forgot we had an appointment today :D"
                    },
                    {
                        name: "Doctor",
                        text: "It happens to the best of us. Do you want to save this Session Progress as Progressive?"
                    },
                    {
                        name: "Client",
                        text: "Yeah sure! Hold on, I'm going to ask Buddy to do so for me"
                    },
                ]
            };
        },
    };
</script>

<style lang="scss" scoped>
    .chatApp {
        height: 50vh;
    }

</style>
