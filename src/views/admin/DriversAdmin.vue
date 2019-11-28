<template>
  <div class="DriversAdmin">
    <v-container>
      <v-row justify="center">
        <v-col cols="10" md="12">
          <v-row no-gutters class="mb-5" justify="space-between">
            <H1>Drivers</H1>

            <v-spacer></v-spacer>

            <DriversModalNew :getDrivers="getDrivers" />
          </v-row>
          <v-row>
            <v-col
              v-for="driver in allDrivers"
              :key="allDrivers.indexOf(driver)"
              cols="12"
              md="4"
              sm="6"
              xs="12"
            >
              <v-card class="mx-auto" max-width="344" min-width="280" outlined>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="overline mb-4">{{ driver.role }}</div>
                    <v-list-item-title
                      class="headline mb-1"
                    >{{ `${driver.name} ${driver.lastname}` }}</v-list-item-title>
                    <v-list-item-subtitle>{{ driver.series }}</v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-avatar tile size="80" color="grey">
                    <img :src="driver.imageURL" alt="Avatar" />
                  </v-list-item-avatar>
                </v-list-item>

                <v-card-actions>
                  <DriversModalEdit :driver="driver" :getDrivers="getDrivers" />
                  <v-btn
                    text
                    outlined
                    class="mx-1"
                    color="accent"
                    @click="deleteDriver(driver.id)"
                  >delete</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import DriversModalEdit from "@/components/admin/edit/DriversModalEdit.vue";
import DriversModalNew from "@/components/admin/new/DriversModalNew.vue";
import API from "@/store/API.js";

export default {
  name: "DriversAdmin",
  components: {
    DriversModalEdit,
    DriversModalNew
  },
  data() {
    return {
      allDrivers: null
    };
  },
  computed: {},
  methods: {
    getDrivers() {
      this.allDrivers = API.getData("drivers");
    },
    deleteDriver(id) {
      if (window.confirm("Do you really want to delete this entry?")) {
        API.deleteEntry("drivers", id);
        this.getDrivers();
      }
    }
  },
  created() {
    this.getDrivers();
  }
};
</script>