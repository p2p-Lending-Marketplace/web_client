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
        alert(this.userName, this.password);
        this.$store.commit("USER_LOGIN", true);
        this.$router.push("/fintech");
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
