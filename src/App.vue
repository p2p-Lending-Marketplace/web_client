<template>
  <v-app>
    <navbar-component />
    <v-content>
      <router-view />
    </v-content>
    <footer-component />
    <vue-snotify></vue-snotify>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    "navbar-component": Navbar,
    "footer-component": Footer
  },

  data: () => ({
    //
  })
};
</script>
