<template>
    <div class="healthStatusApp">
        <v-row id="healthStats" class="ma-0">
            <v-col class="pa-0">
                <div id="text">
                    <p>Here we will input the status update, have a button that is able to adapt depending on what the
                        users selects</p>
                </div>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="pa-0">
                <p>Mood</p>
            </v-col>
        </v-row>
        <!-- info on the bottom with appointments -->
        <div id="upcoming-appointments"><p>HERE YOU CAN SEE YOUR UPCOMING APPOINTMENTS</p></div>
    </div>
</template>

<script>
    export default {
        name: "healthStatusApp",
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
        height: 19vh;
        width: 80%;
        margin-left: 10%;
        border-radius: 25px;
        box-shadow: 0 5px 5px 0 #fff;
        margin-top: 1vh;
        background: darkslateblue;
        justify-content: center;
        padding: 50px 0 0 0;
    }
</style>
