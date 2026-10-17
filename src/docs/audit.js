// 七七生活后台 · 审核通道
// 来源：《77平台模块分析》审核通道/（3 个功能文档、13 张截图）
import img_l10_withdraw_1 from '@/assets/docs/audit/l10-withdraw/img001.png'
import img_l10_withdraw_2 from '@/assets/docs/audit/l10-withdraw/img002.png'
import img_l10_withdraw_3 from '@/assets/docs/audit/l10-withdraw/img003.png'
import img_l11_channel_1 from '@/assets/docs/audit/l11-channel/img001.png'
import img_l11_channel_2 from '@/assets/docs/audit/l11-channel/img002.png'
import img_l11_channel_3 from '@/assets/docs/audit/l11-channel/img003.png'
import img_l11_channel_4 from '@/assets/docs/audit/l11-channel/img004.png'
import img_l11_channel_5 from '@/assets/docs/audit/l11-channel/img005.png'
import img_l11_channel_6 from '@/assets/docs/audit/l11-channel/img006.png'
import img_l11_channel_7 from '@/assets/docs/audit/l11-channel/img007.png'
import img_l11_channel_8 from '@/assets/docs/audit/l11-channel/img008.png'
import img_l11_channel_9 from '@/assets/docs/audit/l11-channel/img009.png'
import img_exception_1 from '@/assets/docs/audit/exception/img001.png'

export default {
  id: 'audit',
  name: '审核通道',
  icon: 'audit',
  summary: '用户提现、便捷通道、提现异常处理等审核页面截图与说明',
  status: 'reference',
  chapters: [
    {
      id: 'c1',
      title: '用户提现',
      summary: '提现申请列表筛选、详情审核与状态统计',
      steps: [
        {
          id: 'c1-s1',
          title: '用户提现申请与审核',
          menu: '审核通道 → 用户提现',
          desc: '进入「审核通道 → 用户提现」，按提现时间、会员账号、订单号、提现方式与状态筛选查询；行内「编辑」审核单条申请，表头小箭头可批量通过或驳回。',
          points: [
            '点击表头小箭头可批量操作：通过或驳回',
            '数据量大经常导不出来，建议按申请/处理时间筛选查询'
          ],
          images: [img_l10_withdraw_1]
        },
        {
          id: 'c1-s2',
          title: '查看提现详情',
          menu: '审核通道 → 用户提现',
          desc: '点「编辑」弹出提现详情，展示订单号、金额、支付方式、银行卡与开户信息、申请状态，管理员审核后点「确定」。',
          points: ['提现信息由用户在 App 上填写，后台仅做审核'],
          images: [img_l10_withdraw_2]
        },
        {
          id: 'c1-s3',
          title: '提现状态统计',
          menu: '审核通道 → 用户提现',
          desc: '列表按提现状态展示，底部汇总各状态金额；审核完成后会自动跳转到第一页，底部分页显示条数与每页条数。',
          points: [
            '审核完成后会自动跳转到第一页',
            '底部可查看申请中/已提现/未提现等状态金额'
          ],
          images: [img_l10_withdraw_3]
        }
      ]
    },
    {
      id: 'c2',
      title: '便捷通道',
      summary: '订单筛选导出、导入运单、奖金审核与订单详情',
      steps: [
        {
          id: 'c2-s1',
          title: '便捷通道订单筛选与导出',
          menu: '审核通道 → 便捷通道',
          desc: '进入「审核通道 → 便捷通道」，按时间、订单号、收货人、快递单号等筛选查询；支持导出数据与奖励明细，行内可查看订单明细、账单打印与订单详情。',
          points: [
            '可导出全部数据与奖励明细，导出发货单无法导出',
            '便捷通道申请不需真实发货、无快递单号'
          ],
          images: [img_l11_channel_1, img_l11_channel_2]
        },
        {
          id: 'c2-s2',
          title: '导入运单',
          menu: '审核通道 → 便捷通道',
          desc: '点顶部「导入运单」，上传存有运单资料的 Excel 文件，设置列对应关系后开始导入，实现批量导入运单。',
          points: ['导入运单仅支持上传 Excel 文件'],
          images: [img_l11_channel_3]
        },
        {
          id: 'c2-s3',
          title: '便捷通道筛选条件说明',
          menu: '审核通道 → 便捷通道',
          desc: '便捷通道筛选区说明：订单号、会员账号支持模糊搜索，其余按对应字段搜索；便捷通道申请不需真实发货，无需自提。',
          points: [
            '便捷通道申请不需真实发货、无快递单号',
            '不管是否选择地区，查询时会自动跳成便捷通道'
          ],
          images: [img_l11_channel_4]
        },
        {
          id: 'c2-s4',
          title: '奖金审核与奖励明细',
          menu: '审核通道 → 便捷通道',
          desc: '点「订单详情」可查看奖金审核弹窗，展示该订单所有奖励明细（会员账号、积分/股金、交易类型等），右侧支持订单详情、打印与小票。',
          points: ['奖金审核可查看该订单所有奖励明细'],
          images: [img_l11_channel_5]
        },
        {
          id: 'c2-s5',
          title: '订单详情、打印与小票',
          menu: '审核通道 → 便捷通道',
          desc: '订单详情页展示订单基本信息与明细，可查看营业执照/身份证、产品图片与销售合约或发票，并支持订单信息打印与下单小票。',
          points: ['支持订单信息打印与下单小票打印'],
          images: [img_l11_channel_6, img_l11_channel_7, img_l11_channel_8, img_l11_channel_9]
        }
      ]
    },
    {
      id: 'c3',
      title: '提现异常处理',
      summary: '提现异常订单查询与手动驳回',
      steps: [
        {
          id: 'c3-s1',
          title: '处理提现异常订单',
          menu: '审核通道 → 提现异常处理',
          desc: '进入「审核通道 → 提现异常处理」，对异常订单点「查看异常详情」，进内管系统查询该单是否出款，若出款失败则手动驳回。',
          points: ['进内管系统查询是否出款，出款失败则手动驳回'],
          images: [img_exception_1]
        }
      ]
    }
  ]
}