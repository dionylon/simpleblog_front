<template>
  <div>
    <q-card class="my-card bg" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="q-pt-sm">
          <router-link
            tag="a"
            class="text-h5 q-mt-sm q-mb-xs  max-line-2 title-link"
            :to="{ name: 'article', query: { id: article.id } }"
            >{{ article.title }}
          </router-link>

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
  props: ['article'],
  data() {
    return {
    };
  }
};
</script>
<style scoped>
.my-card {
  max-width: 700px;
}
.title-link {
  text-decoration: none;
  color: #111111;
}
</style>
