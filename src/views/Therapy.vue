<template>
  <div class="therapyApp">
    <calendarApp />

    <router-view></router-view>
    <div id="buttons">
    <v-btn depressed to="/therapy">Abppointment Overview</v-btn>
    <v-btn depressed color="primary" dark to="/bookAppointments">
    Book Appointments</v-btn>
    </div>
  </div>
</template>

<script>
import calendarApp from "@/components/Therapy/calendarApp.vue";

export default {
  components: {
    calendarApp,
  },
};
</script>

<style lang="scss" scoped>
#buttons{
    margin: 110px 0 0 0;
}
</style>
