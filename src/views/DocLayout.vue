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
        <template v-for="(g, gi) in visibleGroups" :key="g.name">
          <div class="menu-category-title">{{ g.name }}</div>
          <div class="menu-block" v-for="m in g.modules" :key="m.id">
            <!-- 一级：模块（点整行展开/收起二级分类；无章节的模块点整行进入概览） -->
            <div class="menu-row" :class="{ active: isModuleActive(m) }" @click="onModuleClick(m)">
              <span class="module-link">
                <span class="side-ico" v-html="iconSvg(m.icon)"></span>{{ m.name }}
              </span>
              <span class="menu-count">{{ m.chapters.length }} 章</span>
              <span
                v-if="m.chapters.length"
                class="arrow-btn"
                :class="{ open: isExpanded(m.id) }"
                :title="isExpanded(m.id) ? '收起章节' : '展开章节'"
              ><span class="arrow">▶</span></span>
            </div>
            <!-- 二级/三级：分组 → 章节（章节带 group 字段时按分组展示，否则平铺） -->
            <div class="sub-chapters" v-if="m.chapters.length && isExpanded(m.id)">
              <template v-for="(g2, gi2) in groupsOf(m)" :key="gi2">
                <div v-if="g2.name" class="sub-group-title" @click="toggleGroup(m.id, g2.name)">
                  <span class="group-arrow" :class="{ open: isGroupExpanded(m.id, g2.name) }">▶</span>
                  <span class="group-name">{{ g2.name }}</span>
                  <span class="group-count">{{ g2.chapters.length }}</span>
                </div>
                <template v-if="!g2.name || isGroupExpanded(m.id, g2.name)">
                  <router-link
                    v-for="ch in g2.chapters"
                    :key="ch.id"
                    :to="`/doc/${m.id}/${ch.id}`"
                    class="sub-item"
                    :class="{ 'sub-sub': !!g2.name }"
                    active-class="active"
                  ><span class="sub-title">{{ ch.title }}</span><span v-if="ch.hidden" class="badge-hidden badge-hidden-sm" title="该菜单对非最高权限账户隐藏">已隐藏</span></router-link>
                </template>
              </template>
            </div>
          </div>
        </template>
      </nav>
      <div class="sidebar-footer">
        <div class="auth-line">
          <span class="auth-dot" :class="{ restricted: isRestricted }"></span>
          <span class="auth-name">{{ authState.user ? authState.user.name : '…' }}</span>
          <span v-if="isRestricted" class="auth-scope">受限视图</span>
        </div>
        <select
          v-if="authState.simulated"
          class="role-switch"
          :value="currentPresetId"
          @change="switchPreset"
          title="演示：切换可见范围（对接后台后自动隐藏）"
        >
          <option v-for="p in DEV_SCOPE_PRESETS" :key="p.id" :value="p.id">{{ p.name }}</option>
        </select>
        <div class="sys-meta">{{ systemMeta.version }} · {{ systemMeta.updatedAt }}</div>
      </div>
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
import { modules, buildModuleGroups, systemMeta, getModule, chapterGroups } from '@/docs'
import { filterModules, isRestrictedScope, DEV_SCOPE_PRESETS } from '@/docs/access'
import { authState, setSimulatedPreset } from '@/docs/auth'
import { iconSvg } from '@/docs/icons'

export default {
  name: 'DocLayout',
  data() {
    return { modules, authState, DEV_SCOPE_PRESETS, systemMeta, expanded: {}, expandedGroups: {} }
  },
  computed: {
    // 当前用户可见范围（后台注入；null=全量）
    currentScope() {
      return authState.user ? authState.user.scope : null
    },
    // 按可见范围过滤后的模块列表
    visibleModules() {
      return filterModules(modules, this.currentScope)
    },
    // 过滤后的一级分类
    visibleGroups() {
      return buildModuleGroups(this.visibleModules)
    },
    isRestricted() {
      return isRestrictedScope(this.currentScope)
    },
    // 当前演示预设 ID（用于下拉框回显）
    currentPresetId() {
      const scope = this.currentScope
      if (!scope) return 'full'
      const hit = DEV_SCOPE_PRESETS.find(p => JSON.stringify(p.scope) === JSON.stringify(scope))
      return hit ? hit.id : 'full'
    },
    // 面包屑：仅当前用户可见的模块才显示（无权访问时不展示归属）
    currentModule() {
      const m = getModule(this.$route.params.moduleId)
      if (!m) return null
      return this.visibleModules.find(vm => vm.id === m.id) || null
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
    // 切换演示预设（开发/演示用，对接后台后不显示）
    switchPreset(e) {
      setSimulatedPreset(e.target.value)
    },
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
