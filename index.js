import { createApp, ref } from 'vue/dist/vue.esm-bundler.js'

createApp({
  setup() {
    const message = ref('Hello Vue!')
    return {
      message
    }
  }
}).mount('#app')
// import IndexComp from './index.vue'