import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'DocHome',
    component: () => import('@/views/DocHome.vue'),
    meta: { title: '工作台' }
  },
  {
    path: '/doc/:moduleId',
    name: 'DocModule',
    component: () => import('@/views/DocModule.vue'),
    meta: { title: '模块概览' }
  },
  {
    path: '/doc/:moduleId/:chapterId',
    name: 'DocChapter',
    component: () => import('@/views/DocChapter.vue'),
    meta: { title: '章节详情' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

// hash 路由：构建产物可部署到任意子路径或嵌入后台 iframe，无需服务器改写配置
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.afterEach(to => {
  document.title = to.name === 'DocChapter'
    ? '章节详情 · 七七生活后台操作文档'
    : '七七生活后台操作文档'
})

export default router
