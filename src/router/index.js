import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

// Pages
import Therapy from "../views/Therapy.vue";
import Buddy from "../views/Buddy.vue";
import About from "../views/About.vue";
import Chat from "../views/Chat.vue";
import Appointments from "@/components/Therapists/Appointments.vue";

// Nested Components Apps
import appointmentOverview from "@/components/Therapists/bookAppointment.vue";
import bookAppointment from "@/components/Therapists/bookAppointment.vue";
import settingsApp from "@/components/Profile/settingsApp.vue";
import healthStatusApp from "@/components/Profile/healthStatusApp.vue";
import moodApp from "@/components/Profile/moodApp.vue";

// Vue-Router
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: "/settingsApp",
        components: {
          default: settingsApp,
          helper: settingsApp,
        },
      },
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: "/",
        component: healthStatusApp,
      },
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: "/moodApp",
        component: moodApp,
      },
    ],
  },
  {
    path: "/buddy",
    name: "Buddy",
    component: Buddy,
  },
  {
    path: "/therapy",
    name: "Therapy",
    component: Therapy,
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: "/",
        component: appointmentOverview,
      },
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: "/bookAppointment",
        component: bookAppointment,
      },
    ],
  },
  {
    path: "/buddy",
    name: "Buddy",
    component: Buddy,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat,
  },
  {
    path: "/appointments",
    name: "Appointments",
    component: Appointments,
  },
  {
    path: "/bookAppointment",
    name: "BookAppointment",
    component: bookAppointment,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
