<template>
  <div>
    <div id="therapyApp">
      <h1>Therapy Page</h1>
      <h3>
        Calendar App
      </h3>
    </div>

    <router-link to="/appointmentOverview"> <button>Appointment Overview</button></router-link>
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
#therapyApp {
  background-color: rgb(101, 101, 201);
  height:  100px;
}</style>
