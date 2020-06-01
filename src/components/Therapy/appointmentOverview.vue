<template>
  <div class="appointmentOverview">
    <div id="calendar">
      <h1>CALENDAR</h1>
      <v-img
        src="https://media.mnn.com/assets/images/2018/08/CollectionOfCloudsAgainstABlueSky.jpg.653x0_q80_crop-smart.jpg"
        height="100px"
        width="100%"
      ></v-img>
    </div>
    <v-card class="pa-02" max-width="344" outlined dark>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1"
            >Appointment Overview</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
      <v-list-item-subtitle>Date</v-list-item-subtitle>
      <v-card-text>
        23rd June 2020
      </v-card-text>
      <v-card-text>
        ‣ ECG and blood tests on 20.05.2020 show normal baseline values . ‣ ECG
        shows sinus rhythm frequency 96, QTc 437 ms., Normal ECG.
      </v-card-text>

      <v-card-actions>
        <v-b tn text>Download PDF</v-b>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "appointmentOVerview",
};
</script>

<style lang="scss" scoped>
.appointmentOverview {
  height: 60vh;
  background-color: rgb(84, 166, 194);
  padding: 5px 0 0 35px;
}
#calendar {
  height: 100px;
  width: 100%;
  margin: 10px 0 100px -20px;
}
</style>
