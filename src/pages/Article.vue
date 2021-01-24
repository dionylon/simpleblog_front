<template>
  <q-page padding class="flex items-center column bg">
    <q-card class="bg q-pa-sm" style="max-width: 700px">
      <q-item>
        <q-item-section avatar>
          <q-skeleton type="QAvatar" v-if="loading" />
          <q-avatar rounded class="q-ml-md">
            <img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            <q-skeleton type="text" v-if="loading" />
            <div class="text-h5">{{ article.title }}</div>
          </q-item-label>
          <q-item-label caption>
            <q-skeleton type="text" v-if="loading" />
            <div class="text-body2">{{ article.createdTime }}</div>
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-skeleton height="200px" square v-if="loading" />
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
      article: {
        id: 1,
        title:
          "如何看待画师乌合麒麟新作《命令与征服》？画师乌合麒麟新作《命令与画师乌合麒麟新作《命令与征服》？征服》？画师乌合麒麟新作《命令与征服》？",
        createdTime: "2020-11-1",
        content:
          "乌合麒麟这幅画乍一看不如之前的有冲击力，尤其是游戏画面对没玩过游戏的很劝退，但仔细一看就会发现，整幅画细节爆炸，涵义非常丰富。Entity callbacks provide integration points with both synchronous and reactive APIs to guarantee in-order execution at well-defined checkpoints within the processing chain, returning a potentially modified entity or an reactive wrapper type.Entity callbacks are typically separated by API type. This separation means that a synchronous API considers only synchronous entity callbacks and a reactive implementation considers only reactive entity callback"
      }
    };
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
