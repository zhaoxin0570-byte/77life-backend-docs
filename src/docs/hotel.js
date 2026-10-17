// 七七生活后台 · 酒店机票
// 来源：《77平台模块分析》酒店机票/（5 个功能文档、5 张截图；总纲标注：暂时不在使用）
import img_l21_region_1 from '@/assets/docs/hotel/l21-region/img001.png'
import img_l22_flight_order_1 from '@/assets/docs/hotel/l22-flight-order/img001.png'
import img_l23_flight_setting_1 from '@/assets/docs/hotel/l23-flight-setting/img001.png'
import img_l24_hotel_setting_1 from '@/assets/docs/hotel/l24-hotel-setting/img001.png'
import img_l25_hotel_order_1 from '@/assets/docs/hotel/l25-hotel-order/img001.png'

export default {
  id: 'hotel',
  name: '酒店机票',
  icon: 'map',
  summary: '地区、机票与酒店设置及订单截图（总纲标注：暂时不在使用）',
  status: 'reference',
  chapters: [
    {
      id: 'c1',
      title: '地区列表',
      summary: '可预订城市与机场列表、热门与显示开关',
      steps: [
        {
          id: 'c1-s1',
          title: '查看地区列表',
          menu: '酒店机票 → 地区列表',
          desc: '进入「酒店机票 → 地区列表」查看可预订的城市与机场，可按城市、机场、是否热门筛选并控制是否显示。',
          points: [
            '开关控制城市/机场是否显示',
            '可按是否热门筛选'
          ],
          images: [img_l21_region_1]
        }
      ]
    },
    {
      id: 'c2',
      title: '机票订单',
      summary: '机票订单查询、奖金审核与详情',
      steps: [
        {
          id: 'c2-s1',
          title: '查看机票订单',
          menu: '酒店机票 → 机票订单',
          desc: '进入「酒店机票 → 机票订单」查询机票订单，支持奖金审核、打印小票、导出数据与查看订单详情。',
          points: [
            '筛选条件与便捷通道一致',
            '订单含航班、乘机人、舱位与实付金额'
          ],
          images: [img_l22_flight_order_1]
        }
      ]
    },
    {
      id: 'c3',
      title: '机票设置',
      summary: '机票加价、赠送消费券比例与接口参数',
      steps: [
        {
          id: 'c3-s1',
          title: '机票设置',
          menu: '酒店机票 → 机票设置',
          desc: '进入「酒店机票 → 机票设置」修改机票加价与赠送消费券比例；接口密钥等技术参数无需改动，保存后自动生效。',
          points: [
            '技术参数后台不需要改动',
            '加价与赠送消费券比例可修改'
          ],
          images: [img_l23_flight_setting_1]
        }
      ]
    },
    {
      id: 'c4',
      title: '酒店设置',
      summary: '酒店加价、赠送消费券比例与接口参数',
      steps: [
        {
          id: 'c4-s1',
          title: '酒店设置',
          menu: '酒店机票 → 酒店设置',
          desc: '进入「酒店机票 → 酒店设置」修改酒店加价与赠送消费券比例；接口密钥等技术参数无需操作，保存后自动生效。',
          points: [
            '技术参数后台不需要操作',
            '可修改加价和赠送消费券的比例'
          ],
          images: [img_l24_hotel_setting_1]
        }
      ]
    },
    {
      id: 'c5',
      title: '酒店订单',
      summary: '酒店订单查询与详情',
      steps: [
        {
          id: 'c5-s1',
          title: '查看酒店订单',
          menu: '酒店机票 → 酒店订单',
          desc: '进入「酒店机票 → 酒店订单」查询酒店订单，支持奖金审核、打印小票、导出数据与查看订单详情。',
          points: [
            '线上订单不使用分账查看',
            '筛选条件与便捷通道一致'
          ],
          images: [img_l25_hotel_order_1]
        }
      ]
    }
  ]
}