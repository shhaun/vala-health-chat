<template>
    <div class="appointmentOverview">

        <calendarApp></calendarApp>
        <v-row class="ma-0 justify-center">
            <v-card outlined>

                <v-list-item class="pa-0">
                    <v-list-item-content class="pa-0">
                        <v-list-item-title class="headline mb-1"
                        >Appointment Overview
                        </v-list-item-title
                        >
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn small rounded>More Details</v-btn>
                        </v-card-actions>
                        <v-card-text class="pa-0">
                            <h3>Time | Date</h3>
                            <p>15:30 | Monday, 15th August 2020</p>
                        </v-card-text>
                        <v-card-text class="pa-0">
                            <h3>Meeting Duration</h3>
                            <p>1 hour 6 minutes</p>
                        </v-card-text>
                        <v-card-text class="pa-0">
                            <h3>Therapist</h3>
                            <p>Sarah Conner</p>
                        </v-card-text>
                    </v-list-item-content>
                </v-list-item>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="indigo darken-1" rounded text>Download PDF</v-btn>
                </v-card-actions>
            </v-card>
        </v-row>

        <v-row class="ma-0 justify-center">
            <v-btn to="/bookAppointments" small rounded >Book Appointment</v-btn>
        </v-row>
    </div>
</template>

<script>
    import calendarApp from "@/components/Therapy/calendarApp.vue";

    export default {
        name: "appointmentOverview",
        components: {
            calendarApp
        },
    };
</script>

<style lang="scss" scoped>
    .appointmentOverview {
        color: white;
        background-color: rgb(84, 84, 204);
    }

</style>
