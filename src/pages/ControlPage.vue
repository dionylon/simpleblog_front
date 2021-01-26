<template>
  <q-page class="q-pa-sm" style="margin:auto; max-width: 700px;">
    <q-card class="my-card" v-for="i in 5" :key="i">
      <q-card-section class="bg-white text-black">
        <div class="text-h6">{{ dummyArticle.title }}</div>
        <div class="text-subtitle2">{{ dummyArticle.createdTime }}</div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="left">
        <q-btn flat @click="handleUpdate">修改</q-btn>
        <q-btn flat color="red">删除</q-btn>
      </q-card-actions>
    </q-card>
    <div class="q-pt-md">
      <q-pagination
        class="flex-center"
        v-model="current"
        :max="5"
        :input="true"
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
      dummyArticle: {
        id: 1,
        title: "如何写出好的代码",
        content: "世上无难事，只要肯放弃",
        createdTime: "2020-1-1",
        isOpen: true
      },
      articles: []
    };
  },
  methods: {
    handleUpdate() {
      this.showArticleDialog = true;
      console.log("update");
    }
  }
};
</script>
