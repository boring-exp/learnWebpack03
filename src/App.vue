<template>
  <div class="title big-font-size">{{ title }}</div>
  <img :src="imageUrl"/>
</template>
<script>
import { ref } from "vue";
import imgSky from './assets/bg.png'
export default {
  setup() {
    const imageUrl = ref('/bg.png')
    const title = ref("app.vue");
    setTimeout(() => {
      title.value = "真不错";
    }, 3000);
    return {
      title,
      imgSky,
      imageUrl
    };
  },
};
</script>
<style lang="scss">
.big-font-size {
  font-size: 50px;
}
</style>