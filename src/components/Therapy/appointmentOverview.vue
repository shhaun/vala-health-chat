<template>
    <div class="appointmentOverview">
        <calendarApp></calendarApp>
        <v-card outlined>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="headline mb-1"
                    >Appointment Overview
                    </v-list-item-title
                    >
                    <v-card-text>
                        23rd June 2020
                    </v-card-text>
                </v-list-item-content>
            </v-list-item>


            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="indigo darken-1" rounded text>Download PDF</v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
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

</style>
