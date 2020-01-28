<template>
  <v-content class="container-wrapper">
    <v-container class="fill-height">
      <v-row justify="center" align="center">
        <!-- <v-col id="content-wrapper">
          <v-img
            alt="produk-impian"
            src="https://i.ibb.co/WFfQxfs/linkedin-banner-image-1.png"
          ></v-img>
        </v-col> -->
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "Landing"
};
</script>

<style scoped>
.container-wrapper {
  background: url("https://i.ibb.co/WFfQxfs/linkedin-banner-image-1.png");
  background-size: cover;
  /* background-color: white; */
  width: 100%;
  height: 87vh;
}
</style>
