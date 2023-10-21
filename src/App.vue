<template>
  <div class="title big-font-size">{{ title }}</div>
  <div>test1234567890</div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const title = ref("app.vue");
    setTimeout(() => {
      title.value = "真不错";
    }, 3000);
    return {
      title,
    };
  },
};
</script>
<style lang="scss">
.big-font-size {
  font-size: 50px;
}
</style>