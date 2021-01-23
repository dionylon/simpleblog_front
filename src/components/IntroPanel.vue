<template>
  <div>
    <q-card class="my-card bg" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="q-pt-sm">
          <div class="text-h5 q-mt-sm q-mb-xs  max-line-2">
            {{ article.title }}
          </div>
          <div class="text-overline">{{ article.createdTime }}</div>
          <div class="text-caption text-grey  max-line-3">
            {{ article.content }}
          </div>
        </q-card-section>
        <q-separator vertical />

        <!-- TODO: 仅限授权用户操作 -->
        <q-card-actions vertical v-if="false">
          <q-btn flat color="red">
            删除
          </q-btn>
        </q-card-actions>
        <!-- end TODO -->
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data() {
    return {
      article: {
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
.max-line-2 {
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
}
.max-line-3 {
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
}
.my-card {
  max-width: 700px;
}
</style>
