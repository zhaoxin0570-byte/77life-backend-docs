// 七七生活后台 · 财务模块操作文档
// 来源：《财务主分类.md》（6 个分类、12 张截图）+《77平台模块分析》财务/（6 个功能文档、27 张截图：首页/资金流水/支付记录/退款记录/让利明细/财务报表）
import imgHome from '@/assets/docs/finance/finance-home-1.png'
import imgFund from '@/assets/docs/finance/finance-fund-1.png'
import imgPayment from '@/assets/docs/finance/finance-payment-1.png'
import imgDataView1 from '@/assets/docs/finance/finance-data-view-1.png'
import imgDataView2 from '@/assets/docs/finance/finance-data-view-2.png'
import imgChannel from '@/assets/docs/finance/finance-growth-channel-1.png'
import imgOverview1 from '@/assets/docs/finance/finance-growth-overview-1.png'
import imgOverview2 from '@/assets/docs/finance/finance-growth-overview-2.png'
import imgConfig1 from '@/assets/docs/finance/finance-growth-config-1.png'
import imgConfig2 from '@/assets/docs/finance/finance-growth-config-2.png'
import imgPool from '@/assets/docs/finance/finance-growth-pool-1.png'
import imgShare from '@/assets/docs/finance/finance-share-1.png'
import imgFundFlow1 from '@/assets/docs/finance/finance-growth-flow-1.png'
import imgFundFlow2 from '@/assets/docs/finance/finance-growth-flow-2.png'
import imgF5_1 from '@/assets/docs/finance/f5-home/img001.png'
import imgF5_2 from '@/assets/docs/finance/f5-home/img002.png'
import imgF5_3 from '@/assets/docs/finance/f5-home/img003.png'
import imgF5_4 from '@/assets/docs/finance/f5-home/img004.png'
import imgF6_1 from '@/assets/docs/finance/f6-fund-flow/img001.png'
import imgF6_2 from '@/assets/docs/finance/f6-fund-flow/img002.png'
import imgF6_3 from '@/assets/docs/finance/f6-fund-flow/img003.png'
import imgF7_1 from '@/assets/docs/finance/f7-payment/img001.png'
import imgF8_1 from '@/assets/docs/finance/f8-refund/img001.png'
import imgF10_1 from '@/assets/docs/finance/f10-benefit/img001.png'
import imgF10_2 from '@/assets/docs/finance/f10-benefit/img002.png'
import imgReport_1 from '@/assets/docs/finance/report/img001.png'

export default {
  id: 'finance',
  name: '财务',
  icon: 'finance',
  summary: '财务首页、资金流水、成长值与分享奖励的数据查询与配置',
  status: 'active',
  chapters: [
    {
      id: 'home',
      title: '首页',
      summary: '财务概览、数据中心与最近资金流水',
      steps: [
        {
          id: 'home-s1',
          title: '财务概览',
          menu: '财务 → 首页',
          desc: '进入「财务 → 首页」查看累计收支金额、财务功能入口与最近资金流水列表。',
          points: ['累计收支与资金流水页统计一致'],
          images: [imgHome]
        },
        {
          id: 'home-s2',
          title: '首页数据模块与排名',
          menu: '财务 → 首页',
          desc: '首页指标区展示注册量、会员量、订单量、营业额与资金记录，下方为各类数据中心、趋势图与排行榜。',
          points: [
            '指标卡右上角可刷新与切同日同比',
            '排行榜含佣金、团队、自营与供应商四个维度'
          ],
          images: [imgF5_1, imgF5_2, imgF5_3, imgF5_4]
        }
      ]
    },
    {
      id: 'fund',
      hidden: true,
      title: '资金流水',
      summary: '全平台账户资金变动明细查询',
      steps: [
        {
          id: 'fund-s1',
          title: '查询资金流水',
          menu: '财务 → 资金流水',
          desc: '进入「财务 → 资金流水」，按时间、资金类型、账期等条件筛选查询账户资金变动，并可导出。',
          points: ['资金类型为多选，可按需组合查询'],
          images: [imgFund, imgF6_1]
        },
        {
          id: 'fund-s2',
          title: '资金类型与明细说明',
          menu: '财务 → 资金流水 → 资金类型',
          desc: '资金类型为多选下拉，可查看所有类型的总明细，也可按类型筛选逐笔明细。',
          points: [
            '资金类型各有释义：订单收支、团队奖励、商品供货款等',
            '已失效类型：平级奖、固定分箱、供应商推荐奖励',
            '专员奖励与推荐专员奖励已拆分到独立账号'
          ],
          images: [imgF6_2, imgF6_3]
        }
      ]
    },
    {
      id: 'payment',
      title: '支付记录',
      summary: '第三方渠道支付记录查询',
      steps: [
        {
          id: 'payment-s1',
          title: '查询支付记录',
          menu: '财务 → 支付记录',
          desc: '进入「财务 → 支付记录」，按支付时间、账号或订单号筛选查询第三方渠道支付记录，可导出。',
          points: [],
          images: [imgPayment, imgF7_1]
        }
      ]
    },
    {
      id: 'refund',
      hidden: true,
      title: '退款记录',
      summary: '第三方支付后退款成功的记录查询',
      steps: [
        {
          id: 'refund-s1',
          title: '查询退款记录',
          menu: '财务 → 退款记录',
          desc: '进入「财务 → 退款记录」，按时间、平台号、订单号、退款状态等筛选查询退款成功记录，可导出。',
          points: [
            '仅含第三方与原生微信/支付宝支付的退款成功记录',
            '支持导出全部数据'
          ],
          images: [imgF8_1]
        }
      ]
    },
    {
      id: 'benefit',
      title: '让利明细',
      summary: '按团队或单个账户查询让利金额明细',
      steps: [
        {
          id: 'benefit-s1',
          title: '查询让利明细',
          menu: '财务 → 让利明细',
          desc: '进入「财务 → 让利明细」，按时间、用户描述或上级账户筛选查询让利金额，底部显示合计。',
          points: ['可查某账号的团队业绩，也可查单个账户自身让利'],
          images: [imgF10_1]
        },
        {
          id: 'benefit-s2',
          title: '查询示例',
          menu: '财务 → 让利明细',
          desc: '在「上级用户或账户」输入账号后查询：列表为该账号下各账户的让利明细，底部合计为其累计让利金额。',
          points: ['让利明细是成长值对账与团队业绩核算的数据来源'],
          images: [imgF10_2]
        }
      ]
    },
    {
      id: 'report',
      hidden: true,
      title: '财务报表',
      summary: '按日期汇总各资金账户的增减统计',
      steps: [
        {
          id: 'report-s1',
          title: '查看财务报表',
          menu: '财务 → 财务报表',
          desc: '进入「财务 → 财务报表」，按日期逐行查看各资金科目的当日增减与余额明细。',
          points: ['按日汇总，可核对各资金科目每日变动'],
          images: [imgReport_1]
        }
      ]
    },
    {
      id: 'data-view',
      hidden: true,
      title: '数据查看',
      summary: '按地区逐级下钻查看让利金额',
      steps: [
        {
          id: 'data-view-s1',
          title: '按地区查看让利金额',
          menu: '财务 → 数据查看',
          desc: '进入「财务 → 数据查看」，按支出日期查询各省让利金额，点击「下钻」逐级查看市/区数据。',
          points: [
            '可逐级下钻到省/市/区',
            '页面顶部显示当前层级'
          ],
          images: [imgDataView1, imgDataView2]
        }
      ]
    },
    {
      id: 'growth-channel',
      title: '渠道运营参数',
      group: '成长值',
      summary: '配置第三方渠道用户的成长值运营参数',
      steps: [
        {
          id: 'growth-channel',
          title: '渠道运营参数',
          menu: '财务 → 成长值 → 渠道运营参数',
          desc: '进入「财务 → 成长值 → 渠道运营参数」，维护第三方渠道的运营账号与运营占比，可新增、编辑、启停。',
          points: ['第三方渠道用户分配成长值本金时，需扣除对应运营占比'],
          images: [imgChannel]
        }
      ]
    },
    {
      id: 'growth-overview',
      title: '数据概览',
      group: '成长值',
      summary: '成长值核心指标、涨幅走势与星级升级记录',
      steps: [
        {
          id: 'growth-overview',
          title: '数据概览',
          menu: '财务 → 成长值 → 数据概览',
          desc: '进入「财务 → 成长值 → 数据概览」，查看成长值核心指标、近 12 个月涨幅与走势图、会员等级分布及星级升级记录。',
          points: ['星级升级记录可按时间、用户、操作员等筛选'],
          images: [imgOverview1, imgOverview2]
        }
      ]
    },
    {
      id: 'growth-config',
      title: '配置',
      group: '成长值',
      summary: '单价与涨幅配置、手动日批分配',
      steps: [
        {
          id: 'growth-config',
          title: '配置',
          menu: '财务 → 成长值 → 配置',
          desc: '进入「财务 → 成长值 → 配置」设置涨幅与基准价并保存；在「手动日批分配」选择结算日与批次周期后执行。',
          points: [
            '日批为每日凌晨 12:00 自动执行的定时任务，时批仅测试用',
            '日批执行后按让利比例与成长值分配比例为订单分配成长值',
            '超管在生产环境非特殊情况禁止执行日批'
          ],
          images: [imgConfig1, imgConfig2]
        }
      ]
    },
    {
      id: 'growth-flow',
      title: '成长值',
      group: '成长值',
      summary: '日批计入成长值体系的订单与子单明细',
      steps: [
        {
          id: 'growth-flow-s1',
          title: '成长值资金流向',
          menu: '财务 → 成长值 → 资金流向',
          desc: '进入「财务 → 成长值 → 资金流向」，查看日批后计入成长值体系的订单明细，点击「展开单号」看子单。',
          points: ['子单展开后展示各子单的成长值、让利金额、单P与状态'],
          images: [imgFundFlow1, imgFundFlow2]
        }
      ]
    },
    {
      id: 'growth-pool',
      title: '生态调节池',
      group: '成长值',
      summary: '调节池余额、每期摊销明细与排队规则',
      steps: [
        {
          id: 'growth-pool',
          title: '生态调节池',
          menu: '财务 → 成长值 → 生态调节池',
          desc: '进入「财务 → 成长值 → 生态调节池」，查看调节池余额、今日利润等指标、排队规则与每期摊销明细，支持导出。',
          points: [
            '明细支持按日期区间与订单号筛选后导出',
            '「排队期」为今日已退出账户（当前为 Mock 数据）'
          ],
          images: [imgPool]
        }
      ]
    },
    {
      id: 'share',
      title: '分享奖励',
      summary: '分享链接注册用户的数据展示与奖励明细',
      steps: [
        {
          id: 'share-s1',
          title: '查看分享奖励数据',
          menu: '财务 → 分享奖励',
          desc: '进入「财务 → 分享奖励」，查看本月分享奖励总额、注册人数与分享奖励明细，支持筛选与导出。',
          points: ['各渠道分享链接注册的用户在此展示数据'],
          images: [imgShare]
        }
      ]
    }
  ]
}
