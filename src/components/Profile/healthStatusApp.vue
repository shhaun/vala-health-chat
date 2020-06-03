<template>
    <div class="healthStatusApp">
        <v-row id="healthStats" class="ma-0">
            <v-col class="pa-0">
                <p>Mood</p>
            </v-col>
        </v-row>
        <v-row class="ma-0 justify-center">
            <v-btn class="pa-1 ma-1" rounded small v-for="(moodItem, i) in moodItems"
                   :key="i">
                {{ moodItem.mood }}
            </v-btn>
        </v-row>
        <!-- info on the bottom with appointments -->
        <div id="upcoming-appointments"><p>HERE YOU CAN SEE YOUR UPCOMING APPOINTMENTS</p></div>
    </div>
</template>

<script>
    export default {
        name: "healthStatusApp",
        data() {
            return {
                drawer: false,
                moodItems: [
                    {mood: "Relaxed",},
                    {mood: "Content",},
                    {mood: "Productive",},
                    {mood: "Unmotivated",},
                    {mood: "Lonely",},
                    {mood: "Angry",},
                ]
            };
        },
    };
</script>

<style lang="scss" scoped>

    #stats {
        height: 35vh;
        width: 98%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }

    #upcoming-appointments {
        color: white;
        height: 10vh;
        width: 80%;
        margin-left: 10%;
        border-radius: 15px;
        box-shadow: 0 5px 5px 0 #fff;
        margin-top: 1vh;
        background: darkslateblue;
        justify-content: center;
    }
</style>
