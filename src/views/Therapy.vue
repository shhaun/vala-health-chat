<template>
    <div class="therapyApp">
        <router-view></router-view>
            <v-row>
                <v-col>
                    <v-btn depressed to="/therapy">Appointment Overview</v-btn>
                </v-col>
                <v-col>
                    <v-btn depressed to="/bookAppointments">
                        Book Appointments
                    </v-btn>
                </v-col>
            </v-row>
    </div>
</template>

<script>
    export default {
        components: {},
    };
</script>

<style lang="scss" scoped>

</style>
