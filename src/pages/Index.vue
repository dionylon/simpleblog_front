<template>
  <q-page class="flex items-center column bg">
    <q-card
      v-show="loading"
      flat
      bordered
      class="bg"
      style="width:100%; max-width: 700px; margin: 0,0,auto,auto;"
    >
      <q-card-section class="q-gutter-sm" style="width: 100%">
        <q-skeleton height="50px" width="70%"></q-skeleton>
        <q-skeleton height="10px" width="40%"></q-skeleton>
      </q-card-section>
    </q-card>
    <div style="width:100%; max-width: 700px; margin: 0,0,auto,auto;">
      <intro-panel
        v-for="article in articles"
        v-bind:key="article.id"
        v-bind:article="article"
      />
    </div>
    <div class="q-pt-md">
      <q-pagination
        class="flex-center"
        v-model="currentPage"
        :max="totalPages"
        :input="true"
        :max-pages="this.size"
        @input="handlePage(currentPage)"
      >
      </q-pagination>
    </div>
  </q-page>
</template>

<script>
import IntroPanel from "components/IntroPanel.vue";
export default {
  name: "PageIndex",
  components: {
    IntroPanel
  },
  data() {
    return {
      loading: false,
      currentPage: 1,
      totalPages: 1,
      size: 10,
      articles: []
    };
  },
  mounted() {
    this.loadArticles();
  },
  methods: {
    loadArticles() {
      this.loading = true;
      this.$axios
        .get("/api/article", {
          params: {
            page: this.currentPage - 1,
            size: this.size,
            sort: "createdTime,desc"
          }
        })
        .then(res => {
          this.articles = res.data.content;
          this.totalPages = res.data.totalPages;
          console.log(res);
        })
        .catch(e => console.log(e))
        .finally(() => {
          this.loading = false;
        });
    },
    handlePage(value){
        this.articles = []
        this.loadArticles();
    }
  }
};
</script>
<style scoped></style>
