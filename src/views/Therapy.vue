<template>
  <div class="therapyApp">
    <div >
      <h1>Therapy Page</h1>

      <h4>Logo</h4>
    </div>
    <h3>
        Calendar App
    </h3>
    <router-link to="/therapy"> <button>Appointment Overview</button></router-link>
    <router-link to="/bookAppointments">
      <button>Book Appointments</button></router-link
    >
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.therapyApp {
  height: 100vh;
}

</style>
