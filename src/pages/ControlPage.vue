<template>
  <q-page class="q-pa-sm" style="margin:auto; max-width: 700px;">
    <q-card class="my-card" v-for="article in articles" :key="article.id">
      <q-card-section class="bg-white text-black">
        <div class="text-h6">{{ article.title }}</div>
        <div class="text-subtitle2">{{ article.createdTime }}</div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="left">
        <q-btn flat @click="handleUpdate(article)">修改</q-btn>
        <q-btn flat color="red">删除</q-btn>
      </q-card-actions>
    </q-card>
    <div class="q-pt-md">
      <q-pagination
        class="flex-center"
        v-model="currentPage"
        :max="totalPages"
        :max-pages="this.size"
        :input="true"
        @input="handlePage()"
      >
      </q-pagination>
    </div>
    <!-- 在dialog中进行修改 -->
    <q-dialog v-model="showArticleDialog">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">修改文章</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <post-panel :article="dummyArticle" />
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import PostPanel from "src/components/PostPanel.vue";
export default {
  components: {
    PostPanel
  },
  data() {
    return {
      current: 1,
      showArticleDialog: false,
      dummyArticle: {},
      currentPage: 1,
      size: 10,
      totalPages: 2,
      articles: []
    };
  },
  mounted() {
    this.loadingArticles();
  },
  methods: {
    loadingArticles() {
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
        .finally((this.loading = false));
    },
    handleUpdate(article) {
      this.showArticleDialog = true;
      this.dummyArticle = article;
    },
    handlePage() {
      this.loadingArticles();
    }
  }
};
</script>
