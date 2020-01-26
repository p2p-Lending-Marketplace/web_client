<template>
  <div class="Dashboard">
    <ApolloQuery :query="require('../graphql/allFinteches.gql')">
      <template v-slot="{ result: { loading, error, data } }">
        <div v-if="data">
          <div v-for="fintech in data.getAllFinteches" :key="fintech._id">
            {{ fintech.company_name }}
          </div>
        </div>
      </template>
    </ApolloQuery>
    <router-view />
  </div>
</template>

<script>
// import gql from "graphql-tag";
export default {
  name: "Dashboard",
  data() {
    return {};
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
