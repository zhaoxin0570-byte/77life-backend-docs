import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initAuth } from './docs/auth'
import './assets/global.css'

// 先解析当前登录用户（后台注入 / 后台接口 / 本地模拟），再挂载应用
// 避免受限账户短暂看到全量内容；后台接口超时 2 秒后按模拟模式兜底
const bootstrap = async () => {
  await Promise.race([
    initAuth(),
    new Promise(resolve => setTimeout(resolve, 2000))
  ])
  createApp(App).use(router).mount('#app')
}

bootstrap()
