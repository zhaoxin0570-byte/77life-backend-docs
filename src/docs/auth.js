// 当前登录用户解析（响应式）
// 后台权限逻辑只需生成「可见范围 scope」注入即可，前端不维护角色规则。
//
// 对接方式（按优先级）：
//   1. 宿主页面注入（iframe 嵌入推荐）：后台在文档页加载前设置
//        window.__DOC_USER__ = {
//          login: 'kk001',
//          name: '客服小妹',
//          scope: {                        // 后台权限逻辑计算出的可见范围；超管传 null
//            modules: ['user'],
//            chapters: { user: ['member', 'c1'] }        // 可选
//            // steps: { user: { member: ['member-s1'] } } // 可选
//          }
//        }
//   2. 后台接口：实现下方 fetchUserFromBackend()，返回 { login, name, scope }
//   3. 本地演示（未对接时）：侧边栏底部切换预设模拟不同权限范围
import { reactive } from 'vue'
import { DEV_SCOPE_PRESETS } from './access'

export const authState = reactive({
  ready: false,
  user: null, // { login, name, scope }  scope=null 表示全量可见
  simulated: false // 是否本地演示模式（未对接后台）
})

function normalize(u) {
  if (!u) return null
  return {
    login: u.login || '',
    name: u.name || '未登录',
    // 兼容后台直接传 isSuper / role 的旧字段：都归一为 scope
    scope: u.scope !== undefined ? u.scope : (u.isSuper ? null : null)
  }
}

// ============ 后台接口对接（可选）============
async function fetchUserFromBackend() {
  // 示例：后台当前账户接口（含该账户被分配的文档可见范围）
  // const params = new URLSearchParams(location.hash.split('?')[1] || '')
  // const token = params.get('token')
  // const res = await fetch('https://后台域名/api/doc/current-user', {
  //   headers: { Authorization: 'Bearer ' + token }
  // })
  // if (!res.ok) throw new Error('后台用户接口失败: ' + res.status)
  // const d = await res.json()
  // return { login: d.login, name: d.name, scope: d.scope }
  return null
}

// 本地演示：URL ?scope=预设ID（如 service/finance/ops）或 localStorage 记忆
function readSimulatedPreset() {
  try {
    const fromUrl = (location.href.match(/[?&]scope=([a-z]+)/i) || [])[1]
    if (fromUrl) {
      localStorage.setItem('doc-sim-scope', fromUrl)
      return fromUrl
    }
    return localStorage.getItem('doc-sim-scope')
  } catch (e) {
    return null
  }
}

function presetById(id) {
  return DEV_SCOPE_PRESETS.find(p => p.id === id) || null
}

export async function initAuth() {
  // 1. 宿主页面注入
  if (typeof window !== 'undefined' && window.__DOC_USER__) {
    authState.user = normalize(window.__DOC_USER__)
    authState.simulated = false
    authState.ready = true
    return
  }
  // 2. 后台接口
  try {
    const u = await fetchUserFromBackend()
    if (u) {
      authState.user = normalize(u)
      authState.simulated = false
      authState.ready = true
      return
    }
  } catch (e) {
    console.warn('[doc-auth] 后台用户获取失败，转入本地演示模式：', e)
  }
  // 3. 本地演示（默认全量）
  const preset = presetById(readSimulatedPreset())
  authState.simulated = true
  authState.user = preset
    ? { login: 'demo', name: preset.name, scope: preset.scope }
    : { login: 'dev', name: '开发模式', scope: null }
  authState.ready = true
}

// 切换演示预设（未对接后台时有效）
export function setSimulatedPreset(presetId) {
  const preset = presetById(presetId)
  if (!preset) return
  try {
    localStorage.setItem('doc-sim-scope', presetId)
  } catch (e) { /* ignore */ }
  authState.user = { login: 'demo', name: preset.name, scope: preset.scope }
}
