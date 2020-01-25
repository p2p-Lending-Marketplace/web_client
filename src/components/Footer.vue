<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-text class="py-2 white--text text-center">
        <div
          style="display:flex; flex-direction:row; justify-content:center; align-items:center;"
        ></div>
        {{ new Date().getFullYear() }} —
        <strong>&copy;Fintech</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>

<style></style>
