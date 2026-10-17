// 七七生活后台 · 加油站
// 来源：《77平台模块分析》加油站/（5 个功能文档、6 张截图；总纲标注：暂不在使用）
import img_l55_station_1 from '@/assets/docs/gas/l55-station/img001.png'
import img_l56_oilcard_1 from '@/assets/docs/gas/l56-oilcard/img001.png'
import img_l57_banner_1 from '@/assets/docs/gas/l57-banner/img001.png'
import img_l58_setting_1 from '@/assets/docs/gas/l58-setting/img001.png'
import img_l59_order_1 from '@/assets/docs/gas/l59-order/img001.png'
import img_l59_order_2 from '@/assets/docs/gas/l59-order/img002.png'

export default {
  id: 'gas',
  name: '加油站',
  icon: 'box',
  summary: '加油站、油卡、广告图、设置与订单截图（总纲标注：暂不在使用）',
  status: 'reference',
  chapters: [
    {
      id: 'c1',
      title: '加油站列表',
      summary: '加油站信息列表与价格明细查询',
      steps: [
        {
          id: 'c1-s1',
          title: '查看加油站列表',
          menu: '加油站 → 加油站列表',
          desc: '进入「加油站 → 加油站列表」按名称、区域等条件查询站点，点「价格明细」可查看该站价格。',
          points: ['模块暂不在使用'],
          images: [img_l55_station_1]
        }
      ]
    },
    {
      id: 'c2',
      title: '油卡列表',
      summary: '油卡套餐的新增与编辑',
      steps: [
        {
          id: 'c2-s1',
          title: '新增或编辑油卡',
          menu: '加油站 → 油卡列表',
          desc: '进入「加油站 → 油卡列表」新增或编辑油卡套餐，填写标题、价格、获赠数量与图片后确认保存。',
          points: ['油卡图片建议上传尺寸 50*50'],
          images: [img_l56_oilcard_1]
        }
      ]
    },
    {
      id: 'c3',
      title: '广告轮播图',
      summary: '加油站广告位轮播图配置',
      steps: [
        {
          id: 'c3-s1',
          title: '编辑广告轮播图',
          menu: '加油站 → 广告轮播图',
          desc: '进入「加油站 → 广告轮播图」新增或编辑广告幻灯片，设置标题、图片与跳转链接后保存。',
          points: [
            '图片建议上传尺寸 160*90',
            '可连接到相关模块'
          ],
          images: [img_l57_banner_1]
        }
      ]
    },
    {
      id: 'c4',
      title: '设置',
      summary: '加油站购买条件与接口技术参数',
      steps: [
        {
          id: 'c4-s1',
          title: '加油站设置',
          menu: '加油站 → 设置',
          desc: '进入「加油站 → 设置」配置购买油卡的最低消费条件；渠道编码与接口密钥等技术参数无需改动，保存后自动生效。',
          points: ['接口密钥等技术参数后台不需要改动'],
          images: [img_l58_setting_1]
        }
      ]
    },
    {
      id: 'c5',
      title: '加油站订单',
      summary: '加油站订单查询、导出与详情',
      steps: [
        {
          id: 'c5-s1',
          title: '加油站订单查询与详情',
          menu: '加油站 → 加油站订单',
          desc: '进入「加油站 → 加油站订单」按订单号、会员等条件查询加油订单，可查看详情、打印小票并导出数据。',
          points: [
            '支持导出全部数据、奖励明细等',
            '订单含站点、油号、升数与实付金额'
          ],
          images: [img_l59_order_1, img_l59_order_2]
        }
      ]
    }
  ]
}