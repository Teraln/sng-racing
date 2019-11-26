<template>
  <div class="GalleryAdmin">
    <v-container>
      <v-row justify="center">
        <v-col cols="6">
          <v-row class="mb-5" justify="space-between">
            <H1>Gallery</H1>

            <v-spacer></v-spacer>

            <GalleryModalNew :getGallery="getGallery" />
          </v-row>

          <v-banner
            class="text-capitalize my-3"
            v-for="gallery in galleryItems"
            :key="galleryItems.indexOf(gallery)"
            single-line
          >
            <v-avatar class="mr-5" size="100px">
              <img :src="gallery.imageURL" alt="No image" />
            </v-avatar>
            {{ gallery.title }}
            <template v-slot:actions>
              <GalleryModalEdit :gallery="gallery" :getGallery="getGallery" />
              <v-btn text outlined color="accent" @click="deleteGallery(gallery.id)">delete</v-btn>
            </template>
          </v-banner>
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