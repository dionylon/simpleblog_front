<template>
  <q-card class="bg" flat bordered style="max-width: 700px; width: 100%;">
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
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  // name: 'ComponentName',
  props: ["article"],
  data() {
    return {};
  }
};
</script>
<style scoped>
.title-link {
  width: 100%;
  text-decoration: none;
  color: #111111;
}
</style>
