<template>
  <div class="AddFintech">
    <v-container id="container">
      <v-row justify="center" align="center">
        <v-col cols="5" class="text-center" dark style="margin-top:7%;">
          <p style="color:black;">Upload Image</p>
          <v-img
            contain
            class="image-upload mx-auto"
            height="250"
            width="250"
            :src="image"
          ></v-img>
          <v-file-input
            light
            v-model="files"
            color="deep-purple accent-4"
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
            loading
          >
            <template v-slot:selection="{ index, text }">
              <v-chip
                v-if="index < 2"
                color="deep-purple accent-4"
                dark
                label
                small
                >{{ text }}</v-chip
              >

              <span
                v-else-if="index === 2"
                class="overline grey--text text--darken-3 mx-2"
                >+{{ files.length - 2 }} File(s)</span
              >
            </template>
          </v-file-input>
        </v-col>
        <v-col cols="5">
          <p style="color:black;">Add Fintech Form</p>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              light
              label="Company Name"
              v-model="companyName"
              :rules="companyNameRules"
              clearable
              outlined
              dense
            ></v-text-field>
            <!-- <v-textarea label="Description" v-model="desc" clearable dense outlined></v-textarea>
          <v-text-field
            label="Price"
            type="Number"
            v-model="price"
            :rules="priceRules"
            placeholder="0"
            outlined
            dense
          ></v-text-field>
          <v-select v-model="size" :items="item" dense label="Size" :rules="sizeRules"></v-select>
          <v-text-field
            v-model="stock"
            :rules="stockRules"
            label="Stock"
            type="Number"
            placeholder="0"
            outlined
            dense
            class="mt-4"
          ></v-text-field> -->
            <div v-if="add">
              <v-btn color="success" @click="validate">Submit</v-btn>
              <v-btn class="ml-3" color="warning" @click="resetForm"
                >Reset Form</v-btn
              >
            </div>
            <!-- <div v-if="!add">
            <v-btn color="success" @click="editProduct">Edit</v-btn>
            <v-btn class="ml-3" color="warning" @click="resetForm">Reset Form</v-btn>
            <v-btn class="ml-3" dark color="red" @click="deleteProduct">Delete</v-btn>
          </div> -->
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import gql from "graphql-tag";
import UPLOAD_IMAGE from "../graphql/uploadImage.gql";
// import axios from "axios";

export default {
  name: "AddFintech",
  data() {
    return {
      add: true,
      valid: true,
      image: "http://www.grub.express/uploads/users/product-default.png",
      files: [],
      companyName: "",
      companyNameRules: [v => !!v || "Company Name is required"]
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
    submitForm() {
      console.log(this.name, this.file);
    },
    async fileHandle() {
      let formData = new FormData();
      formData.append("image", this.files[0]);
      const { data } = await this.$apollo.mutate({
        mutation: UPLOAD_IMAGE,
        variables: {
          file: this.files[0]
        }
      });
      this.image = data.singleUpload.imageURL;

      // axios({
      //   url: "http://localhost:3000/imageUpload",
      //   method: "POST",
      //   data: formData
      // })
      //   .then(({ data }) => {
      //     console.log(data);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });

      // this.$store
      //   .dispatch("product/uploadImage", formData)
      //   .then(({ data }) => {
      //     this.image = data.image;
      //   })
      //   .catch(err => {
      //     let text = "";
      //     err.response.data.errors.forEach(element => {
      //       text += element + ", ";
      //     });
      //     this.$snotify.warning(`${text}`, {
      //       timeout: 3000,
      //       showProgressBar: true,
      //       closeOnClick: true,
      //       pauseOnHover: true,
      //       position: "leftTop"
      //     });
      //   });
    }
  }
};
</script>

<style scoped>
.AddFintech {
  background-color: whitesmoke;
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
