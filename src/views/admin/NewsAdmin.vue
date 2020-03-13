<template>
  <div class="NewsAdmin">
    <v-container>
      <v-row justify="center">
        <v-col cols="10" md="12">
          <v-row no-gutters class="mb-5" justify="space-between">
            <H1>News</H1>

            <v-spacer></v-spacer>

            <NewsModalNew :getNews="getNews" />
          </v-row>
          <v-row>
            <v-col v-for="news in allNews" :key="allNews.indexOf(news)" cols="12">
              <v-card class="mx-auto" min-width="280" outlined>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="overline">{{ `${news.day}.${news.month}.${news.year}` }}</div>
                    <v-list-item-subtitle class="">{{news.platform}}</v-list-item-subtitle>
                    <v-list-item-title class="headline mb-1 ml-3">{{ news.title }}</v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-avatar size="120" color="grey">
                    <img :src="news.imageURL" alt="Avatar" />
                  </v-list-item-avatar>
                </v-list-item>

                <v-card-actions>
                  <NewsModalEdit :news="news" :getNews="getNews" />
                  <v-btn
                    text
                    outlined
                    class="mx-1"
                    color="accent"
                    @click="deleteNews(news.id)"
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
import NewsModalEdit from "@/components/admin/edit/NewsModalEdit.vue";
import NewsModalNew from "@/components/admin/new/NewsModalNew.vue";
import API from "@/store/API.js";

export default {
  name: "NewsAdmin",
  components: {
    NewsModalEdit,
    NewsModalNew
  },
  //TODO Order news by date
  data() {
    return {
      allNews: null
    };
  },
  computed: {},
  methods: {
    getNews() {
      this.allNews = API.getData("news");
    },
    deleteNews(id) {
      if (window.confirm("Do you really want to delete this entry?")) {
        API.deleteEntry("news", id);
        this.getNews();
      }
    }
  },
  created() {
    this.getNews();
  }
};
</script>

<style lang="scss" scoped>
.overline {
  border-bottom: 1px solid $primary;
}
</style>