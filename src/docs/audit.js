// 七七生活后台 · 审核通道
// 来源：《77平台模块分析》审核通道/（3 个功能文档、13 张截图）+《审核.pdf》（17 张截图：提现审核全流程/兑换Q值/qq/按需查看/资产/实名/充值审批）
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
import img_withdraw_h5_1 from '@/assets/docs/audit/withdraw-h5/img001.png'
import img_withdraw_audit_1 from '@/assets/docs/audit/withdraw-audit/img001.png'
import img_withdraw_audit_2 from '@/assets/docs/audit/withdraw-audit/img002.png'
import img_withdraw_audit_3 from '@/assets/docs/audit/withdraw-audit/img003.png'
import img_qvalue_1 from '@/assets/docs/audit/qvalue/img001.png'
import img_qvalue_2 from '@/assets/docs/audit/qvalue/img002.png'
import img_qvalue_3 from '@/assets/docs/audit/qvalue/img003.png'
import img_qq_audit_1 from '@/assets/docs/audit/qq-audit/img001.png'
import img_ondemand_1 from '@/assets/docs/audit/ondemand/img001.png'
import img_asset_1 from '@/assets/docs/audit/asset/img001.png'
import img_asset_2 from '@/assets/docs/audit/asset/img002.png'
import img_asset_3 from '@/assets/docs/audit/asset/img003.png'
import img_realname_1 from '@/assets/docs/audit/realname/img001.png'
import img_realname_2 from '@/assets/docs/audit/realname/img002.png'
import img_realname_3 from '@/assets/docs/audit/realname/img003.png'
import img_recharge_1 from '@/assets/docs/audit/recharge/img001.png'
import img_recharge_2 from '@/assets/docs/audit/recharge/img002.png'

export default {
  id: 'audit',
  name: '审核通道',
  icon: 'audit',
  summary: '用户提现（含 H5 申请与初审/终审/驳回）、便捷通道、提现异常处理、兑换Q值审核、qq审核、按需查看审批、资产审批、实名认证审核、前台充值审批',
  status: 'reference',
  chapters: [
    {
      id: 'c1',
      hidden: true,
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
        },
        {
          id: 'c1-s4',
          title: '用户端提交提现申请',
          menu: 'H5 用户端 → 我的 → 钱包 → 结算',
          desc: '用户在 H5「我的 → 钱包」点「结算」，输入结算金额并输入支付密码确认，提交提现申请，进入后台审核流程。',
          points: [],
          images: [img_withdraw_h5_1]
        },
        {
          id: 'c1-s5',
          title: '初审、终审与驳回',
          menu: '审核通道 → 用户提现',
          desc: '提现详情中点「初审通过」需输入登录密码二次验证；「终审通过」同样需登录密码确认，也可勾选紧急通道跳过复核与冷静期；「驳回」填备注后可直接确认，无需登录密码。',
          points: [
            '初审与终审均需输入登录密码二次确认',
            '紧急通道可跳过复核与冷静期',
            '驳回只需填写备注，无需登录密码'
          ],
          images: [img_withdraw_audit_1, img_withdraw_audit_2, img_withdraw_audit_3]
        }
      ]
    },
    {
      id: 'c2',
      hidden: true,
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
          desc: '进入「审核通道 → 提现异常处理」，页面展示待处理的代付异常单，点「处理」继续跟进；进内管系统查询该单是否出款，若出款失败则手动驳回。',
          points: ['进内管系统查询是否出款，出款失败则手动驳回'],
          images: [img_exception_1]
        }
      ]
    },
    {
      id: 'c4',
      title: '兑换Q值审核',
      summary: '用户兑换Q值申请的同意/拒绝审核',
      steps: [
        {
          id: 'c4-s1',
          title: '兑换Q值申请列表',
          menu: '审核通道 → 兑换Q值审核',
          desc: '进入「审核通道 → 兑换Q值审核」，展示用户提交的兑换Q值申请，可按时间、会员账号、审核类型等筛选，查看用户信息、金额、申请时间与状态。',
          points: [],
          images: [img_qvalue_1]
        },
        {
          id: 'c4-s2',
          title: '同意或拒绝审核',
          menu: '审核通道 → 兑换Q值审核',
          desc: '行内点「同意」并确定即审核通过；点「拒绝」需填写备注后才能确定。',
          points: ['拒绝审核必须填写备注'],
          images: [img_qvalue_2, img_qvalue_3]
        }
      ]
    },
    {
      id: 'c5',
      title: 'qq审核',
      summary: '用户qq申请的列表查询与审核操作',
      steps: [
        {
          id: 'c5-s1',
          title: 'qq申请审核',
          menu: '审核通道 → qq审核',
          desc: '进入「审核通道 → qq审核」，展示用户提交的qq申请，可按时间、会员账号、订单号等筛选定位订单，查看用户信息、订单、金额和状态，并操作审核权限。',
          points: [],
          images: [img_qq_audit_1]
        }
      ]
    },
    {
      id: 'c6',
      title: '按需查看审批',
      summary: '按状态和会员UID查询审批记录',
      steps: [
        {
          id: 'c6-s1',
          title: '按需查看审批列表',
          menu: '审核通道 → 按需查看审批',
          desc: '进入「审核通道 → 按需查看审批」，可按状态与会员UID查询，展示会员UID、申请字段、事由、状态、申请人、审批人、明文有效期、查看次数与提交时间。',
          points: [],
          images: [img_ondemand_1]
        }
      ]
    },
    {
      id: 'c7',
      title: '资产审批',
      summary: '后台资产加减申请的提交与财务审批',
      steps: [
        {
          id: 'c7-s1',
          title: '提交资产加减申请',
          menu: '用户 → 会员管理 → 资金 → 账户充减',
          desc: '在「用户 → 会员管理」找到会员，点「支出/充值」打开「账户充减」：选择充值类型，填写充值金额、工单号（积分类必填）与管理员备注，提交后创建审批单。',
          points: ['提交后仅创建审批单、不即时入账，需财务在资产审批复核'],
          images: [img_asset_2, img_asset_3]
        },
        {
          id: 'c7-s2',
          title: '财务资产审批',
          menu: '审核通道 → 资产审批',
          desc: '进入「审核通道 → 资产审批」，展示后台提交的资产加减申请，可按状态、来源、会员UID、关键词查询，查看审批来源、资金类型、会员、金额/数量、状态、申请人与提交时间，财务可执行「审核/终审/驳回」。',
          points: ['财务按需对审批单执行审核、终审或驳回'],
          images: [img_asset_1]
        }
      ]
    },
    {
      id: 'c8',
      title: '实名认证审核',
      summary: '实名认证申请的三态查看与审核操作',
      steps: [
        {
          id: 'c8-s1',
          title: '实名认证申请列表',
          menu: '用户 → 实名认证',
          desc: '进入「用户 → 实名认证」，按账号、昵称、真实姓名、身份证号筛选；列表分申请中/审核通过/审核驳回三态，展示会员信息、资金、证件、生日与实名状态。',
          points: ['审核通过后用户端显示「已认证」，驳回后用户可修改后重新提交'],
          images: [img_realname_1]
        },
        {
          id: 'c8-s2',
          title: '实名信息审核',
          menu: '用户 → 实名认证',
          desc: '点「实名认证」查看证件信息与协助人电话，选择审核结果（审核中/审核通过/审核不通过），不通过需备注原因，点「确定」提交。',
          points: [],
          images: [img_realname_2]
        },
        {
          id: 'c8-s3',
          title: '用户端提交实名认证',
          menu: 'H5 用户端 → 设置 → 实名认证',
          desc: '用户在 H5「设置 → 实名认证 → 我的申请」填写实名类型、真实姓名、身份证号、所属区域、身份证地址并上传证件正反面，点「提交」进入审核。',
          points: [],
          images: [img_realname_3]
        }
      ]
    },
    {
      id: 'c9',
      title: '前台充值审批',
      summary: '用户充值申请的查询与状态编辑',
      steps: [
        {
          id: 'c9-s1',
          title: '充值申请列表',
          menu: '用户 → 前台充值审批',
          desc: '进入「用户 → 前台充值审批」，按充值时间、账号、处理状态等筛选；列表分全部充值/未支付/已支付/支付中/支付失败，展示申请用户信息、订单、金额与状态。',
          points: ['未支付=未审批申请；已支付=通过并到账；支付失败=已通过但无法到账'],
          images: [img_recharge_1]
        },
        {
          id: 'c9-s2',
          title: '编辑充值状态',
          menu: '用户 → 前台充值审批',
          desc: '点「编辑」可修改订单状态（未支付/支付中/已支付/支付失败）并填写备注，点「确定」保存。',
          points: [],
          images: [img_recharge_2]
        }
      ]
    }
  ]
}
