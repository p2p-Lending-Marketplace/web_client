<template>
  <v-app id="inspire">
    <!-- <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.text" link>
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
          <v-list-item-title class="grey--text text--darken-1"
            >Sign Out</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <!-- <v-app-bar app clipped-left color="red" dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">Logo</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn depressed tile text>Sign In</v-btn>
    </v-app-bar> -->

    <v-content class="container-wrapper">
      <v-container class="fill-height">
        <v-row justify="center" align="center">
          <v-col id="content-wrapper"> </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import FormLogin from "../components/FormLogin";

export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    items: [
      { icon: "trending_up", text: "Most Popular" },
      { icon: "subscriptions", text: "Subscriptions" },
      { icon: "history", text: "History" },
      { icon: "featured_play_list", text: "Playlists" },
      { icon: "watch_later", text: "Watch Later" }
    ]
  }),
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>

<style scoped>
.container-wrapper {
  background-color: whitesmoke;
}
</style>
