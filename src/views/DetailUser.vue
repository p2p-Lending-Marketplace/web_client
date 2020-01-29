<template>
  <div class="DetailUser">
    <v-container>
      <v-row justify="center" class="d-flex flex-row">
        <v-col cols="5" class="pt-0">
          <div id="detailLeft">
            <div class="detail-user">
              <a>
                <image-magnifier
                  :src="imageZoom"
                  :zoom-src="imageZoom"
                  width="400"
                  height="300"
                  zoom-width="400"
                  zoom-height="300"
                ></image-magnifier>
              </a>
            </div>
            <div
              id="small-img"
              class="mx-auto d-flex flex-row justify-space-around"
              style="width:300px;"
            >
              <div @click.prevent="imageZoom = photo_url">
                <v-img
                  alt="profile"
                  :src="photo_url"
                  max-width="100"
                  height="70"
                  class="mx-auto"
                ></v-img>
              </div>
              <div @click.prevent="imageZoom = slip_url">
                <v-img
                  alt="profile"
                  :src="slip_url"
                  max-width="100"
                  height="70"
                  class="mx-auto"
                ></v-img>
              </div>
              <div @click.prevent="imageZoom = slip_url">
                <v-img
                  alt="profile"
                  :src="slip_url"
                  max-width="100"
                  height="70"
                  class="mx-auto"
                ></v-img>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="5" class="pt-0" v-if="detailUser">
          <div id="detailRight" class="d-flex flex-column align-start ml-5">
            <h3>Name</h3>
            <span class="detail-value">{{ detailUser.user_id.name }}</span>
            <h3>email</h3>
            <span class="detail-value">{{ detailUser.user_id.email }}</span>
            <h3>phone number</h3>
            <span class="detail-value">{{
              detailUser.user_id.phone_number
            }}</span>
            <h3>address</h3>
            <span class="detail-value">{{ detailUser.user_id.address }}</span>
            <h3>current job</h3>
            <span class="detail-value">{{
              detailUser.user_id.current_job
            }}</span>
            <h3>salary</h3>
            <span class="detail-value">{{ detailUser.user_id.salary }}</span>

            <div>
              <h3>Amount</h3>
              <span class="detail-value">{{ detailUser.amount }}</span>
              <h3>Loan Term</h3>
              <span class="detail-value">{{ detailUser.loan_term }}</span>
              <h3>Objective</h3>
              <span class="detail-value">{{ detailUser.objective }}</span>
              <h3>Status</h3>
              <span class="detail-value">{{ detailUser.status }}</span>
              <h3>Decision</h3>
              <span class="detail-value">{{ detailUser.decision }}</span>
            </div>

            <button @click="dialog = true">Update Decision</button>
            <button>Back</button>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Update Decision</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row v-if="detailUser">
              <v-col cols="12">
                <v-text-field
                  label="Final Amount"
                  required
                  v-model="detailUser.amount"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Loan Term"
                  required
                  v-model="detailUser.loan_term"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="handleRejectApplication"
            >Reject Application</v-btn
          >
          <v-btn color="blue darken-1" text @click="handleAcceptApplication"
            >Accept Application</v-btn
          >
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Cancel</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import FETCH_USER from "../graphql/getOneApplication.gql";
// import FETCH_USERS from "../graphql/allUser.gql";
import UPDATE_DECISION from "../graphql/updateApplicationDecision.gql";

export default {
  name: "DetailUser",
  data() {
    return {
      detailUser: null,
      dialog: false,
      imageZoom: "https://i.ytimg.com/vi/e_bhsQyU3V4/maxresdefault.jpg",
      photo_url:
        "https://cdn.idntimes.com/content-images/duniaku/post/20200116/fakta-itachi-uchiha-0-bdbc384f4ad79e9798a65e4215b30520_600x400.png",
      slip_url:
        "https://i.pinimg.com/originals/c0/c2/42/c0c2420a0b1ead9d1530dfbd8be61f31.jpg"
    };
  },
  methods: {
    handleAcceptApplication() {
      this.$apollo
        .mutate({
          mutation: UPDATE_DECISION,
          variables: {
            token: localStorage.getItem("token"),
            id: this.$route.params.id,
            amount: this.detailUser.amount,
            loan_term: this.detailUser.loan_term,
            decision: "accepted"
          },
          update: (store, { data: { updateApplicationDecision } }) => {
            store.writeQuery({
              query: FETCH_USER,
              data: { getOneApplication: updateApplicationDecision }
            });
          }
        })
        .then(() => this.$router.push("/listuser"));
    },
    handleRejectApplication() {
      this.$apollo
        .mutate({
          mutation: UPDATE_DECISION,
          variables: {
            token: localStorage.getItem("token"),
            id: this.$route.params.id,
            decision: "rejected"
          },
          update: (store, { data: { updateApplicationDecision } }) => {
            store.writeQuery({
              query: FETCH_USER,
              data: { getOneApplication: updateApplicationDecision }
            });
          }
        })
        .then(() => this.$router.push("/listuser"));
    }
  },
  created() {
    this.$apollo
      .query({
        query: FETCH_USER,
        variables: {
          token: localStorage.getItem("token"),
          id: this.$route.params.id
        }
      })
      .then(({ data }) => {
        this.detailUser = data.getOneApplication || this.detailUser;
      });
    this.imageZoom = this.photo_url;
  },
  watch: {
    dialog(val) {
      if (val === false) {
        console.log("triggered");
        this.$apollo
          .query({
            query: FETCH_USER,
            variables: {
              token: localStorage.getItem("token"),
              id: this.$route.params.id
            }
          })
          .then(({ data }) => {
            this.detailUser = data.getOneApplication || this.detailUser;
          });
      }
    }
  }
};
</script>

<style scoped>
.DetailUser {
  background-color: white;
}
.detail-img {
  cursor: crosshair !important;
  transition: 1s;
  z-index: 2;
}

#detail-title {
  color: black;
  font-size: 28px;
  font-weight: normal;
  line-height: 28px;
  text-transform: capitalize;
}

.detail-value {
  padding-left: 2rem;
}

hr {
  border: 1px dashed black;
}
</style>
