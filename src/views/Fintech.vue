<template>
  <div class="Dashboard">
    <!-- <ApolloQuery :query="require('../graphql/allFinteches.gql')">
      <template v-slot="{ result: { loading, error, data } }">
    <div v-if="data">-->
    <div v-if="$route.path === '/fintech'" class="pl-5">
      <h2>DASHBOARD</h2>
    </div>
    <div
      v-if="$route.path === '/fintech/add-fintech' || $route.params.id"
      class="pl-5"
    >
      <h2>FORM FINTECH</h2>
    </div>
    <v-container
      style="padding-top:5%;"
      class="d-flex flex-wrap justify-center"
      v-if="$route.path === '/fintech'"
    >
      <!-- <v-row justify="space-around"> -->
      <v-card
        dark
        color="grey darken-2"
        class="my-2 mx-3"
        width="300"
        outlined
        v-for="fintech in getAllFinteches"
        :key="fintech._id"
        elevation="12"
        id="card-fintech"
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">Fintech</div>
            <v-list-item-title class="headline mb-1">
              {{ fintech.company_name }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ fintech.description }}
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey">
            <v-img :src="fintech.logoURL"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn text @click.prevent="goFormUpdate(fintech._id)">Edit</v-btn>
        </v-card-actions>
      </v-card>
      <!-- </v-row> -->
    </v-container>
    <!-- </div>
      </template>
    </ApolloQuery>-->
    <router-view v-if="$route.path !== '/fintech'" />
  </div>
</template>

<script>
// import gql from "graphql-tag";
import FETCH_FINTECH from "../graphql/allFinteches.gql";
// import Drawer from "../components/Drawer";

export default {
  name: "Fintech",
  components: {
    // Drawer
  },
  data() {
    return {
      allFintech: []
    };
  },
  methods: {
    goFormUpdate(id) {
      this.$router.push(`/fintech/${id}`);
    }
  },
  apollo: {
    getAllFinteches: FETCH_FINTECH
  },
  created() {
    this.getAllFinteches;
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");

.Dashboard {
  /* font-family: "Poppins", sans-serif; */
  background-color: white;
  width: 100%;
  height: auto;
  padding: 10px;
}

#card-fintech {
  transition: 0.5s;
}

#card-fintech:hover {
  transform: scale(1.1);
  cursor: pointer;
}
</style>
