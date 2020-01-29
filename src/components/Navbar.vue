<template>
  <div class="Navbar">
    <!-- <v-app id="inspire"> -->
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      dark
      floating
      persistent
      mobile-break-point="991"
      width="260"
    >
      <v-list-item two-line>
        <v-list-item-avatar>
          <img
            style="width:100%; height: 100%; object-fit: cover;"
            :src="logoURL"
          />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ company_name }}</v-list-item-title>
          <v-list-item-subtitle>ADMIN</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <!-- admin -->
      <v-list dense v-if="userRole === 'admin'">
        <v-list-item v-for="item in adminItems" :key="item.text" :to="item.to">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link class="mt-5">
          <v-list-item-action>
            <v-icon color="white">mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-title
            class="white--text text--darken-1"
            @click.prevent="handleLogout"
            >Sign Out</v-list-item-title
          >
        </v-list-item>
      </v-list>
      <!-- member -->
      <v-list dense v-if="userRole === 'fintech'">
        <v-list-item v-for="item in memberItems" :key="item.text" :to="item.to">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- member -->

        <v-list-item link class="mt-5">
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-title
            class="white--text text--darken-1"
            @click.prevent="handleLogout"
            >Sign Out</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: true,
      memberItems: [
        { icon: "trending_down", text: "Current-Application", to: "/listuser" }
      ],
      adminItems: [
        {
          icon: "add",
          text: "Add-Fintech",
          to: "/fintech/add-fintech"
        },
        {
          icon: "trending_up",
          text: "Finteches",
          to: "/fintech"
        }
      ]
    };
  },
  methods: {
    handleLogout() {
      console.log("tess logout");
      localStorage.removeItem("token");
      let payload = {
        isLogin: false,
        role: ""
      };
      this.$store.commit("USER_LOGIN", payload);
      this.drawer = false;
      this.$router.push("/");
      this.$snotify.info(`Have Nice Day`, {
        timeout: 3000,
        showProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        position: "leftTop"
      });
    }
  },
  computed: {
    userLogin() {
      return this.$store.state.isLogin;
    },
    userRole() {
      return this.$store.state.role;
    },
    company_name() {
      console.log("triggered");
      console.log(this.$store.state.company_name);
      return this.$store.state.company_name;
    },
    logoURL() {
      return this.$store.state.logoURL;
    }
  }
};
</script>

<style scoped>
#logo-app:hover {
  cursor: pointer;
}
</style>
