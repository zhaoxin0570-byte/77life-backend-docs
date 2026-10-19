// 七七生活后台 · 账户登录
// 来源：《77平台模块分析》后台管理 / 修改密码（5 个功能文档、22 张截图）
import img_l60_setting_1 from '@/assets/docs/account/l60-setting/img001.png'
import img_l60_log_1 from '@/assets/docs/account/l60-log/img001.png'
import img_l60_admin_1 from '@/assets/docs/account/l60-admin/img001.png'
import img_l60_admin_2 from '@/assets/docs/account/l60-admin/img002.png'
import img_l60_admin_3 from '@/assets/docs/account/l60-admin/img003.png'
import img_l60_role_1 from '@/assets/docs/account/l60-role/img001.png'
import img_l60_role_2 from '@/assets/docs/account/l60-role/img002.png'
import img_l60_role_3 from '@/assets/docs/account/l60-role/img003.png'
import img_l60_role_4 from '@/assets/docs/account/l60-role/img004.png'
import img_l60_role_5 from '@/assets/docs/account/l60-role/img005.png'
import img_l60_role_6 from '@/assets/docs/account/l60-role/img006.png'
import img_l60_role_7 from '@/assets/docs/account/l60-role/img007.png'
import img_l60_role_8 from '@/assets/docs/account/l60-role/img008.png'
import img_l60_role_9 from '@/assets/docs/account/l60-role/img009.png'
import img_l60_role_10 from '@/assets/docs/account/l60-role/img010.png'
import img_l60_role_11 from '@/assets/docs/account/l60-role/img011.png'
import img_l60_role_12 from '@/assets/docs/account/l60-role/img012.png'
import img_l60_role_13 from '@/assets/docs/account/l60-role/img013.png'
import img_l60_role_14 from '@/assets/docs/account/l60-role/img014.png'
import img_l60_role_15 from '@/assets/docs/account/l60-role/img015.png'
import img_l60_role_16 from '@/assets/docs/account/l60-role/img016.png'
import img_l61_password_1 from '@/assets/docs/account/l61-password/img001.png'

export default {
  id: 'account',
  name: '账户登录',
  icon: 'login',
  summary: '后台管理（后台设置/日志/管理员/角色）与修改密码页面截图与说明',
  status: 'reference',
  chapters: [
    {
      id: 'c1',
      hidden: true,
      title: '后台设置',
      summary: '后台短信登录、标题与 Logo 配置',
      steps: [
        {
          id: 'c1-s1',
          title: '后台设置',
          menu: '账户登录 → 后台管理 → 后台设置',
          desc: '进入「账户登录 → 后台管理 → 后台设置」配置后台基础参数：短信登录开关、后台标题、背景与 Logo；修改后自动保存。',
          points: ['后台设置修改后自动保存'],
          images: [img_l60_setting_1]
        }
      ]
    },
    {
      id: 'c2',
      title: '日志',
      summary: '后台操作日志查询',
      steps: [
        {
          id: 'c2-s1',
          title: '日志查询',
          menu: '账户登录 → 后台管理 → 日志',
          desc: '进入「账户登录 → 后台管理 → 日志」查询后台操作日志，可按操作时间、管理员账号、IP 与操作记录筛选。',
          points: ['日志涵盖后台与商户后台管理员操作'],
          images: [img_l60_log_1]
        }
      ]
    },
    {
      id: 'c3',
      title: '管理员',
      summary: '后台管理员的新增、编辑与权限开关',
      steps: [
        {
          id: 'c3-s1',
          title: '管理员管理',
          menu: '账户登录 → 后台管理 → 管理员',
          desc: '进入「账户登录 → 后台管理 → 管理员」管理后台管理员，可新增/编辑/删除，并设置是否通知、客服、显示等开关。',
          points: ['管理员可设置是否通知、客服、显示'],
          images: [img_l60_admin_1, img_l60_admin_2, img_l60_admin_3]
        }
      ]
    },
    {
      id: 'c4',
      hidden: true,
      title: '角色',
      summary: '后台角色列表、权限配置与用户管理权限',
      steps: [
        {
          id: 'c4-s1',
          title: '角色列表',
          menu: '账户登录 → 后台管理 → 角色',
          desc: '进入「账户登录 → 后台管理 → 角色」管理后台角色，可添加/编辑/删除。',
          points: ['「总管」为超级管理员角色'],
          images: [img_l60_role_1]
        },
        {
          id: 'c4-s2',
          title: '编辑角色与权限配置（财务/用户/商城/商户）',
          menu: '账户登录 → 后台管理 → 角色',
          desc: '点击「编辑&用户管理」进入编辑页，上部填写角色名称、描述与类型，下部按三级菜单结构勾选该角色可访问的菜单与操作权限。',
          points: ['权限按主栏目/二级栏目/三级菜单三级树形结构配置'],
          images: [img_l60_role_2, img_l60_role_3, img_l60_role_4, img_l60_role_5, img_l60_role_6]
        },
        {
          id: 'c4-s3',
          title: '权限配置（更多业务模块）',
          menu: '账户登录 → 后台管理 → 角色',
          desc: '继续勾选各业务模块权限，覆盖大市场、视频心愿/确认函、代理商、直播、资讯等菜单。',
          points: ['各功能模块的菜单权限在此统一勾选分配'],
          images: [img_l60_role_7, img_l60_role_8, img_l60_role_9, img_l60_role_10, img_l60_role_11]
        },
        {
          id: 'c4-s4',
          title: '权限配置（收尾）、用户管理权限与添加角色',
          menu: '账户登录 → 后台管理 → 角色',
          desc: '继续勾选营销/工具与管理模块权限后点击「确定修改」；「用户管理权限」弹窗可细化角色对用户的操作权限。',
          points: ['「用户管理权限」弹窗细化角色对用户的操作权限', '可在「添加用户角色」页新增角色', '末张截图为账号菜单的「修改密码」弹窗'],
          images: [img_l60_role_12, img_l60_role_13, img_l60_role_14, img_l60_role_15, img_l60_role_16]
        }
      ]
    },
    {
      id: 'c5',
      title: '修改密码',
      summary: '账号登录密码修改',
      steps: [
        {
          id: 'c5-s1',
          title: '修改密码',
          menu: '账户登录 → 修改密码',
          desc: '进入「账户登录 → 修改密码」，填写原密码、新密码并确认后点击「确定」。',
          points: [],
          images: [img_l61_password_1]
        }
      ]
    }
  ]
}
