<template>
  <v-container class="bookAppointment">
    <v-btn depressed color="primary" dark>Choose Doctor</v-btn>
    <div>
      <v-col v-for="(item, i) in items" :key="i" cols="12">
        <v-card>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline" v-text="item.title"></v-card-title>

              <v-card-subtitle v-text="item.artist"></v-card-subtitle>
            </div>

            <v-avatar class="ma-3" size="80" tile>
              <v-img :src="item.src"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </div>

    <v-btn depressed color="primary" dark>REason For Appointment</v-btn>

    <v-card class="pa-02" max-width="344" outlined light>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1"
            >Options to submit to the Doctor</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
      <v-card-text>
        ‣ Paraclinical Studies
      </v-card-text>
      <v-card-text>
        ‣ ECG and blood tests on 20.05.2020 show normal baseline values . ‣ ECG
        shows sinus rhythm frequency 96, QTc 437 ms., Normal ECG.
      </v-card-text>
    </v-card>

    <v-btn depressed color="primary" dark>Add to Journal</v-btn>
  </v-container>
</template>

<script>
export default {
  name: "bookAppointment",
  data: () => ({
    items: [
      {
        src:
          "https://i.pinimg.com/originals/18/e0/1b/18e01b4d31c8ff4c35cefc6518956edf.jpg",
        title: "Pete Trainor",
        artist: "CEO",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.bookAppointment {
  background-color: lightblue;
  height: 100vh;
}
// .space{
//   margin: 30px 0 0 0;
// }
// .space-2{
//   margin: 5px 0 5px 30px;
// }
</style>
