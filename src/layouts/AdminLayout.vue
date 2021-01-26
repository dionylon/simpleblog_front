<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat round dense icon="menu" @click="leftDrawer = !leftDrawer" />
        <q-toolbar-title>
          后台管理
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer
      v-model="leftDrawer"
      side="left"
      bordered
      content-class="bg-grey-2"
    >
      <q-list bordered>
        <q-item clickable v-ripple to="/">
          <q-item-section avatar>
            <q-icon color="primary" name="home" />
          </q-item-section>

          <q-item-section>
            回到首页
          </q-item-section>
        </q-item>

        <q-item
          :active="link === 'personal'"
          @click="handleLink('personal')"
          active-class="link-active"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-avatar color="purple" text-color="white" icon="D" />
          </q-item-section>

          <q-item-section>个人信息</q-item-section>
        </q-item>

        <q-item
          :active="link === 'article'"
          @click="handleLink('article')"
          active-class="link-active"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-avatar rounded color="teal" text-color="white" icon="menu" />
          </q-item-section>

          <q-item-section>文章管理</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',

  data() {
    return {
      link: "article",
      leftDrawer: false,
      filterInput: {
        title: ""
      }
    };
  },
  methods: {
    handleLink(link) {
      this.link = link;
      this.leftDrawer = false;
      switch (link) {
        case "personal":
          this.$router.push({name: "personal"});
          break;
        case "article":
          this.$router.push({name: "ArticleManage"});
          break;
      }
    }
  }
};
</script>
<style scoped>
.link-active {
  color: white;
  background: #3798f2;
}
</style>
