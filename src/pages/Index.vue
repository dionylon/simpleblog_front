<template>
  <q-page class="flex items-center column bg">
    <div>
      <intro-panel v-for="n in 10" :key="n"/>
    </div>
  </q-page>
</template>

<script>
import IntroPanel from 'components/IntroPanel.vue'
export default {
  name: "PageIndex",
  components: {
      IntroPanel
  },
  data() {
    return {
      items: [1,2,3,4,5,6,7,8,9,10],
      current: 1
    };
  },
  methods: {
    mounted() {}
  }
};
</script>
<style scoped>
</style>
