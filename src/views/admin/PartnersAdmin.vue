<template>
  <div class="PartnersAdmin">
    <v-container>
      <v-row justify="center">
        <div v-if="!allPartners">
          <Loading />
        </div>
        <div v-else>
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
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Loading from "../../components/Elements/Loading";
import PartnersModalEdit from "@/components/admin/edit/PartnersModalEdit.vue";
import PartnersModalNew from "@/components/admin/new/PartnersModalNew.vue";
import API from "@/store/API.js";

export default {
  name: "PartnersAdmin",
  components: {
    Loading,
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
      API.getData("partners").then(data => {
        this.allPartners = data;
      });
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