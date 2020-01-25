<template>
  <div class="FormLogin">
    <!-- <v-card>
      <div class="form-wrapper">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="userName"
            :counter="5"
            :rules="userNameRules"
            label="UserName"
            required
            type="text"
          ></v-text-field>

          <v-text-field
            v-model="password"
            :counter="6"
            :rules="passwordRules"
            label="Password"
            required
            type="password"
          ></v-text-field>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="goSignIn"
          >
            Sign In
          </v-btn>

          <v-btn color="error" class="mr-4" @click="resetForm">
            Reset Form
          </v-btn>
        </v-form>
      </div>
    </v-card> -->
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
export default {
  name: "FormLogin",
  data() {
    return {
      valid: true,
      userName: "",
      userNameRules: [
        v => !!v || "UserName is required",
        v => (v && v.length >= 5) || "UserName must be less than 5 characters"
      ],
      password: "",
      passwordRules: [
        v => !!v || "Password is required",
        v => (v && v.length > 6) || "Password minimum 6 characters"
      ]
    };
  },
  methods: {
    handleSubmit() {
      if (this.$refs.form.validate()) {
        alert(this.userName, this.password);
        this.$store.commit("USER_LOGIN", true);
      }
    },
    resetForm() {
      this.$refs.form.reset();
    }
    // resetValidation () {
    //   this.$refs.form.resetValidation()
    // },
  }
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
