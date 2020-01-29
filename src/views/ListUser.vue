<template>
  <div class="ListUser">
    <v-container style="padding:30px;">
      <v-card
        class="d-flex flex-column align-center"
        style="padding-top: 2.5rem; margin-top:2rem; background-color:#f6f4e6;"
      >
        <v-card
          color="orange"
          style="width:95%; position:absolute; top:-2rem; border-radius:8px;"
        >
          <v-card-text>
            <div class="font-weight-black title">Applications</div>
          </v-card-text>
        </v-card>
        <v-data-table
          @click:row="item => goDetailUser(item)"
          :headers="headers"
          :items="items"
          hide-default-footer
          style="width:100%; background-color:#f6f4e6; "
        >
          <template slot="headerCell" slot-scope="{ header }">
            <span
              class="font-weight-light text-warning text--darken-3"
              v-text="header.text"
            />
          </template>
        </v-data-table>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import FETCH_USERS from "../graphql/getAllFintechApplications.gql";

export default {
  name: "ListUser",
  data() {
    return {
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
          id: "Test",
          name: "OK",
          amount: "Nice"
        }
      ]
    };
  },
  methods: {
    goDetailUser({ id }) {
      this.$router.push(`/listuser/${id}`);
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
            ({ data }) =>
              (this.items = data.getAllFintechApplications.map(item => {
                return {
                  id: item._id,
                  name: item.user_id ? item.user_id.name : "User name",
                  amount: item.user_id ? item.user_id.amount : 0
                };
              }))
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
          ({ data }) =>
            (this.items = data.getAllFintechApplications.map(item => {
              return {
                id: item._id,
                name: item.user_id ? item.user_id.name : "User name",
                amount: item.user_id ? item.user_id.amount : 0
              };
            }))
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
