<template>
  <div class="Dashboard">
    <!-- <ApolloQuery :query="require('../graphql/allFinteches.gql')">
      <template v-slot="{ result: { loading, error, data } }">
        <div v-if="data"> -->
    <div v-for="fintech in getAllFinteches" :key="fintech._id">
      <p style="color:black;">
        {{ fintech.company_name }}
      </p>
    </div>
    <!-- </div>
      </template>
    </ApolloQuery> -->
  </div>
</template>

<script>
import gql from "graphql-tag";
import FETCH_FINTECH from "../graphql/allFinteches.gql";

export default {
  name: "Dashboard",
  data() {
    return {
      allFintech: []
    };
  },
  // methods:{
  //   fetchAllFintech(){
  //     this.$apollo
  //       .query({
  //         mutation: ADD_FINTECH,
  //         variables: {
  //           company_name: this.companyName,
  //           description: this.description,
  //           min_interest: this.minInterest,
  //           max_interest: this.maxInterest,
  //           logoURL: this.image
  //         }
  //       })
  //   }
  // },
  apollo: {
    getAllFinteches: FETCH_FINTECH
  },
  created() {
    this.getAllFinteches;
  }
};
</script>

<style scoped>
.Dashboard {
  background-color: whitesmoke;
  width: 100%;
  height: 100vh;
}
</style>
