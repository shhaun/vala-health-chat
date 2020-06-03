<template>
    <div class="chatApp">
        <v-row id="optionsPanel" class="ma-0 justify-center"
        >
            <v-img class="videoStream" height="100%" width="50%"
                   src="https://media3.giphy.com/media/ZFhhpKngh5QfcmhIDF/giphy.gif?cid=ecf05e47ba1bb3756ef6ca7b6e15495fabec8782d287c9a2&rid=giphy.gif"></v-img>

            <v-img class="videoStream" height="100% " width="50%"
                   src="https://media2.giphy.com/media/jRAjzKXS35THGGBIrw/giphy.gif?cid=ecf05e4716c399948d5fb53d1f092889d6b247549cdd0037&rid=giphy.gif"></v-img>
        </v-row>
        <v-row class="ma-0 pa-2">
            <v-spacer></v-spacer>
            <v-menu
                    bottom
                    origin="center center"
                    transition="scale-transition"
            >
                <template v-slot:activator="{ on }">
                    <v-btn small
                           rounded
                           v-on="on" color="indigo lighten-3"
                    >
                        Options
                    </v-btn>
                </template>
                <v-list class="justify-center">
                    <v-list-item v-for="(item, i) in items"
                                 :key="i"
                                 on-click="">

                        <v-btn rounded>{{ item.title }}</v-btn>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-row>
        <ul v-for="(messageItem, i) in messageItems"
            :key="i">
            <h3>
                {{ messageItem.name }}
            </h3>
            <p>{{ messageItem.text }}</p>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                components: {},
                messageItems: [
                    {
                        name: "Doctor",
                        text: "How are you feeling since we last spoke?"
                    },
                    {
                        name: "Client",
                        text: "A lot better, my general mood has improved and Buddy seems to health with healthy water intake"
                    },
                    {
                        name: "Doctor",
                        text: "Alright, splendid - Buddy has been alright too?"
                    },
                ],
                items: [
                    {title: 'Enable Camera?'},
                    {title: 'Mute Mic'},
                    {title: 'Record to Journal'},
                    {title: 'Buddy Assist'}
                ],
            };
        },
    };
</script>

<style lang="scss" scoped>
    ul {
        background-color: lightgrey;
        border-radius: 0 25px;
        margin: 2%;
        justify-content: center;
        background-color: #d4d3e0;
    }

    ul:hover {
        background-color: darkslateblue;
        color: white;
    }

    p {
        padding: 2%;
    }

</style>
