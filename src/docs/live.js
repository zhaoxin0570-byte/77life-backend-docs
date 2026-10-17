// 七七生活后台 · 直播
// 来源：《77平台模块分析》直播（8 个功能文档、24 张截图）
import img_l42_anchor_1 from '@/assets/docs/live/l42-anchor/img001.png'
import img_l43_apply_1 from '@/assets/docs/live/l43-apply/img001.png'
import img_l43_apply_2 from '@/assets/docs/live/l43-apply/img002.png'
import img_l44_home_tpl_1 from '@/assets/docs/live/l44-home-tpl/img001.png'
import img_l44_home_tpl_2 from '@/assets/docs/live/l44-home-tpl/img002.png'
import img_l44_home_tpl_3 from '@/assets/docs/live/l44-home-tpl/img003.png'
import img_l44_home_tpl_4 from '@/assets/docs/live/l44-home-tpl/img004.png'
import img_l44_home_tpl_5 from '@/assets/docs/live/l44-home-tpl/img005.png'
import img_l44_home_tpl_6 from '@/assets/docs/live/l44-home-tpl/img006.png'
import img_l44_home_tpl_7 from '@/assets/docs/live/l44-home-tpl/img007.png'
import img_l44_home_tpl_8 from '@/assets/docs/live/l44-home-tpl/img008.png'
import img_l45_setting_1 from '@/assets/docs/live/l45-setting/img001.png'
import img_l45_setting_2 from '@/assets/docs/live/l45-setting/img002.png'
import img_l46_agreement_1 from '@/assets/docs/live/l46-agreement/img001.png'
import img_l46_agreement_2 from '@/assets/docs/live/l46-agreement/img002.png'
import img_l47_gift_1 from '@/assets/docs/live/l47-gift/img001.png'
import img_l47_gift_2 from '@/assets/docs/live/l47-gift/img002.png'
import img_l48_gift_order_1 from '@/assets/docs/live/l48-gift-order/img001.png'
import img_l49_replay_1 from '@/assets/docs/live/l49-replay/img001.png'
import img_l49_replay_2 from '@/assets/docs/live/l49-replay/img002.png'
import img_l49_replay_3 from '@/assets/docs/live/l49-replay/img003.png'
import img_l49_replay_4 from '@/assets/docs/live/l49-replay/img004.png'
import img_l49_replay_5 from '@/assets/docs/live/l49-replay/img005.png'
import img_l49_replay_6 from '@/assets/docs/live/l49-replay/img006.png'

export default {
  id: 'live',
  name: '直播',
  icon: 'live',
  summary: '主播管理、直播设置、礼物、回放等页面截图与说明',
  status: 'reference',
  chapters: [
    {
      id: 'c1',
      title: '主播管理',
      summary: '主播/直播间列表与开关控制',
      steps: [
        {
          id: 'c1-s1',
          title: '主播管理',
          menu: '直播 → 主播管理',
          desc: '进入「直播 → 主播管理」管理主播与直播间，可开启/关闭直播间并设置精选、官方账号。',
          points: ['可对每个直播间单独开启或关闭'],
          images: [img_l42_anchor_1]
        }
      ]
    },
    {
      id: 'c2',
      title: '主播申请',
      summary: '主播申请记录（暂不使用）',
      steps: [
        {
          id: 'c2-s1',
          title: '主播申请',
          menu: '直播 → 主播申请',
          desc: '进入「直播 → 主播申请」查看主播申请记录，可编辑备注与删除；平台现在主播不需要申请，暂不使用。',
          points: ['平台现在主播不需要申请，暂不使用'],
          images: [img_l43_apply_1, img_l43_apply_2]
        }
      ]
    },
    {
      id: 'c3',
      title: '直播首页模板',
      summary: 'App 直播首页各栏目的可视化配置',
      steps: [
        {
          id: 'c3-s1',
          title: '首页模板基础配置',
          menu: '直播 → 直播首页模板',
          desc: '进入「直播 → 直播首页模板」配置 App 直播首页，左侧实时预览，右侧设置搜索栏、背景图、主图图标、轮播图与自定义栏目。',
          points: ['左侧为实时预览，配置即时生效', '轮播图与自定义栏目均可添加多个'],
          images: [img_l44_home_tpl_1, img_l44_home_tpl_2, img_l44_home_tpl_3, img_l44_home_tpl_4]
        },
        {
          id: 'c3-s2',
          title: '推荐/精选/版权/底部导航配置',
          menu: '直播 → 直播首页模板',
          desc: '继续配置首页模板的推荐新闻、精选商品、版权信息与底部导航图标（图标、标题、排序、跳转链接）。',
          points: ['版权信息编辑模块未使用过', '底部导航图标可配置跳转链接'],
          images: [img_l44_home_tpl_5, img_l44_home_tpl_6, img_l44_home_tpl_7, img_l44_home_tpl_8]
        }
      ]
    },
    {
      id: 'c4',
      title: '直播设置',
      summary: '直播打赏、票价、审核等参数配置',
      steps: [
        {
          id: 'c4-s1',
          title: '直播设置',
          menu: '直播 → 直播设置',
          desc: '进入「直播 → 直播设置」配置直播参数，如打赏分成比例、票价、人气值倍数、是否需后台审核等，修改后自动保存。',
          points: ['「申请直播广告」暂不使用', '修改后设置项自动保存'],
          images: [img_l45_setting_1, img_l45_setting_2]
        }
      ]
    },
    {
      id: 'c5',
      title: '申请直播协议',
      summary: '直播协议内容配置（暂不使用）',
      steps: [
        {
          id: 'c5-s1',
          title: '申请直播协议',
          menu: '直播 → 申请直播协议',
          desc: '进入「直播 → 申请直播协议」左侧预览协议，右侧配置分类、标题、来源、是否显示等信息并编辑正文；暂不使用。',
          points: ['申请直播协议模块暂不使用'],
          images: [img_l46_agreement_1, img_l46_agreement_2]
        }
      ]
    },
    {
      id: 'c6',
      title: '礼物管理',
      summary: '直播间礼物的新增、编辑与删除',
      steps: [
        {
          id: 'c6-s1',
          title: '礼物管理',
          menu: '直播 → 礼物管理',
          desc: '进入「直播 → 礼物管理」管理直播间礼物，可新增/编辑/删除，编辑时设置封面、图标与价格。',
          points: ['礼物价格以数值填写'],
          images: [img_l47_gift_1, img_l47_gift_2]
        }
      ]
    },
    {
      id: 'c7',
      title: '礼物订单',
      summary: '礼物订单记录查询',
      steps: [
        {
          id: 'c7-s1',
          title: '礼物订单查询',
          menu: '直播 → 礼物订单',
          desc: '进入「直播 → 礼物订单」查询礼物订单记录，支持下单时间、订单号、会员、主播与礼物名称筛选。',
          points: ['支持按订单号、会员、主播等多维度筛选'],
          images: [img_l48_gift_order_1]
        }
      ]
    },
    {
      id: 'c8',
      title: '直播回放',
      summary: '直播回放列表、编辑与播放',
      steps: [
        {
          id: 'c8-s1',
          title: '回放列表与编辑',
          menu: '直播 → 直播回放',
          desc: '进入「直播 → 直播回放」管理回放列表，可编辑、删除，并可设置广告、精选与审核。',
          points: ['可将回放作为签到广告或放入精选回放'],
          images: [img_l49_replay_1, img_l49_replay_2]
        },
        {
          id: 'c8-s2',
          title: '查看回放播放器',
          menu: '直播 → 直播回放',
          desc: '点击「查看回放」弹出播放器，可播放/暂停、调音量、全屏、倍速与画中画播放。',
          points: ['播放器支持倍速、下载与画中画'],
          images: [img_l49_replay_3, img_l49_replay_4, img_l49_replay_5, img_l49_replay_6]
        }
      ]
    }
  ]
}