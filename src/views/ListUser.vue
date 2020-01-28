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
                  @click.prevent="goDetailUser(item.user_id)"
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
      // desserts: [
      //   {
      //     _id: "dsadsa21e21",
      //     name: "Frozen Yogurt",
      //     calories: 159
      //   },
      //   {
      //     _id: "dsadsa21e21",
      //     name: "Ice cream sandwich",
      //     calories: 237
      //   },
      //   {
      //     _id: "dsadsa21e21",
      //     name: "Eclair",
      //     calories: 262
      //   },
      //   {
      //     _id: "dsadsa21e21",
      //     name: "Cupcake",
      //     calories: 305
      //   },
      //   {
      //     _id: "dsadsa21e21",
      //     name: "Gingerbread",
      //     calories: 356
      //   },
      //   {
      //     _id: "dsadsa21e21",
      //     name: "Jelly bean",
      //     calories: 375
      //   },
      //   {
      //     _id: "dsadsa21e21",
      //     name: "Lollipop",
      //     calories: 392
      //   },
      //   {
      //     _id: "dsadsa21e21",
      //     name: "Honeycomb",
      //     calories: 408
      //   },
      //   {
      //     _id: "dsadsa21e21",
      //     name: "Donut",
      //     calories: 452
      //   },
      //   {
      //     _id: "dsadsa21e21",
      //     name: "KitKat",
      //     calories: 518
      //   }
      // ]
    };
  },
  methods: {
    goDetailUser(id) {
      this.$router.push(`/listuser/${id}`);
    }
  },
  apollo: {
    listUser() {
      return {
        query: FETCH_USERS,
        variables: {
          token: localStorage.getItem("token"),
          fintechID: this.fetchAdminId
        },
        update: data => {
          this.getAllUsers = data.getAllFintechApplications;
        }
      };
    }
  },
  computed: {
    fetchAdminId() {
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
