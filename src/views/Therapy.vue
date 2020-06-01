<template>
  <div class="therapyApp">
    <div id="view">
      <router-view></router-view>
    </div>
    <div id="buttons">
      <v-btn depressed dark to="/therapy"
        >Appointment <br />
        Overview</v-btn
      >
      <v-btn depressed dark to="/bookAppointments">
        Book <br />
        Appointments</v-btn
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#view {
  height: 60vh;
}
#buttons {
  display: flex;
  padding: 0 0 0 30px;
}
</style>
