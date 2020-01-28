<template>
  <div class="ListUser">
    <v-container v-if="$route.path === '/listuser'">
      <v-row>
        <v-col cols="12">
          <v-simple-table dark>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-left">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in getAllUsers"
                  :key="item.name"
                  @click.prevent="goDetailUser(item._id)"
                >
                  <td id="on-user">{{ item._id }}</td>
                  <td id="on-user">{{ item.amount }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
    <router-view v-if="$route.params.id" />
  </div>
</template>

<script>
import FETCH_USERS from "../graphql/allUser.gql";

export default {
  name: "ListUser",
  data() {
    return {
      getAllUsers: []
    };
  },
  methods: {
    goDetailUser(id) {
      this.$router.push(`/listuser/${id}`);
    }
  },
  watch: {
    fetchAdminId(val) {
      console.log("triggered");
      if (val)
        this.$apollo
          .query({
            query: FETCH_USERS,
            variables: {
              token: localStorage.getItem("token"),
              fintechID: this.fetchAdminId
            }
          })
          .then(
            ({ data }) => (this.getAllUsers = data.getAllFintechApplications)
          );
    }
  },
  computed: {
    fetchAdminId() {
      console.log("tesss");
      return this.$store.state.id;
    }
  }
};
</script>

<style scoped>
.ListUser {
  background-color: white;
}

#on-user {
  cursor: pointer;
}
</style>
