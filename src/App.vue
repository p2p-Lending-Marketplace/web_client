<template>
  <v-app>
    <div class="App">
      <!-- <navbar-component /> -->
      <!-- <v-content> -->
      <router-view />
      <!-- </v-content> -->
      <!-- <footer-component /> -->
      <vue-snotify></vue-snotify>
    </div>
  </v-app>
</template>

<script>
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import axios from "axios";
const baseUrl = "http://localhost:3000";

export default {
  name: "App",
  components: {
    // "navbar-component": Navbar
    // "footer-component": Footer
  },

  data: () => ({
    //
  }),
  methods: {
    fetchCurrentAdmin() {
      axios({
        method: "GET",
        url: baseUrl + `/admin`,
        headers: {
          token: localStorage.getItem("token")
        }
      })
        .then(({ data }) => {
          console.log(data, "<==");
          let payload = {
            isLogin: true,
            role: data.role,
            id: data._id
          };
          this.$store.commit("USER_LOGIN", payload);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.fetchCurrentAdmin();
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");

.App {
  font-family: "Poppins", sans-serif;
  overflow: hidden;
}
</style>
