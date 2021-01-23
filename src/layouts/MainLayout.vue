<template>
  <q-layout view="hHh Lpr lFF">
    <q-header elevated reveal>
      <q-toolbar class="tool-bar">
        <q-toolbar-title class="gt-xs" style="max-width: 150px;">
          Dionys
        </q-toolbar-title>
        <q-tabs v-model="tab" class="gt-xs" align="left">
          <q-route-tab exact name="all" label="文章" :to="{ name: 'all' }" />
          <q-route-tab exact name="tags" label="标签" :to="{ name: 'tags' }" />
        </q-tabs>
        <q-space />
        <q-input
          dark
          dense
          standout
          v-model="text"
          input-class="text-left"
          class="q-ml-md"
        >
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" />
            <q-icon
              v-else
              name="clear"
              class="cursor-pointer"
              @click="text = ''"
            />
          </template>
        </q-input>
        <q-avatar rounded class="q-ml-md">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
      </q-toolbar>
    </q-header>

    <q-footer elevated reveal class="xs">
      <q-toolbar class="tool-bar items-between">
        <q-tabs v-model="tab" align="center">
          <q-route-tab exact name="all" label="文章" :to="{ name: 'all' }" />
          <q-route-tab exact name="tags" label="标签" :to="{ name: 'tags' }" />
        </q-tabs>
        <q-space />
        <q-toolbar-title>
          Dionys
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {
      tab: "all",
      text: "",
      text2: ""
    };
  }
};
</script>
<style scoped>
.tool-bar {
  background-image: linear-gradient(to right, #61bfad, #167c80);
}
</style>
