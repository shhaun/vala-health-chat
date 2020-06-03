<template>
    <div class="aboutDevelopers">
        <v-col class="pa-2" v-for="(developer, i) in developers" :key="i">
            <v-card elevation="8" shaped>
                <v-row class="ma-0 justify-center">
                    <v-col class="pa-0">
                        <h3>
                            {{ developer.name }}
                        </h3>
                        <p>
                            {{ developer.role}}
                        </p>
                        <v-card-text class="pa-0" v-text="developer.motto"></v-card-text>
                    </v-col>
                    <v-col class="pa-0 ma-2 justify-center">
                        <v-avatar size="10vh" tile>
                            <v-img class="developerImage" :src="developer.image"></v-img>
                        </v-avatar>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>

    </div>
</template>

<script>
    export default {
        name: "aboutDevelopers",
        data: () => ({
            developers: [
                {
                    image:
                        "https://img.bleacherreport.net/img/images/photos/003/870/342/hi-res-9938415a1ceed4a90bd3c07f03a9bfde_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top",
                    name: "Daniel B",
                    role: "Animator / Illustrator",
                    motto: "Life only happens once"
                },
                {
                    image:
                        "https://i.insider.com/5e78f1961378e37d3200ff19?width=1136&format=jpeg",
                    name: "Oliwia",
                    role: "UX / UI",
                    motto: "Sun and Moon vibes"
                },
                {
                    image:
                        "https://i.ytimg.com/vi/oBBvUHubaYU/maxresdefault.jpg",
                    name: "Adi Tudor",
                    role: "Programming",
                    motto: "Unleash your inner soul"
                },
                {
                    image:
                        "https://www.sciencenews.org/wp-content/uploads/2019/01/013019_JR_panda-diet_feat.jpg",
                    name: "Penda S",
                    role: "Chilling",
                    motto: "Behind the scenes creating scenes"
                },
            ],
        }),
    }
    ;
</script>

<style lang="scss" scoped>
    .aboutDevelopers {
        color: white;
        background-color: #d4d3e0;
        height: 72vh;
    }

    .developerImage {
        border-radius: 50%;
    }
</style>
