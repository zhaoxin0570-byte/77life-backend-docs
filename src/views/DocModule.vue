<template>
  <div class="doc-module">
    <div v-if="module">
      <!-- 模块头部 -->
      <header class="chapter-header">
        <h1 class="chapter-title">
          {{ module.name }}
          <span v-if="module.status === 'planned'" class="badge-planned">待完善</span>
          <span v-else-if="module.status === 'reference'" class="badge-reference">参考资料</span>
        </h1>
        <p class="chapter-summary">{{ module.summary }}</p>
      </header>

      <!-- 章节列表（章节带 group 字段时按分组展示） -->
      <section class="panel" v-if="module.chapters.length">
        <h2 class="panel-title">章节目录</h2>
        <div class="chapter-rows">
          <template v-for="(g, gi) in groupsOf(module)" :key="gi">
            <div v-if="g.name" class="chapter-group-title">
              <span class="cg-name">{{ g.name }}</span>
              <span class="cg-count">{{ g.chapters.length }} 节</span>
            </div>
            <router-link
              v-for="ch in g.chapters"
              :key="ch.id"
              :to="`/doc/${module.id}/${ch.id}`"
              class="chapter-row"
              :class="{ 'chapter-row-sub': !!g.name }"
            >
              <span class="row-no">{{ chapterNo(ch) }}</span>
              <span class="row-body">
                <span class="row-title">{{ ch.title }}<span v-if="ch.hidden" class="badge-hidden badge-hidden-sm">已隐藏</span></span>
                <span class="row-summary">{{ ch.summary }}</span>
                <span class="row-steps">{{ ch.steps.length }} 步</span>
              </span>
            </router-link>
          </template>
        </div>
      </section>

      <!-- 占位空状态 -->
      <section class="panel empty-state" v-else>
        <div class="empty-icon">📄</div>
        <h2>该模块文档待完善</h2>
        <p>把该模块的操作流程、截图资料整理好后，按 README「如何添加新模块」的说明补充即可。</p>
        <router-link to="/" class="btn-home">返回文档首页</router-link>
      </section>
    </div>

    <div class="doc-empty" v-else>
      <p>模块不存在</p>
      <router-link to="/">返回文档首页</router-link>
    </div>
  </div>
</template>

<script>
import { getModule, chapterGroups } from '@/docs'

export default {
  name: 'DocModule',
  computed: {
    module() {
      return getModule(this.$route.params.moduleId)
    }
  },
  methods: {
    // 三级导航：模块的分组列表
    groupsOf(m) {
      return chapterGroups(m)
    },
    // 章节编号在全模块内连续（跨分组不回补）
    chapterNo(ch) {
      return this.module.chapters.findIndex(c => c.id === ch.id) + 1
    }
  }
}
</script>
