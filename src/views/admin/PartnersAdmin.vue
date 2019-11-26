<template>
  <div class="PartnersAdmin">
    <v-container>
      <v-row justify="center">
        <v-col cols="8">
          <v-row class="mb-5" justify="space-between">
            <H1>Partners</H1>

            <v-spacer></v-spacer>

            <PartnersModalNew :getPartners="getPartners" />
          </v-row>

          <v-banner
            class="text-capitalize my-1"
            v-for="partner in allPartners"
            :key="allPartners.indexOf(partner)"
            single-line
          >
            <v-avatar class="mr-5 my-2" size="100px">
              <img :src="partner.imageURL" alt="No image" />
            </v-avatar>
            {{ partner.name }}
            <template v-slot:actions>
              <PartnersModalEdit :partner="partner" :getPartners="getPartners" />
              <v-btn text outlined color="accent" @click="deletePartner(partner.id)">delete</v-btn>
            </template>
          </v-banner>
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