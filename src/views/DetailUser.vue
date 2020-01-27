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
                <v-img alt="profile" :src="photo_url" max-width="100" height="70" class="mx-auto"></v-img>
              </div>
              <div @click.prevent="imageZoom = slip_url">
                <v-img alt="profile" :src="slip_url" max-width="100" height="70" class="mx-auto"></v-img>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="5" class="pt-0">
          <div id="detailRight" class="d-flex flex-column align-start ml-5">
            <div class="detail">
              <h1 id="detail-title">Name</h1>
              <br />
            </div>
            <!-- <span style="font-size:30px;">{{
              convert(detailProduct.price)
            }}</span>-->
            <span style="font-size:30px;">salary</span>
          </div>
          <hr />
          <p class="mt-5" style="font-size:15px; line-height:25px;">Description</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "DetailUser",
  data() {
    return {
      imageZoom: "https://i.ytimg.com/vi/e_bhsQyU3V4/maxresdefault.jpg",
      photo_url:
        "https://cdn.idntimes.com/content-images/duniaku/post/20200116/fakta-itachi-uchiha-0-bdbc384f4ad79e9798a65e4215b30520_600x400.png",
      slip_url:
        "https://i.pinimg.com/originals/c0/c2/42/c0c2420a0b1ead9d1530dfbd8be61f31.jpg"
    };
  },
  created() {
    this.imageZoom = this.photo_url;
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

#small-img {
  /* width: 15%; */
  /* border: 2px solid white; */
}

#detail-title {
  color: black;
  font-size: 28px;
  font-weight: normal;
  line-height: 28px;
  text-transform: capitalize;
}

hr {
  border: 1px dashed black;
}
</style>
