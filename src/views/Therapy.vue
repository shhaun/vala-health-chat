<template>
  <div class="therapyApp">
    <calendarApp />

    <router-view></router-view>
    <div id="buttons">
<<<<<<< Updated upstream
    <v-btn depressed to="/therapy">Abppointment Overview</v-btn>
    <v-btn depressed color="primary" dark to="/bookAppointments">
    Book Appointments</v-btn>
=======
      <v-btn depressed dark to="/therapy" id="space"
        >Appointment <br />
        Overview</v-btn
      >
      <v-btn depressed dark to="/bookAppointments">
        Book <br />
        Appointments</v-btn
      >
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
#buttons{
    margin: 110px 0 0 0;
=======
#buttons {
  display: flex;
  padding: 110px 0 0px 30px;
  width: 100%;
  height: 100px;
}
.therapyApp{
  font-family: 'Cairo', sans-serif;
  height: 100vh;
}
#view{
  height: 70vh;
}
#space{
  margin: 0 0 0px 35px;
>>>>>>> Stashed changes
}
</style>
