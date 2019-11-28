<template>
  <div class="PartnersAdmin">
    <v-container>
      <v-row justify="center">
        <v-col cols="10" md="12">
          <v-row class="mb-5" justify="space-between">
            <H1>Partners</H1>

            <v-spacer></v-spacer>

            <PartnersModalNew :getPartners="getPartners" />
          </v-row>
          <v-row>
            <v-col
              v-for="partner in allPartners"
              :key="allPartners.indexOf(partner)"
              cols="12"
              md="4"
              sm="6"
              xs="12"
            >
              <v-card class="mx-auto" max-width="344">
                <v-img :src="partner.imageURL" height="200px"></v-img>

                <v-card-title>{{ partner.name }}</v-card-title>

                <v-card-actions>
                  <PartnersModalEdit :partner="partner" :getPartners="getPartners" />
                  <v-btn text outlined color="accent" @click="deletePartner(partner.id)">delete</v-btn>

                </v-card-actions>

                <v-expand-transition>
                  <div v-show="show">
                    <v-divider></v-divider>

                    <v-card-text>I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.</v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import PartnersModalEdit from "@/components/admin/edit/PartnersModalEdit.vue";
import PartnersModalNew from "@/components/admin/new/PartnersModalNew.vue";
import API from "@/store/API.js";

export default {
  name: "PartnersAdmin",
  components: {
    PartnersModalEdit,
    PartnersModalNew
  },
  data() {
    return {
      allPartners: null
    };
  },
  computed: {},
  methods: {
    getPartners() {
      this.allPartners = API.getData("partners");
    },
    deletePartner(id) {
      if (window.confirm("Do you really want to delete this entry?")) {
        API.deleteEntry("partners", id);
        this.getPartners();
      }
    }
  },
  created() {
    this.getPartners();
  }
};
</script>