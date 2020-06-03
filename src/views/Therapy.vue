<template>
    <div class="therapyApp">
        <v-row id="bookingNav" class="ma-0">
            <v-col>
                <v-btn class="ma-2" rounded v-for="(navItem, i) in navItems"
                       :key="i"
                       :to="navItem.link" small>
                    <span>{{ navItem.name }}</span>
                </v-btn>
            </v-col>
        </v-row>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                drawer: false,
                navItems: [
                    {name: "Appointments", link: "/therapy"},
                    {name: "Book Appointment", link: "/bookAppointments"},
                ]
            };
        },
    };
</script>

<style lang="scss" scoped>
    #bookingNav {
        background-color: blue
    }

</style>
