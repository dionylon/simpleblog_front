<template>
  <q-layout view="hHh Lpr fFf">
    <q-header>
      <q-toolbar class="tool-bar">
        <q-toolbar-title>
          新的文章
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container class="bg">
      <q-page class="q-pa-xs" style="max-width: 700px; margin:auto;">
        <post-panel />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import PostPanel from "components/PostPanel.vue";
export default {
  // name: 'LayoutName',
  components: { PostPanel },
  data() {
    return {
      articleInput: {
        title: "",
        content: "",
        isOpen: true
      }
    };
  }
};
</script>
