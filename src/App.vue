<template>
  <div>哈哈哈</div>
  <div class="title">{{ msg }}</div>
</template>
<script setup>
import {ref} from 'vue/dist/vue.esm-bundler.js'
const msg = ref('测试')
</script>
<style>
.title {
  color: red;
}
</style>