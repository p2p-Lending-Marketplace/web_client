<template>
  <v-container style="padding:30px;">
    <v-row justify="center" class="d-flex flex-column">
      <v-col cols="10" class="pt-0">
        <div id="detailLeft">
          <div class="detail-user">
            <a>
              <image-magnifier
                :src="imageZoom"
                :zoom-src="imageZoom"
                width="500"
                height="300"
                zoom-width="400"
                zoom-height="300"
              ></image-magnifier>
            </a>
          </div>
          <div id="small-img" class="mx-auto my-5 d-flex justify-start" style="width:500px;">
            <div @click.prevent="imageZoom = photo_url">
              <v-img alt="profile" :src="photo_url" max-width="100" height="70" class="mx-auto"></v-img>
            </div>
            <div @click.prevent="imageZoom = slip_url">
              <v-img alt="profile" :src="slip_url" max-width="100" height="70" class="mx-auto"></v-img>
            </div>
            <div @click.prevent="imageZoom = slip_url">
              <v-img alt="profile" :src="slip_url" max-width="100" height="70" class="mx-auto"></v-img>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="10" class="pt-0">
        <div id="detailRight" class="d-flex flex-column align-start ml-5">
          <h3>Name</h3>
          <!-- <span class="detail-value">{{ detailUser.user_id.name }}</span>
            <span class="detail-value">itachi</span>
            <h3>email</h3>
          <!-- <span class="detail-value">{{ detailUser.user_id.email }}</span>-->
          <span class="detail-value">zzz.com</span>
          <h3>phone number</h3>
          <!-- <span class="detail-value">{{
              detailUser.user_id.phone_number
          }}</span>-->
          <span class="detail-value">081332083207</span>
          <h3>address</h3>
          <!-- <span class="detail-value">{{ detailUser.user_id.address }}</span> -->
          <span class="detail-value">jalan dwijaya 4 no 5 a</span>
          <h3>current job</h3>
          <!-- <span class="detail-value">{{
              detailUser.user_id.current_job
          }}</span>-->
          <span class="detail-value">Polisi</span>
          <h3>salary</h3>
          <!-- <span class="detail-value">{{ detailUser.user_id.salary }}</span> -->
          <span class="detail-value">RP 1.000.000</span>

          <div>
            <h3>Amount</h3>
            <!-- <span class="detail-value">{{ detailUser.amount }}</span> -->
            <span class="detail-value">2000.000</span>
            <h3>Loan Term</h3>
            <!-- <span class="detail-value">{{ detailUser.loan_term }}</span> -->
            <span class="detail-value">6 bulan</span>
            <h3>Objective</h3>
            <!-- <span class="detail-value">{{ detailUser.objective }}</span> -->
            <span class="detail-value">buat beli baju</span>
            <h3>Status</h3>
            <!-- <span class="detail-value">{{ detailUser.status }}</span> -->
            <span class="detail-value">active</span>
            <h3>Decision</h3>
            <span class="detail-value">{{ detailUser.decision }}</span>
            <span class="detail-value">active</span>
          </div>

          <button @click="dialog = true">Update Decision</button>
          <button>Back</button>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>