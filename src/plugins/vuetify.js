import Vue from 'vue';
import Vuetify from 'vuetify/lib';

// Custom SVG Icons
import calendarIcon from '@/components/ui/icons/calendarIcon.vue'
import homeIcon from '@/components/ui/icons/homeIcon.vue'
import chatIcon from '@/components/ui/icons/chatIcon.vue'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
    },
    icons: {
        values: {
            home: { // name of our custom icon
                component: homeIcon, // our custom component
            },
            calendar: { // name of our custom icon
                component: calendarIcon, // our custom component
            },
            chat: { // name of our custom icon
                component: chatIcon, // our custom component
            },
        },
    },
});
