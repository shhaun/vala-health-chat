<template>
    <div class="settingsApp">
        <v-spacer>  </v-spacer>
        <v-row class="ma-0 justify-center   ">
            <v-col>
                <v-btn rounded small>
                    Contact Settings
                </v-btn>
            </v-col>
            <v-col>
                <v-btn rounded small>
                    Privacy Settings
                </v-btn>
            </v-col>
            <v-col>
                <v-btn rounded small>
                    Themes
                </v-btn>
            </v-col>
            <v-col>
                <v-switch depressed v-model="$vuetify.theme.dark" color="blue"
                          :label="`Dark Theme: ${$vuetify.theme.dark.toString()}`"></v-switch>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "settingsApp",
        data: () => ({
            switch: false,
        }),
    };
</script>

<style lang="scss" scoped>
.settingsApp {
    justify-content: center;
    align-content: center;
    height: 50vh;
    background-color: mediumslateblue;
}
</style>
