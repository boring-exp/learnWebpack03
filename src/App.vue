<template>
  <div class="title">{{ title }}</div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const title = ref("app.vue.js");
    setTimeout(() => {
      title.value = "真不错";
    }, 3000);
    return {
      title,
    };
  },
};
</script>