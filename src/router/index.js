import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

// Pages
import Therapy from "../views/Therapy.vue";
import Buddy from "../views/Buddy.vue";
import About from "../views/About.vue";
import Chat from "../views/Chat.vue";

// Nested Components Apps

import settingsApp from "@/components/Profile/settingsApp.vue";
import healthStatusApp from "@/components/Profile/healthStatusApp.vue";
import moodApp from "@/components/Profile/moodApp.vue";

// About Nested- Components
import aboutDevelopers from "@/components/About/aboutDevelopers.vue";
import aboutTherapists from "@/components/About/aboutTherapists.vue";
import aboutVala from "@/components/About/aboutVala.vue";
import quickSetup from "@/components/About/quickSetup.vue";

// Chat Nested - Components
import chatApp from '@/components/Chat/chatApp.vue';
import chatHistory from '@/components/Chat/chatHistory.vue';

// Therapy Components 
import appointmentOverview from "@/components/Therapy/appointmentOverview.vue";
import bookAppointments from "@/components/Therapy/bookAppointments.vue";

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
        path: "/therapy",
        component: appointmentOverview,
      },
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: "/bookAppointments",
        component: bookAppointments,
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
    children: [
      {
        path: "/about",
        component: aboutDevelopers,
      },
      {
        path: "/aboutTherapists",
        component: aboutTherapists,
      },
      {
        path: "/aboutVala",
        component: aboutVala,
      },
      {
        path: "/quickSetup",
        component: quickSetup,
      },
    ],
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat,
    children: [
      {
        path: "/chat",
        component: chatApp,
      },
      {
        path: "/chatHistory",
        component: chatHistory,
      },
     
     
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
