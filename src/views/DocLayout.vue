<template>
  <div class="app-wrapper">
    <!-- 左侧：全量模块分类（模块 → 章节 两级，可折叠） -->
    <aside class="sidebar">
      <div class="brand">
        <span class="logo-icon">七</span>
        <div class="brand-text">
          <span class="brand-name">七七生活</span>
          <span class="brand-sub">后台操作文档</span>
        </div>
      </div>
      <nav class="menu">
        <router-link to="/" class="side-item" active-class="active" exact>
          <span class="side-ico" v-html="iconSvg('home')"></span>工作台
        </router-link>
        <div class="menu-group-title">
          <span>模块分类</span>
          <span class="menu-group-actions">
            <a @click="expandAll">展开</a>
            <a @click="collapseAll">收起</a>
          </span>
        </div>
        <div class="menu-block" v-for="m in modules" :key="m.id">
          <!-- 一级：模块（点整行展开/收起二级分类；无章节的模块点整行进入概览） -->
          <div class="menu-row" :class="{ active: isModuleActive(m) }" @click="onModuleClick(m)">
            <span class="module-link">
              <span class="side-ico" v-html="iconSvg(m.icon)"></span>{{ m.name }}
            </span>
            <span v-if="m.status === 'planned'" class="badge-planned">待完善</span>
            <span v-else-if="m.status === 'reference'" class="badge-reference">参考</span>
            <span v-else class="menu-count">{{ m.chapters.length }} 章</span>
            <span
              v-if="m.chapters.length"
              class="arrow-btn"
              :class="{ open: isExpanded(m.id) }"
              :title="isExpanded(m.id) ? '收起章节' : '展开章节'"
            ><span class="arrow">▶</span></span>
          </div>
          <!-- 二级/三级：分组 → 章节（章节带 group 字段时按分组展示，否则平铺） -->
          <div class="sub-chapters" v-if="m.chapters.length && isExpanded(m.id)">
            <template v-for="(g, gi) in groupsOf(m)" :key="gi">
              <div v-if="g.name" class="sub-group-title" @click="toggleGroup(m.id, g.name)">
                <span class="group-arrow" :class="{ open: isGroupExpanded(m.id, g.name) }">▶</span>
                <span class="group-name">{{ g.name }}</span>
                <span class="group-count">{{ g.chapters.length }}</span>
              </div>
              <template v-if="!g.name || isGroupExpanded(m.id, g.name)">
                <router-link
                  v-for="ch in g.chapters"
                  :key="ch.id"
                  :to="`/doc/${m.id}/${ch.id}`"
                  class="sub-item"
                  :class="{ 'sub-sub': !!g.name }"
                  active-class="active"
                >{{ ch.title }}</router-link>
              </template>
            </template>
          </div>
        </div>
      </nav>
      <div class="sidebar-footer">{{ systemMeta.version }} · {{ systemMeta.updatedAt }}</div>
    </aside>

    <!-- 右侧：内容区 -->
    <div class="content-box">
      <div class="page-head">
        <div class="breadcrumb">
          <router-link to="/" class="crumb-item">工作台</router-link>
          <template v-if="currentModule">
            <span class="crumb-sep">/</span>
            <router-link :to="`/doc/${currentModule.id}`" class="crumb-item crumb-link">{{ currentModule.name }}</router-link>
          </template>
          <template v-if="currentChapter">
            <span class="crumb-sep">/</span>
            <span class="crumb-item current">{{ currentChapter.title }}</span>
          </template>
        </div>
      </div>
      <main class="content">
        <slot />
      </main>
    </div>
  </div>
</template>

<script>
import { modules, systemMeta, getModule, chapterGroups } from '@/docs'
import { iconSvg } from '@/docs/icons'

export default {
  name: 'DocLayout',
  data() {
    return { modules, systemMeta, expanded: {}, expandedGroups: {} }
  },
  computed: {
    currentModule() {
      return getModule(this.$route.params.moduleId)
    },
    currentChapter() {
      const m = this.currentModule
      if (!m) return null
      return m.chapters.find(c => c.id === this.$route.params.chapterId) || null
    }
  },
  watch: {
    $route() {
      this.syncExpand()
    }
  },
  mounted() {
    this.syncExpand()
  },
  methods: {
    iconSvg,
    isExpanded(id) {
      return !!this.expanded[id]
    },
    toggle(id) {
      this.expanded[id] = !this.expanded[id]
    },
    // 三级导航：模块的分组列表（章节带 group 字段时生效）
    groupsOf(m) {
      return chapterGroups(m)
    },
    isGroupExpanded(moduleId, groupName) {
      return this.expandedGroups[moduleId + '::' + groupName] !== false
    },
    toggleGroup(moduleId, groupName) {
      const key = moduleId + '::' + groupName
      this.expandedGroups[key] = !(this.expandedGroups[key] !== false)
    },
    expandAll() {
      this.modules.forEach(m => {
        if (m.chapters.length) this.expanded[m.id] = true
      })
    },
    collapseAll() {
      this.modules.forEach(m => {
        this.expanded[m.id] = false
      })
    },
    isModuleActive(m) {
      return this.$route.params.moduleId === m.id
    },
    // 一级分类点击：有章节 → 展开/收起；无章节（待完善）→ 进入模块概览
    onModuleClick(m) {
      if (m.chapters.length) {
        this.toggle(m.id)
      } else {
        this.$router.push(`/doc/${m.id}`)
      }
    },
    // 当前所在模块自动展开，方便定位；所在章节所属分组同步展开
    syncExpand() {
      const id = this.$route.params.moduleId
      if (id) {
        this.expanded[id] = true
        const m = getModule(id)
        if (m) {
          const ch = m.chapters.find(c => c.id === this.$route.params.chapterId)
          if (ch && ch.group) {
            this.expandedGroups[id + '::' + ch.group] = true
          }
        }
      }
    }
  }
}
</script>
