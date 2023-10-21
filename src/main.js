import './style.css' 
import { createApp } from 'vue'
import App from './App.vue'
import './style.css' // => style标签或者link标签
// console.log(App)
createApp(App).mount('#app')
// ? => 转换（webpack） => 浏览器中可以运行的(?)