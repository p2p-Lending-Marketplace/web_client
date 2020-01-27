<template>
  <div class="AddFintech">
    <v-container id="container">
      <v-row justify="center" align="center">
        <v-col cols="5" class="text-center" dark style="margin-top:7%;">
          <p style="color:black;">Upload Image</p>
          <v-img contain class="image-upload mx-auto" height="250" width="250" :src="image"></v-img>
          <v-file-input
            id="fileInput"
            light
            v-model="files"
            color="primary"
            counter
            label="File input"
            multiple
            placeholder="Select your files"
            prepend-icon="mdi-paperclip"
            outlined
            :show-size="1000"
            class="mt-3 input mx-auto"
            dense
            v-on:change="fileHandle"
            ref="file"
            :loading="loading"
          >
            <template v-slot:selection="{ index, text }">
              <v-chip v-if="index < 2" color="primary" dark label small>
                {{
                text
                }}
              </v-chip>

              <span
                v-else-if="index === 2"
                class="overline grey--text text--darken-3 mx-2"
              >+{{ files.length - 2 }} File(s)</span>
            </template>
          </v-file-input>
        </v-col>
        <v-col cols="5">
          <p style="color:black;">Add Fintech Form</p>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              light
              label="Username"
              v-model="username"
              :rules="usernameRules"
              clearable
              outlined
              dense
            ></v-text-field>
            <v-text-field
              light
              label="Password"
              v-model="password"
              :rules="passwordRules"
              clearable
              outlined
              dense
            ></v-text-field>
            <v-text-field
              light
              label="Company Name"
              v-model="companyName"
              :rules="companyNameRules"
              clearable
              outlined
              dense
            ></v-text-field>
            <v-textarea
              light
              label="Description"
              v-model="description"
              :rules="descriptionRules"
              clearable
              dense
              outlined
            ></v-textarea>
            <v-text-field
              light
              label="Min Interest"
              v-model.number="minInterest"
              :rules="minInterestRules"
              clearable
              outlined
              dense
            ></v-text-field>
            <v-text-field
              light
              label="Max Interest"
              v-model.number="maxInterest"
              :rules="maxInterestRules"
              clearable
              outlined
              dense
            ></v-text-field>
            <div v-if="add">
              <v-btn color="success" @click="validate">Submit</v-btn>
              <v-btn class="ml-3" color="warning" @click="resetForm">Reset Form</v-btn>
            </div>
            <div v-if="!add">
              <v-btn color="success" @click="editFintech">Edit</v-btn>
              <v-btn class="ml-3" color="warning" @click="resetForm">Reset Form</v-btn>
              <!-- <v-btn class="ml-3" dark color="red" @click="deleteProduct">Delete</v-btn> -->
            </div>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import gql from "graphql-tag";
import UPLOAD_IMAGE from "../graphql/uploadImage.gql";
import ADD_FINTECH from "../graphql/addFintech.gql";
import UPDATE_FINTECH from "../graphql/updateFintech.gql";
import FETCH_FINTECH from "../graphql/allFinteches.gql";
import ONE_FINTECH from "../graphql/oneFintech.gql";

export default {
  name: "FintechForm",
  data() {
    return {
      id: "",
      username: "",
      usernameRules: [
        v => !!v || "Username is required",
        v => (v && v.length >= 5) || "Username must be higher then 5 characters"
      ],
      password: "",
      passwordRules: [
        v => !!v || "Company Name is required",
        v => (v && v.length >= 5) || "Password must be higher then 5 characters"
      ],
      loading: false,
      add: true,
      valid: true,
      image: "http://www.grub.express/uploads/users/product-default.png",
      files: [],
      companyName: "",
      companyNameRules: [v => !!v || "Company Name is required"],
      description: "",
      descriptionRules: [v => !!v || "Description is required"],
      minInterest: 0,
      minInterestRules: [
        v => !!v || "Min Interest is required",
        v =>
          (v && v >= 0) ||
          "Min Interest cannot have negative value and must greater than 0",
        v =>
          (v && v <= 100) || "Min Interest cannot have value greater than 100"
      ],
      maxInterest: 0,
      maxInterestRules: [
        v => !!v || "Max Interest is required",
        v =>
          (v && v >= 0) ||
          "Max Interest cannot have negative value and must greater than 0",
        v =>
          (v && v <= 100) || "Max Interest cannot have value greater than 100"
      ]
    };
  },
  methods: {
    resetForm() {
      this.$refs.form.reset();
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.submitForm();
      }
    },
    editFintech() {
      this.$apollo
        .mutate({
          mutation: UPDATE_FINTECH,
          variables: {
            token: localStorage.getItem("token"),
            username: this.username,
            password: this.password,
            id: this.id,
            company_name: this.companyName,
            description: this.description,
            min_interest: this.minInterest,
            max_interest: this.maxInterest,
            logoURL: this.image
          },
          update: (store, { data: { updateFintechData } }) => {
            // Read the data from our cache for this query.
            const data = store.readQuery({ query: FETCH_FINTECH });
            // Add our tag from the mutation to the end
            const newData = data.getAllFinteches.map(fintech => {
              if (fintech._id == updateFintechData._id) {
                return updateFintechData;
              }
              return fintech;
            });
            // Write our data back to the cache.
            store.writeQuery({ query: FETCH_FINTECH, newData });
          }
        })
        .then(data => {
          this.$snotify.success(`Success Update Fintech`, {
            timeout: 3000,
            showProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            position: "leftTop"
          });
          this.$router.push("/fintech");
          this.resetForm();
        })
        .catch(err => {
          console.log(err);
          this.$snotify.warning(`${err}`, {
            timeout: 3000,
            showProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            position: "leftTop"
          });
          this.resetForm();
        });
    },
    submitForm() {
      console.log("triggering");
      console.log(this.image);
      this.$apollo
        .mutate({
          mutation: ADD_FINTECH,
          variables: {
            token: localStorage.getItem("token"),
            username: this.username,
            password: this.password,
            company_name: this.companyName,
            description: this.description,
            min_interest: this.minInterest,
            max_interest: this.maxInterest,
            logoURL: this.image
          },
          update: (store, { data: { addNewFintech } }) => {
            // Read the data from our cache for this query.
            const data = store.readQuery({ query: FETCH_FINTECH });
            // Add our tag from the mutation to the end
            data.getAllFinteches.push(addNewFintech);
            // Write our data back to the cache.
            store.writeQuery({ query: FETCH_FINTECH, data });
          }
        })
        .then(data => {
          this.$snotify.success(`Success Add New Fintech`, {
            timeout: 3000,
            showProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            position: "leftTop"
          });
          this.$router.push("/fintech");
          this.resetForm();
        })
        .catch(err => {
          console.log(err);
          this.$snotify.warning(`${err}`, {
            timeout: 3000,
            showProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            position: "leftTop"
          });
          this.resetForm();
        });
    },
    async fileHandle() {
      this.loading = true;
      let formData = new FormData();
      formData.append("image", this.files[0]);
      const { data } = await this.$apollo.mutate({
        mutation: UPLOAD_IMAGE,
        variables: {
          file: this.files[0]
        }
      });
      this.image = data.singleUpload.imageURL;
      this.loading = false;
    }
  },
  apollo: {
    fintech() {
      return {
        query: ONE_FINTECH,
        variables: {
          id: this.$route.params.id
        },
        update: data => {
          const fintech = data.getFintechById;
          this.id = fintech._id;
          this.username = fintech.username;
          this.password = fintech.password;
          this.companyName = fintech.company_name;
          this.description = fintech.description;
          this.minInterest = fintech.min_interest;
          this.maxInterest = fintech.max_interest;
          this.image = fintech.logoURL;
        },
        skip() {
          return !this.$route.params.id;
        }
      };
    },
    $skipAll() {
      return !this.$route.params.id;
    }
  },
  created() {
    if (this.$route.params.id) {
      this.add = false;
      this.id = this.$route.params.id;
    }
  }
};
</script>

<style scoped>
.AddFintech {
  background-color: white;
}
.image-upload {
  border: 1px solid #000;
}

#container {
  height: 87vh;
}

.input {
  width: 400px;
}
</style>
