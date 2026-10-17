// 七七生活后台 · 通知
// 来源：《77平台模块分析》通知/（2 个功能文档、3 张截图）
import img_c26_info_1 from '@/assets/docs/notice/c26-info/img001.png'
import img_c26_info_2 from '@/assets/docs/notice/c26-info/img002.png'
import img_c27_center_1 from '@/assets/docs/notice/c27-center/img001.png'

export default {
  id: 'notice',
  name: '通知',
  icon: 'bell',
  summary: '通知信息查看与通知中心页面',
  status: 'reference',
  chapters: [
    {
      id: 'c1',
      title: '通知信息',
      summary: '通过右上角铃铛查看系统通知',
      steps: [
        {
          id: 'c1-s1',
          title: '查看通知信息详情',
          menu: '通知 → 通知信息',
          desc: '进入「通知 → 通知信息」，或点击右上角「通知提示」铃铛查看通知详情，支持全部已读。',
          points: [],
          images: [img_c26_info_1, img_c26_info_2]
        }
      ]
    },
    {
      id: 'c2',
      title: '前往通知中心',
      summary: '通知列表的查询、编辑与删除',
      steps: [
        {
          id: 'c2-s1',
          title: '通知列表',
          menu: '通知 → 前往通知中心',
          desc: '点击「前往通知中心」进入通知列表，可按类型、时间、内容筛选查询。',
          points: [],
          images: [img_c27_center_1]
        }
      ]
    }
  ]
}