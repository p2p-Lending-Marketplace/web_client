<template>
  <div class="DetailUser" v-if="detailUser">
    <div class="pl-5">
      <h3>{{ detailUser.user_id.name }}</h3>
    </div>
    <v-container>
      <v-row>
        <v-col cols="4" class="d-flex flex-column align-center">
          <div>
            <img :src="detailUser.user_id.photo_url" alt="Profile photo" />
          </div>
          <hr style="width:100%; margin:3rem 0;" />
          <div id="objective" class="text-center">
            <p>
              {{ detailUser.objective }}
            </p>
          </div>
          <div class="d-flex flex-column justify-center">
            <v-btn depressed @click="dialog = true" color="green" class="my-5"
              >Update Application Decision</v-btn
            >
            <v-btn depressed="" @click="$router.go(-1)">Back</v-btn>
          </div>
        </v-col>
        <v-col cols="8">
          <div>
            <h4>Application Detail</h4>
          </div>
          <hr />
          <v-row>
            <v-col class="d-flex flex-column justify-center">
              <v-img
                src="https://image.flaticon.com/icons/svg/1034/1034146.svg"
                width="30"
                height="30"
              ></v-img>
              <p>EMAIL</p>
            </v-col>
            <v-col>
              <h4>{{ detailUser.user_id.email }}</h4>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex flex-column justify-center">
              <v-img
                src="https://image.flaticon.com/icons/svg/977/977411.svg"
                width="30"
                height="30"
              ></v-img>
              <p>PHONE NUMBER</p>
            </v-col>
            <v-col>
              <h4>{{ detailUser.user_id.phone_number }}</h4>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex flex-column justify-center">
              <v-img
                src="https://image.flaticon.com/icons/svg/1198/1198566.svg"
                width="30"
                height="30"
              ></v-img>
              <p>Address</p>
            </v-col>
            <v-col>
              <h4>{{ detailUser.user_id.address }}</h4>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex flex-column justify-center">
              <v-img
                src="https://image.flaticon.com/icons/svg/1584/1584911.svg"
                width="30"
                height="30"
              ></v-img>
              <p>Current Job</p>
            </v-col>
            <v-col>
              <h4>{{ detailUser.user_id.current_job }}</h4>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex flex-column justify-center">
              <v-img
                src="https://www.flaticon.com/premium-icon/icons/svg/781/781906.svg"
                width="30"
                height="30"
              ></v-img>
              <p>Salary</p>
            </v-col>
            <v-col>
              <h4>{{ detailUser.user_id.salary }}</h4>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex flex-column justify-center">
              <v-img
                src="https://image.flaticon.com/icons/svg/1585/1585266.svg"
                width="30"
                height="30"
              ></v-img>
              <p>No KTP</p>
            </v-col>
            <v-col>
              <h4>{{ detailUser.user_id.num_id }}</h4>
            </v-col>
          </v-row>
          <hr />
          <v-row>
            <div
              id="small-img"
              class="d-flex align-center justify-space-around text-center my-4"
              style="width:100%;"
              v-viewer
            >
              <div>
                <img :src="detailUser.user_id.id_url" alt="profile" />
                <h4>ID Photo</h4>
              </div>
              <div v-viewer>
                <img :src="detailUser.user_id.salary_slip_url" alt="profile" />
                <h4>Salary Slip</h4>
              </div>
            </div>
          </v-row>
          <hr />
          <v-row>
            <v-col class="d-flex flex-column justify-center">
              <v-img
                src="https://image.flaticon.com/icons/svg/1240/1240327.svg"
                width="30"
                height="30"
              ></v-img>
              <p>Amount</p>
            </v-col>
            <v-col>
              <h4>{{ detailUser.amount }}</h4>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex flex-column justify-center">
              <v-img
                src="https://image.flaticon.com/icons/svg/1240/1240327.svg"
                width="30"
                height="30"
              ></v-img>
              <p>Loan Term</p>
            </v-col>
            <v-col>
              <h4>{{ detailUser.loan_term }}</h4>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex flex-column justify-center">
              <v-img
                src="https://image.flaticon.com/icons/svg/1766/1766520.svg"
                width="30"
                height="30"
              ></v-img>
              <p>Decision</p>
            </v-col>
            <v-col>
              <h4>{{ detailUser.decision }}</h4>
            </v-col>
          </v-row>
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
                  v-model.number="detailUser.amount"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Loan Term"
                  required
                  v-model.number="detailUser.loan_term"
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
      dialog: false
      // imageZoom: "https://i.ytimg.com/vi/e_bhsQyU3V4/maxresdefault.jpg",
      // photo_url:
      //   "https://cdn.idntimes.com/content-images/duniaku/post/20200116/fakta-itachi-uchiha-0-bdbc384f4ad79e9798a65e4215b30520_600x400.png",
      // slip_url:
      //   "https://i.pinimg.com/originals/c0/c2/42/c0c2420a0b1ead9d1530dfbd8be61f31.jpg"
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
        .then(() => {
          this.$snotify.success(`Application Accepted`, {
            timeout: 3000,
            showProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            position: "leftTop"
          });
          this.$router.push("/listuser");
        });
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
        .then(() => {
          this.$snotify.success(`Application Rejected`, {
            timeout: 3000,
            showProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            position: "leftTop"
          });
          this.$router.push("/listuser");
        });
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
