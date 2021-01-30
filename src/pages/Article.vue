<template>
  <q-page class="flex items-center column bg">
    <q-card class="bg q-pa-sm" style="max-width: 700px; width:100%;">
      <q-item style="width: 100%">
        <q-item-section avatar>
          <q-skeleton type="QAvatar" v-show="loading" />
          <q-avatar rounded class="q-ml-md" v-show="!loading">
            <img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            <q-skeleton
              width="70%"
              height="70px"
              type="text"
              v-show="loading"
            />
            <div class="text-h5">{{ article.title }}</div>
          </q-item-label>
          <q-item-label caption>
            <q-skeleton
              width="50%"
              height="20px"
              type="text"
              v-show="loading"
            />
            <div class="text-body2">{{ article.createdTime }}</div>
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-skeleton height="100px" width="100%" square v-show="loading" />
      <q-item>
        <div class="content">{{ article.content }}</div>
      </q-item>
      <q-separator />
      <q-card-actions align="right" class="q-gutter-md">
        <q-skeleton type="QBtn" />
        <q-skeleton type="QBtn" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "ArticlePage",
  data() {
    return {
      loading: false,
      article: {}
    };
  },
  mounted() {
    this.loadArticle();
  },
  methods: {
    loadArticle() {
      const id = this.$route.query.id;
      this.loading = true;
      // 加载文章
      this.$axios
        .get("/api/article/" + id)
        .then(res => {
          this.article = res.data;
        })
        .catch(e => console.log(e))
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>
<style scoped>
.content {
  line-height: 1.8;
  font-size: 16px;
  font-weight: 400;
}
</style>
