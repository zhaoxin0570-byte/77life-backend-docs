<template>
  <div class="doc-home">
    <!-- 统计卡片 -->
    <div class="stat-cards">
      <div class="stat-card">
        <span class="stat-icon blue">📄</span>
        <div class="stat-body">
          <div class="stat-num">{{ stats.active }}</div>
          <div class="stat-label">已上线模块</div>
        </div>
      </div>
      <div class="stat-card">
        <span class="stat-icon green">📑</span>
        <div class="stat-body">
          <div class="stat-num ok">{{ stats.chapters }}</div>
          <div class="stat-label">章节总数</div>
        </div>
      </div>
      <div class="stat-card">
        <span class="stat-icon orange">🖱️</span>
        <div class="stat-body">
          <div class="stat-num warn">{{ stats.steps }}</div>
          <div class="stat-label">操作步骤</div>
        </div>
      </div>
      <div class="stat-card">
        <span class="stat-icon gray">🖼️</span>
        <div class="stat-body">
          <div class="stat-num">{{ stats.images }}</div>
          <div class="stat-label">操作截图</div>
        </div>
      </div>
    </div>

    <!-- 模块进度表 -->
    <div class="table-card">
      <div class="panel-title" style="margin-bottom: 14px;">模块文档进度</div>
      <table class="data-table">
        <thead>
          <tr>
            <th style="width: 160px;">模块</th>
            <th style="width: 100px;">状态</th>
            <th style="width: 80px;">章节</th>
            <th>说明</th>
            <th style="width: 90px;">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="m in modules" :key="m.id">
            <td style="font-weight: 500; color: #303133;">{{ m.name }}</td>
            <td>
              <span v-if="m.status === 'active'" class="tag ok">已上线</span>
              <span v-else-if="m.status === 'reference'" class="tag shipped">参考</span>
              <span v-else class="tag pending">待完善</span>
            </td>
            <td>{{ m.chapters.length }}</td>
            <td>{{ m.summary }}</td>
            <td>
              <router-link :to="`/doc/${m.id}`" class="ops"><a>查看</a></router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 说明卡片 -->
    <div class="panel">
      <div class="panel-title">关于本文档系统</div>
      <p style="margin: 0; font-size: 13px; color: #606266; line-height: 2;">
        本文档系统按「模块 → 章节 → 步骤」三级组织七七生活后台的操作流程，每步包含菜单路径、操作说明、注意事项与操作截图（截图可点击放大）。
        顶部页签切换模块，左侧菜单进入章节；标记为「待完善」的模块为框架占位，内容持续补充中。
      </p>
    </div>
  </div>
</template>

<script>
import { modules, docStats } from '@/docs'

export default {
  name: 'DocHome',
  data() {
    return { modules, stats: docStats }
  }
}
</script>
