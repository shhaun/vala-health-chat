<template>
  <div class="therapyApp">
    <calendarApp />
    <v-btn depressed color="primary" dark to="/therapy">Abppointment Overview</v-btn>
    <v-btn depressed color="primary" dark to="/bookAppointments">Book Appointments</v-btn>
    <router-view></router-view>
  </div>
</template>

<script>
import calendarApp from '@/components/Therapy/calendarApp.vue';

export default {
    components: {
      calendarApp
    },
};
</script>

<style lang="scss" scoped>

</style>
