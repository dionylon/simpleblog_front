<template>
  <q-layout view="hHh Lpr lFF">
    <q-header elevated reveal>
      <q-toolbar class="tool-bar">
        <q-toolbar-title class="gt-xs" style="max-width: 150px;">
          {{ user.name }}
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
        <q-avatar rounded class="q-ml-md" @click="showUserCard = true">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
      </q-toolbar>
    </q-header>
    <q-dialog v-model="showUserCard" persistent>
      <q-card
        class="q-px-md row justify-center bg-white"
        style="width:100%; max-width: 700px;"
      >
        <q-card-section class="full-width row items-center q-pb-none">
          <div class="text-h6">{{ user.name }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <div
          class="q-pa-sm"
          style="width: 100%; max-width: 700px; height:100%;"
        >
          <q-chat-message
            :name="user.name"
            avatar="https://cdn.quasar.dev/img/avatar5.jpg"
            :text="['我们已经是朋友了，现在开始聊天吧!']"
            text-color="black"
            bg-color="amber"
          >
          </q-chat-message>
          <q-chat-message
            name="me"
            sent
            text-color="white"
            avatar="https://cdn.quasar.dev/img/avatar3.jpg"
            :text="['在吗']"
            stamp="3小时前"
            bg-color="primary"
          />
          <q-chat-message
            :name="user.name"
            :text="['刚才洗澡去了']"
            stamp="1小时前"
            avatar="https://cdn.quasar.dev/img/avatar5.jpg"
            bg-color="amber"
          />
          <q-chat-message
            :name="user.name"
            avatar="https://cdn.quasar.dev/img/avatar5.jpg"
            bg-color="amber"
            stamp="刚刚"
            :text="['不说了，我要睡觉了']"
          />
          <p class="text-grey text-center">-对方已下线-</p>
          <q-chat-message
            name="me"
            sent
            avatar="https://cdn.quasar.dev/img/avatar3.jpg"
            bg-color="primary"
          >
            <q-spinner-dots size="2rem" />
          </q-chat-message>
        </div>
      </q-card>
    </q-dialog>
    <q-footer elevated reveal class="xs">
      <q-toolbar class="tool-bar items-between">
        <q-tabs v-model="tab" align="center">
          <q-route-tab exact name="all" label="文章" :to="{ name: 'all' }" />
          <q-route-tab exact name="tags" label="标签" :to="{ name: 'tags' }" />
        </q-tabs>
        <q-space />
        <q-toolbar-title>
          {{ user.name }}
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
      text2: "",
      showUserCard: false,
      user: {
        name: "Dionys"
      }
    };
  }
};
</script>
<style scoped>
.tool-bar {
  background-image: linear-gradient(to right, #61bfad, #167c80);
}
.my-emoticon {
  vertical-align: middle;
  height: 2em;
  width: 2em;
}
</style>
