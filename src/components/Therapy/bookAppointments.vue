<template>
    <div class="bookAppointment">
        <v-btn rounded depressed color="blue" small>Choose Doctor</v-btn>

        <v-col v-for="(doctor, i) in doctors" :key="i" cols="12">
            <v-card>
                <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                        <v-card-title class="headline" v-text="doctor.name"></v-card-title>

                        <v-card-subtitle v-text="doctor.position"></v-card-subtitle>
                    </div>

                    <v-avatar class="ma-3" size="80" tile>
                        <v-img class="doctorImage" :src="doctor.image"></v-img>
                    </v-avatar>
                </div>
            </v-card>
        </v-col>
        <v-col>
            <v-card class="pa-01" max-width="344" outlined light>
                <v-list-item-content>
                    <v-list-item-title class="headline mb-1"
                    >Edit Request
                    </v-list-item-title
                    >
                </v-list-item-content>
                <v-row v-for="(data, i) in appointmentData"
                       :key="i">
                    <v-card-text>
                        {{ data.date }}
                    </v-card-text>
                    <v-card-text>
                        {{ data.text }}
                    </v-card-text>
                </v-row>
            </v-card>
        </v-col>

        <v-btn depressed rounded color="primary" small to="/buddy">Add to Journal</v-btn>
    </div>
</template>

<script>
    export default {
        name: "bookAppointment",
        data: () => ({
            doctors: [
                {
                    image:
                        "https://i.pinimg.com/originals/18/e0/1b/18e01b4d31c8ff4c35cefc6518956edf.jpg",
                    name: "Pete Trainor",
                    position: "CEO",
                },
            ],
            appointmentData: [
                {
                    date: "17th June",
                    text: "‣ ECG and blood tests on 20.05.2020 show normal baseline values .",
                },
                {
                    date: "28th June",
                    text: "‣ ECG\n" +
                        "    shows sinus rhythm frequency 96, QTc 437 ms., Normal ECG.",
                },

            ]
        }),

    }
    ;
</script>

<style lang="scss" scoped>
    .doctorImage {
        border-radius: 50%;
    }

    .bookAppointment {
        height: 80vh;
    }
</style>
