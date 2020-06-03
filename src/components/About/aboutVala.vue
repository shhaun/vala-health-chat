<template>
    <div class="aboutVala">
        <v-row class="ma-0 justify-center pa-2">
            <h2>
                About Vala
            </h2>
            <p>
                Vala is a video consulting service that enables people to have health and social care appointments from
                home
                or wherever is most convenient and comfortable.
            </p>
            <p> All you need is a device for making video calls like a smartphone and an internet connection. Vala is a
                secure form of video consulting approved
                for use by the Care Quality Commission.
            </p>
        </v-row>
        <video ref="videoRef" src="@/assets/infographics/valaHealthInfographic.mp4" id="video-container" width="80%"
               controls></video>
        <br>
        <v-row class="ma-0 justify-center">
            <v-menu
                    bottom
                    origin="center center"
                    transition="scale-transition"
            >
                <template v-slot:activator="{ on }">
                    <v-btn small
                           rounded
                           v-on="on"
                    >
                        Frequently asked Questions
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item
                            v-for="(item, i) in items"
                            :key="i"
                            on-click=""
                    >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-row>


    </div>
</template>

<script>
    export default {
        data: () => ({
            items: [
                {title: 'Do I need to always have my camera on?'},
                {title: 'Bad Internet Connection'},
                {title: 'How to reset Buddys System'},
                {title: 'Transfer settings to new Profile'},
            ],
        }),
    };
</script>

<style lang="scss" scoped>
    #video-container {
        border-radius: 25px;
    }

    .aboutVala {
        height: 72vh;
        background-color: #d4d3e0;
    }
</style>
