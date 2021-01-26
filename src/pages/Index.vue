<template>
  <q-page class="flex items-center column bg">
    <div>
      <intro-panel
        v-for="article in articles"
        v-bind:key="article.id"
        v-bind:article="article"
      />
    </div>
  </q-page>
</template>

<script>
import IntroPanel from "components/IntroPanel.vue";
export default {
  name: "PageIndex",
  components: {
    IntroPanel
  },
  data() {
    return {
      articles: [
        {
          id: 1,
          title: "如何写出优雅的代码",
          content:
            "冷讯劣叉颁魏挝物躺？殉提院蕊崩不尖逐熟盼默海昨修断添伊滤刚期可岗讲更帽。洼睁，劣诊奶乙埃堰授仪障平俞静霉胫栏车棕钼述男诺涤乔玩。桩武膨怠遥；弄计，忆迄加梅朵唤宜早孢盆锌呵片怠抛批退流认码界继雷腥虏荷翘。",
          createdTime: "2020-1-1"
        },
        {
          id: 2,
          title: "如何写出优雅的代码(2)",
          content:
            "冷讯劣叉颁魏挝物躺？殉提院蕊崩不尖逐熟盼默海昨修断添伊滤刚期可岗讲更帽。洼睁，劣诊奶乙埃堰授仪障平俞静霉胫栏车棕钼述男诺涤乔玩。桩武膨怠遥；弄计，忆迄加梅朵唤宜早孢盆锌呵片怠抛批退流认码界继雷腥虏荷翘。",
          createdTime: "2020-1-1"
        }
      ]
    };
  },
  methods: {
    mounted() {}
  }
};
</script>
<style scoped></style>
