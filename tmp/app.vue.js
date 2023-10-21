/**
<template><div>{{title}}</div></template>
<script>
  import {ref} from 'vue'
  export default {
    setup() {
      const title = ref('app.vue.js')
      return {
        title
      }
    }
  }
</script>
*/
import { ref } from 'vue'
const __sfc__ = {
  setup() {
    const title = ref('app.vue.js')
    return {
      title
    }
  }
}
import { toDisplayString as _toDisplayString, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", null, _toDisplayString($setup.title), 1 /* TEXT */))
}
__sfc__.render = render
__sfc__.__file = "src/App.vue"
export default __sfc__
