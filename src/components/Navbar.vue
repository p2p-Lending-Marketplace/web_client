<template>
  <div class="Navbar">
    <!-- <v-app id="inspire"> -->
    <v-navigation-drawer v-model="drawer" app clipped>
      <!-- admin -->
      <v-list dense v-if="userRole === 'admin'">
        <v-list-item
          v-for="item in adminItems"
          :key="item.text"
          :to="item.to"
          @click.prevent="drawer = false"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link class="mt-5">
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-title
            class="grey--text text--darken-1"
            @click.prevent="handleLogout"
            >Sign Out</v-list-item-title
          >
        </v-list-item>
      </v-list>
      <!-- member -->
      <v-list dense v-if="userRole === 'fintech'">
        <v-list-item
          v-for="item in memberItems"
          :key="item.text"
          :to="item.to"
          @click.prevent="drawer = false"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link class="mt-5">
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-title
            class="grey--text text--darken-1"
            @click.prevent="handleLogout"
            >Sign Out</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left color="blue" dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-if="userLogin" />
      <v-toolbar-title
        class="mr-12 align-center"
        @click.prevent="$router.push('/')"
        id="logo-app"
      >
        <span class="title">Fintech MarketPlace</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        v-if="!userLogin"
        depressed
        tile
        text
        @click.prevent="$router.push('/signin')"
        >Sign In</v-btn
      >
    </v-app-bar>
    <!-- </v-app> -->
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
      memberItems: [
        { icon: "trending_down", text: "Current-Application", to: "/listuser" }
        // { icon: "subscriptions", text: "Subscriptions" },
        // { icon: "history", text: "History" },
        // { icon: "featured_play_list", text: "Playlists" },
        // { icon: "watch_later", text: "Watch Later" }
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
      localStorage.removeItem("token");
      let payload = {
        isLogin: false,
        role: ""
      };
      this.$store.commit("USER_LOGIN", payload);
      this.drawer = false;
      this.$router.push("/");
    }
  },
  computed: {
    userLogin() {
      return this.$store.state.isLogin;
    },
    userRole() {
      return this.$store.state.role;
    }
  },
  created() {
    // this.$vuetify.theme. = true;
  }
};
</script>

<style scoped>
#logo-app:hover {
  cursor: pointer;
}
</style>
