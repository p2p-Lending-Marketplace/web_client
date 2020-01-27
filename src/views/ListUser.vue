<template>
  <div class="ListUser">
    <v-container v-if="$route.path === '/listuser'">
      <v-row>
        <v-col cols="12">
          <v-simple-table dark>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-left">JML Pinjaman</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in desserts"
                  :key="item.name"
                  @click.prevent="goDetailUser(item._id)"
                >
                  <td id="on-user">{{ item.name }}</td>
                  <td id="on-user">{{ item.calories }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
    <router-view v-if="$route.params.id" />
  </div>
</template>

<script>
export default {
  name: "ListUser",
  data() {
    return {
      desserts: [
        {
          _id: "dsadsa21e21",
          name: "Frozen Yogurt",
          calories: 159
        },
        {
          _id: "dsadsa21e21",
          name: "Ice cream sandwich",
          calories: 237
        },
        {
          _id: "dsadsa21e21",
          name: "Eclair",
          calories: 262
        },
        {
          _id: "dsadsa21e21",
          name: "Cupcake",
          calories: 305
        },
        {
          _id: "dsadsa21e21",
          name: "Gingerbread",
          calories: 356
        },
        {
          _id: "dsadsa21e21",
          name: "Jelly bean",
          calories: 375
        },
        {
          _id: "dsadsa21e21",
          name: "Lollipop",
          calories: 392
        },
        {
          _id: "dsadsa21e21",
          name: "Honeycomb",
          calories: 408
        },
        {
          _id: "dsadsa21e21",
          name: "Donut",
          calories: 452
        },
        {
          _id: "dsadsa21e21",
          name: "KitKat",
          calories: 518
        }
      ]
    };
  },
  methods: {
    goDetailUser(id) {
      this.$router.push(`/listuser/${id}`);
    }
  }
};
</script>

<style scoped>
.ListUser {
  background-color: whitesmoke;
}

#on-user {
  cursor: pointer;
}
</style>
