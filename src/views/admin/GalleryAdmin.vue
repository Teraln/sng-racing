<template>
  <div class="GalleryAdmin">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <v-row class="mb-5" justify="space-between">
            <H1>Gallery</H1>

            <v-spacer></v-spacer>

            <GalleryModalNew :getGallery="getGallery" />
          </v-row>

          <v-row>
            <v-col
              cols="12"
              md="4"
              sm="6"
              xs="12"
              v-for="gallery in galleryItems"
              :key="galleryItems.indexOf(gallery)"
            >
              <v-card class="mx-auto" max-width="400">
                <v-img class="align-start" height="200px" :src="gallery.imageURL"></v-img>

                <v-card-title>{{ gallery.title }}</v-card-title>
                <v-card-actions>
                  <GalleryModalEdit :gallery="gallery" :getGallery="getGallery" />
                  <v-btn text outlined color="accent" class="mx-1" @click="deleteGallery(gallery.id)">delete</v-btn>
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
//TODO maybe add a date to the gallery element and then order them by date (later)

import GalleryModalEdit from "@/components/admin/edit/GalleryModalEdit.vue";
import GalleryModalNew from "@/components/admin/new/GalleryModalNew.vue";
import API from "@/store/API.js";

export default {
  name: "GalleryAdmin",
  components: {
    GalleryModalEdit,
    GalleryModalNew
  },
  data() {
    return {
      galleryItems: null
    };
  },
  computed: {},
  methods: {
    getGallery() {
      this.galleryItems = API.getData("gallery");
    },
    deleteGallery(id) {
      if (window.confirm("Do you really want to delete this entry?")) {
        API.deleteEntry("gallery", id);
        this.getGallery();
      }
    }
  },
  created() {
    this.getGallery();
  }
};
</script>