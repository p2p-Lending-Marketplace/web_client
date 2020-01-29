<template>
  <div class="ListUser">
    <div v-if="$route.path === '/listuser'" class="pl-5">
      <h3>DASHBOARD</h3>
    </div>
    <v-container v-if="$route.path === '/listuser'" style="padding:30px;">
      <v-card
        class="d-flex flex-column align-center"
        style="padding-top: 2rem; margin-top:2rem; background-color:#f6f4e6;"
      >
        <v-card color="orange" style="width:95%; position:absolute; top:-2rem; border-radius:8px;">
          <v-card-text>
            <div class="text--white">User Application</div>
          </v-card-text>
        </v-card>
        <v-data-table
          @click:row="item => goDetailUser(item)"
          :headers="headers"
          :items="items"
          hide-default-footer
          style="width:100%;background-color:#f6f4e6; "
        >
          <template slot="headerCell" slot-scope="{ header }">
            <span class="font-weight-light text-warning text--darken-3" v-text="header.text" />
          </template>
          <!-- <template slot="items" slot-scope="{ index, item }">
            <tr>
              <td>{{ index + 1 }}</td>
              <td @click.prevent="console.log('test')">{{ item.name }}</td>
              <td class="text-xs-right">
                {{ item.amount }}
              </td>
            </tr>
          </template>-->
        </v-data-table>
      </v-card>
      <v-row>
        <!-- <v-col cols="12">
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
        </v-col>-->
      </v-row>
    </v-container>
    <!-- <router-view v-if="$route.params.id" /> -->
  </div>
</template>

<script>
import FETCH_USERS from "../graphql/getAllFintechApplications.gql";

export default {
  name: "ListUser",
  data() {
    return {
      tes: "",
      getAllUsers: [],
      headers: [
        {
          sortable: false,
          text: "ID",
          value: "id"
        },
        {
          sortable: false,
          text: "Name",
          value: "name"
        },
        {
          sortable: false,
          text: "Amount",
          value: "amount",
          align: "right"
        }
      ],
      items: [
        {
          _id: "12323123123",
          name: "Dakota Rice",
          country: "Niger",
          city: "Oud-Tunrhout",
          amount: "$35,738"
        },
        {
          _id: "12323123123",
          name: "Minerva Hooper",
          country: "Curaçao",
          city: "Sinaai-Waas",
          amount: "$23,738"
        },
        {
          _id: "12323123123",
          name: "Sage Rodriguez",
          country: "Netherlands",
          city: "Overland Park",
          amount: "$56,142"
        },
        {
          _id: "12323123123",
          name: "Philip Chanley",
          country: "Korea, South",
          city: "Gloucester",
          amount: "$38,735"
        },
        {
          _id: "12323123123",
          name: "Doris Greene",
          country: "Malawi",
          city: "Feldkirchen in Kārnten",
          amount: "$63,542"
        }
      ]
    };
  },
  methods: {
    goDetailUser({ _id }) {
      this.$router.push(`/listuser/${_id}`);
    }
  },

  computed: {
    fetchAdminId() {
      return this.$store.state.id;
    }
  },
  watch: {
    fetchAdminId(val) {
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
  created() {
    if (this.fetchAdminId) {
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
