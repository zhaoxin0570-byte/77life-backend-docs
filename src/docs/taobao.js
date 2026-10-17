// 七七生活后台 · 淘宝客
// 来源：《77平台模块分析》淘宝客/（2 个功能文档、3 张截图；总纲标注：需重做）
import img_l15_coupon_1 from '@/assets/docs/taobao/l15-coupon/img001.png'
import img_l16_selection_1 from '@/assets/docs/taobao/l16-selection/img001.png'
import img_l16_selection_2 from '@/assets/docs/taobao/l16-selection/img002.png'

export default {
  id: 'taobao',
  name: '淘宝客',
  icon: 'bag',
  summary: '淘宝客功能页面截图（总纲标注：需重做）',
  status: 'reference',
  chapters: [
    {
      id: 'c1',
      title: '淘宝优惠券',
      summary: '淘宝商品优惠券列表、跳转下单与推广',
      steps: [
        {
          id: 'c1-s1',
          title: '查看淘宝优惠券商品',
          menu: '淘宝客 → 淘宝优惠券',
          desc: '进入「淘宝客 → 淘宝优惠券」按商品名称搜索淘宝商品，可跳转淘宝下单、领券、推广或删除。',
          points: [
            '淘宝网链接可直接跳转下单界面',
            '优惠券链接可领取该商品优惠券'
          ],
          images: [img_l15_coupon_1]
        }
      ]
    },
    {
      id: 'c2',
      title: '选品库类别',
      summary: '选品库分类的同步、编辑与排序',
      steps: [
        {
          id: 'c2-s1',
          title: '选品库类别管理',
          menu: '淘宝客 → 选品库类别',
          desc: '进入「淘宝客 → 选品库类别」点击「更新」实时同步，可对单个类别同步、清空、编辑、删除并调整排序。',
          points: [
            '「更新」可实时更新数据',
            '排序支持调整'
          ],
          images: [img_l16_selection_1]
        },
        {
          id: 'c2-s2',
          title: '编辑选品库类别',
          menu: '淘宝客 → 选品库类别',
          desc: '点击「编辑」修改选品库类别的标题与图标，保存后生效。',
          points: ['图标建议上传尺寸 80*80'],
          images: [img_l16_selection_2]
        }
      ]
    }
  ]
}