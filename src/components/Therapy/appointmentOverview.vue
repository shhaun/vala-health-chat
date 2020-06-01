<template>
  <div class="appointmentOverview">
    <calendarApp />
  </div>
</template>

<script>
import calendarApp from '@/components/Therapy/calendarApp.vue';
export default {
  name: "appointmentOVerview",
  components: {
    calendarApp
  }
};
</script>

<style lang="scss" scoped>
.appointmentOverview {
  height: 85vh;
  background-color: rgb(84, 166, 194);
  
}


</style>
