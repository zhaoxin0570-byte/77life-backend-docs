<template>
  <div class="doc-chapter" v-if="chapter">
    <!-- 章节头部 -->
    <header class="chapter-header">
      <h1 class="chapter-title">
        {{ chapter.title }}
        <span class="chapter-index">第 {{ chapterIndex + 1 }} 章</span>
        <span v-if="chapter.hidden" class="badge-hidden">已隐藏</span>
      </h1>
      <p class="chapter-summary">{{ chapter.summary }}</p>
      <p v-if="chapter.hidden" class="chapter-hidden-tip">该菜单对非最高权限账户隐藏，仅最高权限账户 oooooooo 全量开放；隐藏范围详见「菜单隐藏需求」模块。</p>
    </header>

    <!-- 步骤内容 -->
    <section v-for="(step, si) in chapter.steps" :key="step.id" :id="step.id" class="step">
      <div class="step-head">
        <span class="step-no">{{ chapterIndex + 1 }}.{{ si + 1 }}</span>
        <div class="step-heading">
          <h2 class="step-title">{{ step.title }}<span v-if="step.hidden" class="badge-hidden">已隐藏</span></h2>
          <div class="step-menu">
            <span class="step-menu-label">菜单路径</span>
            <code>{{ step.menu }}</code>
          </div>
        </div>
      </div>
      <p class="step-desc">{{ step.desc }}</p>
      <ul class="step-points" v-if="step.points && step.points.length">
        <li v-for="(p, pi) in step.points" :key="pi">
          <span class="point-icon">!</span>{{ p }}
        </li>
      </ul>
      <figure v-for="(img, ii) in step.images" :key="ii" class="step-figure" @click="openImage(img)">
        <img :src="img" :alt="`${step.title} 截图 ${ii + 1}`" loading="lazy" />
        <figcaption>图 {{ chapterIndex + 1 }}.{{ si + 1 }}-{{ ii + 1 }}　{{ step.title }}<span class="zoom-hint">点击查看大图</span></figcaption>
      </figure>
    </section>

    <!-- 章节内容待补充提示 -->
    <section class="panel empty-state" v-if="!chapter.steps.length">
      <div class="empty-icon">📄</div>
      <h2>该章节内容整理中</h2>
      <p>把该章节的操作流程与截图整理好后，按 README「如何添加新模块」的说明补充到 <code>src/docs/</code> 对应模块文件中。</p>
      <router-link :to="`/doc/${module.id}`" class="btn-home">返回《{{ module.name }}》章节列表</router-link>
    </section>

    <!-- 上一节 / 下一节（跨模块连续导航） -->
    <nav class="step-nav">
      <router-link v-if="prev" :to="`/doc/${prev.moduleId}/${prev.id}`" class="step-nav-btn prev">
        <span class="nav-label">上一节</span>
        <span class="nav-title">{{ prev.moduleName }} · {{ prev.title }}</span>
      </router-link>
      <span v-else class="step-nav-btn placeholder"></span>
      <router-link v-if="next" :to="`/doc/${next.moduleId}/${next.id}`" class="step-nav-btn next">
        <span class="nav-label">下一节</span>
        <span class="nav-title">{{ next.moduleName }} · {{ next.title }}</span>
      </router-link>
      <span v-else class="step-nav-btn placeholder"></span>
    </nav>
  </div>

  <div class="doc-empty" v-else>
    <p>章节不存在</p>
    <router-link to="/">返回文档首页</router-link>
  </div>

  <!-- 图片放大灯箱 -->
  <div class="lightbox" v-if="lightboxImg" @click="closeImage">
    <span class="lightbox-tip">点击任意处或按 Esc 关闭</span>
    <img :src="lightboxImg" alt="截图大图" />
  </div>
</template>

<script>
import { getModule, allChapters } from '@/docs'

export default {
  name: 'DocChapter',
  data() {
    return { lightboxImg: null }
  },
  mounted() {
    document.addEventListener('keydown', this.onKeydown)
  },
  unmounted() {
    document.removeEventListener('keydown', this.onKeydown)
  },
  computed: {
    module() {
      return getModule(this.$route.params.moduleId) || { chapters: [] }
    },
    chapter() {
      const { moduleId, chapterId } = this.$route.params
      const m = getModule(moduleId)
      return (m && m.chapters.find(c => c.id === chapterId)) || null
    },
    chapterIndex() {
      return this.module.chapters.findIndex(c => c.id === this.$route.params.chapterId)
    },
    flatIndex() {
      const { moduleId, chapterId } = this.$route.params
      return allChapters().findIndex(c => c.moduleId === moduleId && c.id === chapterId)
    },
    prev() {
      const i = this.flatIndex
      const list = allChapters()
      return i > 0 ? list[i - 1] : null
    },
    next() {
      const i = this.flatIndex
      const list = allChapters()
      return i >= 0 && i < list.length - 1 ? list[i + 1] : null
    }
  },
  methods: {
    openImage(img) {
      this.lightboxImg = img
    },
    closeImage() {
      this.lightboxImg = null
    },
    onKeydown(e) {
      if (e.key === 'Escape') this.closeImage()
    }
  }
}
</script>
