<template>
  <div class="FormLogin">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-form
              @submit.prevent="handleSubmit"
              ref="form"
              v-model="valid"
              lazy-validation
              style="background-color:whitesmoke;"
            >
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-text-field
                  light
                  v-model="userName"
                  :rules="userNameRules"
                  label="UserName"
                  required
                  type="text"
                  prepend-icon="person"
                />

                <v-text-field
                  light
                  v-model="password"
                  :rules="passwordRules"
                  label="Password"
                  required
                  type="password"
                  prepend-icon="lock"
                />
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn type="submit" color="primary">Login</v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import gql from "graphql-tag";
import LOGIN_ADMIN from "../graphql/loginAdmin.gql";

export default {
  name: "FormLogin",
  data() {
    return {
      valid: true,
      userName: "",
      userNameRules: [
        v => !!v || "UserName is required",
        v => (v && v.length >= 5) || "UserName must be higher than 5 characters"
      ],
      password: "",
      passwordRules: [
        v => !!v || "Password is required",
        v => (v && v.length >= 5) || "Password minimum 5 characters"
      ]
    };
  },
  methods: {
    handleSubmit() {
      if (this.$refs.form.validate()) {
        // alert(this.userName, this.password);
        this.$apollo
          .mutate({
            mutation: LOGIN_ADMIN,
            variables: {
              username: this.userName,
              password: this.password
            }
          })
          .then(({ data }) => {
            console.log(data);
            let dataAdmin = data.loginAdmin;
            localStorage.setItem("token", dataAdmin.token);
            let payload = {
              isLogin: true,
              role: dataAdmin.role,
              id: dataAdmin._id
            };
            this.$store.commit("USER_LOGIN", payload);
            if (dataAdmin.role === "admin") {
              this.$router.push("/fintech");
              console.log("masuk sini");
            } else {
              this.$router.push("/listuser");
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    resetForm() {
      this.$refs.form.reset();
    }
    // resetValidation () {
    //   this.$refs.form.resetValidation()
    // },
  },
  apollo: {}
};
</script>

<style scoped>
.FormLogin {
  background-color: white;
  width: 100%;
  height: 87vh;
  position: relative;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.form-wrapper {
  background-color: whitesmoke;
}

.text-input {
  color: green !important;
}
</style>
