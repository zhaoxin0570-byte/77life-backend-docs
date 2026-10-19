// 七七生活后台 · 视频心愿确认函
// 来源：《77平台模块分析》视频心愿确认函（9 个功能文档、21 张截图）
import img_c19_category_1 from '@/assets/docs/video/c19-category/img001.png'
import img_c19_category_2 from '@/assets/docs/video/c19-category/img002.png'
import img_c19_category_3 from '@/assets/docs/video/c19-category/img003.png'
import img_c20_list_1 from '@/assets/docs/video/c20-list/img001.png'
import img_c20_list_2 from '@/assets/docs/video/c20-list/img002.png'
import img_c20_list_3 from '@/assets/docs/video/c20-list/img003.png'
import img_c20_list_4 from '@/assets/docs/video/c20-list/img004.png'
import img_c21_wish_1 from '@/assets/docs/video/c21-wish/img001.png'
import img_c21_wish_2 from '@/assets/docs/video/c21-wish/img002.png'
import img_c22_letter_log_1 from '@/assets/docs/video/c22-letter-log/img001.png'
import img_c22_letter_log_2 from '@/assets/docs/video/c22-letter-log/img002.png'
import img_c23_clearance_1 from '@/assets/docs/video/c23-clearance/img001.png'
import img_c23_clearance_2 from '@/assets/docs/video/c23-clearance/img002.png'
import img_c23_clearance_3 from '@/assets/docs/video/c23-clearance/img003.png'
import img_l40_script_1 from '@/assets/docs/video/l40-script/img001.png'
import img_l40_script_2 from '@/assets/docs/video/l40-script/img002.png'
import img_l41_popup_1 from '@/assets/docs/video/l41-popup/img001.png'
import img_l41_popup_2 from '@/assets/docs/video/l41-popup/img002.png'
import img_l61_letter_1 from '@/assets/docs/video/l61-letter/img001.png'
import img_l61_letter_2 from '@/assets/docs/video/l61-letter/img002.png'
import img_wish_setting_1 from '@/assets/docs/video/wish-setting/img001.png'

export default {
  id: 'video',
  name: '视频心愿确认函',
  icon: 'video',
  summary: '视频分类、视频列表、心愿、确认函、清仓产品等页面截图与说明',
  status: 'reference',
  chapters: [
    {
      id: 'c1',
      title: '视频分类',
      summary: '视频分类目录的增删改与显示控制',
      steps: [
        {
          id: 'c1-s1',
          title: '视频分类管理',
          menu: '视频心愿确认函 → 视频分类',
          desc: '进入「视频心愿确认函 → 视频分类」管理视频分类，可新增/编辑/删除并控制是否显示。',
          points: ['分类图标建议上传尺寸为 50 * 50'],
          images: [img_c19_category_1, img_c19_category_2, img_c19_category_3]
        }
      ]
    },
    {
      id: 'c2',
      title: '视频列表',
      summary: '视频内容的新增、编辑、查看与删除',
      steps: [
        {
          id: 'c2-s1',
          title: '视频列表管理',
          menu: '视频心愿确认函 → 视频列表',
          desc: '进入「视频心愿确认函 → 视频列表」管理视频内容，可新增/编辑/删除并播放预览。',
          points: ['视频需上传文件并设置封面与观看时长', '列表按订单类型标签切换'],
          images: [img_c20_list_1, img_c20_list_2, img_c20_list_3, img_c20_list_4]
        }
      ]
    },
    {
      id: 'c3',
      title: '心愿列表',
      summary: '用户/商家心愿单的审核与编辑',
      steps: [
        {
          id: 'c3-s1',
          title: '心愿列表管理',
          menu: '视频心愿确认函 → 心愿列表',
          desc: '进入「视频心愿确认函 → 心愿列表」审核与编辑心愿单，可按用户、心愿、产品筛选并按审核状态切换。',
          points: ['编辑弹窗中「目标地址」及以下字段不使用'],
          images: [img_c21_wish_1, img_c21_wish_2]
        }
      ]
    },
    {
      id: 'c4',
      title: '确认函记录',
      summary: '确认函签署历史记录查询',
      steps: [
        {
          id: 'c4-s1',
          title: '确认函记录查询',
          menu: '视频心愿确认函 → 确认函记录',
          desc: '进入「视频心愿确认函 → 确认函记录」查询确认函签署记录，可查看与删除。',
          points: ['「查看」弹窗当前内容为空'],
          images: [img_c22_letter_log_1, img_c22_letter_log_2]
        }
      ]
    },
    {
      id: 'c5',
      title: '清仓产品',
      summary: '清仓商品列表与活动信息配置',
      steps: [
        {
          id: 'c5-s1',
          title: '清仓产品管理',
          menu: '视频心愿确认函 → 清仓产品',
          desc: '进入「视频心愿确认函 → 清仓产品」管理清仓商品，可编辑商品与按方案配置活动信息。',
          points: ['活动信息按三种方案分别配置让利与补贴参数'],
          images: [img_c23_clearance_1, img_c23_clearance_2, img_c23_clearance_3]
        }
      ]
    },
    {
      id: 'c6',
      title: '场景话术',
      summary: '直播场景话术分类（暂未使用）',
      steps: [
        {
          id: 'c6-s1',
          title: '场景话术管理',
          menu: '视频心愿确认函 → 场景话术',
          desc: '进入「视频心愿确认函 → 场景话术」管理场景话术分类，可新增/编辑/删除；该模块暂未使用。',
          points: ['场景话术模块暂未使用', '话术内容后台可自定义'],
          images: [img_l40_script_1, img_l40_script_2]
        }
      ]
    },
    {
      id: 'c7',
      title: '弹窗公告',
      summary: '按页面路径配置 App 弹窗公告',
      steps: [
        {
          id: 'c7-s1',
          title: '弹窗公告管理',
          menu: '视频心愿确认函 → 弹窗公告',
          desc: '进入「视频心愿确认函 → 弹窗公告」按页面路径配置 App 弹窗，可新增/编辑/删除。',
          points: ['公告通过页面路径关联，后台仅显示路径需点开查看'],
          images: [img_l41_popup_1, img_l41_popup_2]
        }
      ]
    },
    {
      id: 'c8',
      title: '确认函',
      summary: '确认函模板的新增、生成图片与发送',
      steps: [
        {
          id: 'c8-s1',
          title: '确认函模板管理',
          menu: '视频心愿确认函 → 确认函',
          desc: '进入「视频心愿确认函 → 确认函」管理确认函模板，可新增/编辑，并生成图片、复制链接、发送给他人。',
          points: ['确认函支持生成图片、复制链接与发送'],
          images: [img_l61_letter_1, img_l61_letter_2]
        }
      ]
    },
    {
      id: 'c9',
      title: '心愿设置',
      summary: '商家心愿新增页面的配置',
      steps: [
        {
          id: 'c9-s1',
          title: '心愿设置',
          menu: '视频心愿确认函 → 心愿设置',
          desc: '进入「视频心愿确认函 → 心愿设置」配置商家心愿新增页的公告文案、背景图与广告位。',
          points: ['广告位支持配置多组图片与链接'],
          images: [img_wish_setting_1]
        }
      ]
    }
  ]
}
