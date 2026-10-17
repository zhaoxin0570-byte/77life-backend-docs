// 文档模块注册中心
// 整个七七生活后台按「模块 → 章节 → 步骤」三级组织：
//   1. growth.js     —— 成长值模块完整操作流程（已上线，含完整步骤与截图）
//   2. finance.js    —— 财务模块（已上线，含《77平台模块分析》财务文档补充）
//   3. hidden.js     —— 菜单隐藏需求（参考资料）
//   4. user.js       —— 用户（已上线：挂卖规则/挂卖订单/会员管理/会员等级 + 实名认证/站内信/充值等用户菜单全量功能，原「用户分类」模块已合并入本模块）
//   5. overview.js ~ account.js —— 平台模块分析系列（参考资料，来自《77平台模块分析》126 个功能文档）：
//      overview 后台菜单总览 / mall 商城 / merchant 商户 / market 模块大市场 / video 视频心愿确认函 /
//      form 表单 / live 直播 / info 分类信息 / gas 加油站 / notice 通知 / set 设置 /
//      audit 审核通道 / user 用户 / news 资讯 / taobao 淘宝客 / hotel 酒店机票 /
//      sitemap 网站地图 / account 账户登录
//   6. framework.js  —— 后台全量模块框架（由《77模块后台模块分析》思维导图生成，占位待补）
//
// 新增/补充模块步骤：
//   1. 在 src/docs/ 下新建模块文件（可复制 growth.js 改），default 导出模块对象：
//      { id, name, summary, status: 'active'|'reference'|'planned', chapters: [{ id, title, summary, steps: [...] }] }
//   2. 在下方 import 并加入 modules 数组（顺序即侧边栏/首页展示顺序）
//   3. 内容补齐后把该模块 status 改为 'active'

import growth from './growth'
import finance from './finance'
import hidden from './hidden'
import overview from './overview'
import mall from './mall'
import merchant from './merchant'
import market from './market'
import video from './video'
import form from './form'
import live from './live'
import info from './info'
import gas from './gas'
import notice from './notice'
import set from './set'
import audit from './audit'
import user from './user'
import news from './news'
import taobao from './taobao'
import hotel from './hotel'
import sitemap from './sitemap'
import account from './account'
import framework from './framework'

export const systemMeta = {
  system: '七七生活',
  title: '七七生活后台操作文档',
  subtitle: '覆盖设置、审核、用户、财务、商城、商户等后台模块的操作流程与规则说明',
  version: 'v1.0',
  updatedAt: '2026-10-17'
}

// framework.js 中已被专属模块接替的条目（按 id 过滤，避免重复）
const OVERRIDDEN_IDS = [
  'finance',   // → finance.js
  'set',       // → set.js
  'audit',     // → audit.js
  'market',    // → market.js
  'user',      // → user.js（已合并原 user-classification.js 用户分类）
  'news',      // → news.js
  'sitemap',   // → sitemap.js
  'account',   // → account.js
  'video',     // → video.js
  'mall',      // → mall.js
  'merchant',  // → merchant.js
  'live',      // → live.js
  'notify'     // → notice.js（id 为 notice）
]

export const modules = [
  growth,
  finance,
  hidden,
  overview,
  mall,
  merchant,
  market,
  video,
  form,
  live,
  info,
  gas,
  notice,
  set,
  audit,
  user,
  news,
  taobao,
  hotel,
  sitemap,
  account,
  ...framework.filter(m => !OVERRIDDEN_IDS.includes(m.id))
]

// 侧边栏一级分类：按模块 status 自动分组
//   active    → 操作流程（完整操作流程模块）
//   reference → 参考资料（截图资料）
//   planned   → 框架待补（章节待完善）
// 模块内容补齐后将 status 改为 'active'，即自动进入「操作流程」分类
const MODULE_GROUP_DEFS = [
  { name: '操作流程', status: 'active' },
  { name: '参考资料', status: 'reference' },
  { name: '框架待补', status: 'planned' }
]

export const moduleGroups = MODULE_GROUP_DEFS
  .map(def => ({ name: def.name, modules: modules.filter(m => m.status === def.status) }))
  .filter(g => g.modules.length > 0)

export function getModule(moduleId) {
  return modules.find(m => m.id === moduleId) || null
}

// 章节分组（三级导航：模块 → 分组 → 章节）
// 章节对象可通过可选字段 group 归到同一分组下（如 finance.js 的「成长值」分组）；
// 未设置 group 的章节归入默认组（name 为 null，导航中平铺展示，行为与旧版一致）。
// 按「连续段」分组：相同组名且相邻的章节归为一段，保证分组前后顺序与
// chapters 数组定义顺序一致（如 首页~数据查看、成长值组、分享奖励）。
export function chapterGroups(module) {
  const groups = []
  ;(module.chapters || []).forEach(ch => {
    const name = ch.group || null
    const last = groups[groups.length - 1]
    if (last && last.name === name) {
      last.chapters.push(ch)
    } else {
      groups.push({ name, chapters: [ch] })
    }
  })
  return groups
}

// 全部章节扁平化（带模块信息），用于上一节/下一节跨模块导航
export function allChapters() {
  return modules.flatMap(m =>
    m.chapters.map(ch => ({ ...ch, moduleId: m.id, moduleName: m.name }))
  )
}

export const totalChapters = allChapters().length

// 全站统计（工作台用）
export const docStats = (() => {
  let steps = 0
  let images = 0
  modules.forEach(m =>
    m.chapters.forEach(ch => {
      ch.steps.forEach(s => {
        steps++
        images += (s.images || []).length
      })
    })
  )
  return {
    modules: modules.length,
    active: modules.filter(m => m.status === 'active').length,
    reference: modules.filter(m => m.status === 'reference').length,
    planned: modules.filter(m => m.status === 'planned').length,
    chapters: totalChapters,
    steps,
    images
  }
})()
