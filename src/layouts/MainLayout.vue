<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="menu"
          class="xs"
          @click="drawerLeft = !drawerLeft"
        />
        <q-toolbar-title class="gt-xs" style="max-width: 150px;">
          Dionys
        </q-toolbar-title>
        <q-tabs v-model="tab" align="left">
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
          class="q-ml-md gt-xs"
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

    <q-drawer v-model="drawerLeft" class="black" elevated>
      <q-input
        dark
        dense
        standout
        style="max-height:30px;"
        v-model="text"
        input-class="text-left"
        class="q-ml-md gt-xs"
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
    </q-drawer>
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
      drawerLeft: false,
      text: ""
    };
  }
};
</script>
