// 七七生活后台操作文档 · 显隐控制（对接后台权限逻辑）
// 后台权限系统生成「可见范围 scope」并注入，前端只负责按 scope 过滤，不自定义角色规则。
//
// scope 结构：
//   {
//     modules: ['user', 'mall'],                    // 可见模块 ID 列表（必填）
//     chapters: { user: ['member', 'c1'] },         // 可选：模块内仅可见这些章节
//     steps: { user: { member: ['member-s1'] } }    // 可选：章节内仅可见这些步骤
//   }
//
// 过滤规则：
//   scope 为 null / undefined      → 全量可见（超管）
//   modules 未列出的模块           → 整个模块隐藏
//   模块列出但无 chapters          → 该模块全部章节可见
//   chapters 列出                  → 仅这些章节可见
//   steps 按章节细化               → 仅这些步骤可见

// 是否受限视图（scope 存在即受限）
export function isRestrictedScope(scope) {
  return !!scope
}

// 模块是否可见
export function canAccessModule(scope, moduleId) {
  if (!scope) return true
  return Array.isArray(scope.modules) && scope.modules.includes(moduleId)
}

// 章节是否可见
export function canAccessChapter(scope, moduleId, chapterId) {
  if (!canAccessModule(scope, moduleId)) return false
  if (!scope || !scope.chapters || !scope.chapters[moduleId]) return true
  return scope.chapters[moduleId].includes(chapterId)
}

// 步骤是否可见
export function canAccessStep(scope, moduleId, chapterId, stepId) {
  if (!canAccessChapter(scope, moduleId, chapterId)) return false
  if (!scope || !scope.steps || !scope.steps[moduleId]) return true
  const chapterSteps = scope.steps[moduleId][chapterId]
  if (!chapterSteps) return true
  return chapterSteps.includes(stepId)
}

// 按 scope 过滤模块列表（模块/章节/步骤三级；scope 为空则原样返回）
export function filterModules(modules, scope) {
  if (!scope) return modules
  return modules
    .filter(m => canAccessModule(scope, m.id))
    .map(m => {
      let chapters = m.chapters
      if (scope.chapters && scope.chapters[m.id]) {
        chapters = chapters.filter(ch => scope.chapters[m.id].includes(ch.id))
      }
      if (scope.steps && scope.steps[m.id]) {
        chapters = chapters.map(ch => {
          const stepIds = scope.steps[m.id][ch.id]
          if (stepIds) {
            return { ...ch, steps: ch.steps.filter(s => stepIds.includes(s.id)) }
          }
          return ch
        })
      }
      return { ...m, chapters }
    })
    .filter(m => m.chapters.length > 0)
}

// ============ 开发演示预设（未对接后台时用于本地验证显隐效果）============
// 对接后台后不会使用；侧边栏底部可切换这些预设模拟不同权限范围
export const DEV_SCOPE_PRESETS = [
  { id: 'full', name: '全量可见（超管）', scope: null },
  {
    id: 'service',
    name: '仅用户模块（客服）',
    scope: {
      modules: ['user'],
      chapters: { user: ['rule', 'order', 'member', 'level', 'trial', 'star-log', 'c1', 'c2', 'c4', 'c5'] }
    }
  },
  {
    id: 'finance',
    name: '财务+审核通道',
    scope: { modules: ['finance', 'audit'] }
  },
  {
    id: 'ops',
    name: '运营（用户/商城/商户）',
    scope: { modules: ['user', 'mall', 'merchant'] }
  }
]
