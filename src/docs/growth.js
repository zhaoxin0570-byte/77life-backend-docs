// 七七生活 · 成长值模块完整操作流程
// 来源：《成长值模块操作流程图.docx》（原文档 23 张截图整理为 7 章 21 步；其中「成长值资金流向」截图见财务模块）+ 成长值专区规则定义截图（共 8 章 23 步）
import img01 from '@/assets/docs/image1.png'
import img02 from '@/assets/docs/image2.png'
import img03 from '@/assets/docs/image3.png'
import img04 from '@/assets/docs/image4.png'
import img05 from '@/assets/docs/image5.png'
import img06 from '@/assets/docs/image6.png'
import img07 from '@/assets/docs/image7.png'
import img08 from '@/assets/docs/image8.png'
import img09 from '@/assets/docs/image9.png'
import img10 from '@/assets/docs/image10.png'
import img11 from '@/assets/docs/image11.png'
import img12 from '@/assets/docs/image12.png'
import img13 from '@/assets/docs/image13.png'
import img14 from '@/assets/docs/image14.png'
import img15 from '@/assets/docs/image15.png'
import img16 from '@/assets/docs/image16.png'
import img17 from '@/assets/docs/image17.png'
import img18 from '@/assets/docs/image18.png'
import img19 from '@/assets/docs/image19.png'
import img20 from '@/assets/docs/image20.png'
import img21 from '@/assets/docs/image21.png'
import img22 from '@/assets/docs/image22.png'
import imgZoneRule from '@/assets/docs/growth-zone-rule.png'

export const chapters = [
  {
    id: 'rule',
    title: '成长值专区规则定义',
    summary: '特惠区/特价区的定位、支付方式与让利规则',
    steps: [
      {
        id: 'rule-s1',
        title: '专区入口与说明',
        menu: 'H5 首页 → 特惠专区',
        desc: '用户端（H5）首页点击「特惠专区」进入「成长值专区」。专区说明：专区商品价格对标京东售价，平台助力合作商家销售，商品让利金额的 70% 进入成长值体系。',
        points: ['专区商品价格对标京东售价，让利金额的 70% 进入成长值体系'],
        images: [imgZoneRule]
      },
      {
        id: 'rule-s2',
        title: '特惠区与特价区规则',
        menu: 'H5 成长值专区 → 特惠区 / 特价区',
        desc: '成长值专区分为特惠区与特价区：特惠区用户可选择 30% 的权重/U权重 + U余额/钱包/抵扣券组合支付；特价区只能使用 77 侧钱包支付。',
        points: [
          '让利规则：特惠区商家让利 60%，特价区商家让利 70%',
          '让利计入成长值体系：100 元商品在特惠区让利 60，该 60 按比例进行成长值分配'
        ],
        images: []
      }
    ]
  },
  {
    id: 'ch1',
    title: '商品上架与让利配置',
    summary: '添加商品并设置 SKU 价格与让利比例',
    steps: [
      {
        id: 'ch1-s1',
        title: '添加商品（基本信息）',
        menu: '商户 → 供应商商品管理 → 添加商品',
        desc: '进入「商户 → 供应商商品管理」点击添加商品，填写商品栏目、名称、副标题与市场价格，选择供应商并上传图片、选 SKU 属性。',
        points: [
          '商品栏目可点「+」新增下级分类',
          '商品名称即标题，建议做好关键词组合'
        ],
        images: [img02, img03]
      },
      {
        id: 'ch1-s2',
        title: '配置 SKU 与价格',
        menu: '添加商品 → SKU 属性',
        desc: '下滑到 SKU 区域，填写销售价、销售成本、库存与商品编码；如需按会员等级定价，点击「编辑会员等级价格」设置。',
        points: [
          'SKU 按重量自动计算运费',
          '销售价为用户实付价，销售成本用于利润核算'
        ],
        images: [img04]
      },
      {
        id: 'ch1-s3',
        title: '设置让利比例并保存',
        menu: '添加商品 → 商品让利比例',
        desc: '按千分比填写「商品让利比例」（700 = 70%），设置虚拟销量与限购，按需开启上架、发票、免邮等开关后保存。',
        points: [
          '让利比例为千分比：700 = 70%',
          '让利金额按规则进入成长值体系，是对账来源'
        ],
        images: [img05]
      },
      {
        id: 'ch1-s4',
        title: '商品入列供应商商品管理',
        menu: '商户 → 供应商商品管理',
        desc: '保存后商品进入「供应商商品管理」列表，可查看销售信息与上下架状态，并按分类、价格、成交量等筛选。',
        points: [
          '可投入活动商品、一键置顶与批量上下架',
          '支持批量导出'
        ],
        images: [img06, img01]
      }
    ]
  },
  {
    id: 'ch2',
    title: '特惠专区配置',
    summary: '把商品加入特惠专区并配置子专区分类',
    steps: [
      {
        id: 'ch2-s1',
        title: '编辑特惠专区',
        menu: '商户 → 特惠专区管理 → 编辑',
        desc: '进入「商户 → 特惠专区管理」，在目标专区行点「编辑」，设置专区名称、横幅商品并查看已选商品。',
        points: ['专区支持上架/下架与排序'],
        images: [img07]
      },
      {
        id: 'ch2-s2',
        title: '选择商品加入特区',
        menu: '编辑特惠专区 → 选择商品',
        desc: '在「选择商品」弹窗按商品名/ID 搜索并勾选目标商品，点击「确定」。',
        points: ['已选数量较多时支持分页浏览'],
        images: [img08]
      },
      {
        id: 'ch2-s3',
        title: '配置子专区分类并保存',
        menu: '已选商品 → 子专区分类',
        desc: '在「已选商品 → 子专区分类」调整各分类展示名与排序，下滑点「保存」生效。',
        points: ['排序数值越小越靠前展示'],
        images: [img09]
      }
    ]
  },
  {
    id: 'ch3',
    title: 'H5 端浏览与下单',
    summary: '用户在 H5 特惠专区下单并查看成长值信息',
    steps: [
      {
        id: 'ch3-s1',
        title: '进入特惠专区',
        menu: 'H5 首页 → 特惠专区',
        desc: 'H5 首页展示贡献等级与专区入口，点击「特惠专区」图标进入。',
        points: [],
        images: [img10]
      },
      {
        id: 'ch3-s2',
        title: '选择商品下单',
        menu: 'H5 成长值专区',
        desc: '在专区中浏览商品，点击目标商品进入下单流程。',
        points: ['专区价格对标京东市场价，平台助力商家销售'],
        images: [img11]
      },
      {
        id: 'ch3-s3',
        title: '确认订单页查看成长值信息',
        menu: 'H5 确认订单',
        desc: '在「确认订单」页查看本单成长值信息（星级、成长值系数、到期日、入星级进度），确认实付金额后提交订单。',
        points: [
          '成长值份额在确认收货后产生',
          '12 个月内达到系数上限或到期自动转换'
        ],
        images: [img13]
      },
      {
        id: 'ch3-s4',
        title: '钱包余额不足时后台充值',
        menu: '用户 → 会员管理 → 详情 → 资金 → 账户充减',
        desc: 'H5 支付时钱包余额不足，可在后台「用户 → 会员管理 → 详情 → 资金 → 账户充减」为该用户充值。',
        points: [
          '账户充减只创建审批单，不即时入账，需走审批',
          '工号积分类必填，其他建议填写'
        ],
        images: [img12]
      }
    ]
  },
  {
    id: 'ch4',
    title: '订单发货与确认收货',
    summary: '后台发货，用户在 H5 订单详情确认收货',
    steps: [
      {
        id: 'ch4-s1',
        title: '供应商订单页面发货',
        menu: '商户 → 供应商订单管理 → 发货',
        desc: '进入「商户 → 供应商订单管理」，按订单状态筛选找到目标订单，点「发货」填写物流信息。',
        points: ['支持导出与批量导出'],
        images: [img14]
      },
      {
        id: 'ch4-s2',
        title: 'H5 订单详情确认收货',
        menu: 'H5 订单详情',
        desc: '用户在 H5「订单详情」查看地址与物流，点「确认收货」并确定，订单流转为已完成。',
        points: [],
        images: [img15]
      }
    ]
  },
  {
    id: 'ch5',
    title: '批处理配置与执行',
    summary: '设置涨幅与执行时间，按时批/日批执行批处理',
    steps: [
      {
        id: 'ch5-s1',
        title: '配置涨幅与执行时间',
        menu: '财务 → 配置',
        desc: '进入「财务 → 配置」，在「单价与涨幅」区域设置涨幅、基准价等参数并保存，再在「手动日批分配」选择执行时间。',
        points: ['配置修改后需保存生效'],
        images: [img16]
      },
      {
        id: 'ch5-s2',
        title: '执行时批 / 日批',
        menu: '财务 → 配置 → 手动日批分配',
        desc: '配置完成后点击「执行时批」测试，正式运行点击「执行日批」。',
        points: [
          '时批是测试用的，正式需要日批',
          '批处理执行记录可在配置页下方查看'
        ],
        images: [img16]
      }
    ]
  },
  {
    id: 'ch6',
    title: '成长值分配与对账',
    summary: '按订单查看成长值分配明细并对账',
    steps: [
      {
        id: 'ch6-s1',
        title: '查看订单成长值分配明细',
        menu: '商户 → 供应商订单管理 → 成长值明细',
        desc: '批处理完成后，在「供应商订单管理」找到目标订单，点操作列「成长值明细」查看分配情况。',
        points: [],
        images: [img17]
      },
      {
        id: 'ch6-s2',
        title: '成长值对账 · 分成明细',
        menu: '成长值对账（按单）→ 分成明细',
        desc: '「成长值对账（按单）」弹窗的「分成明细」页签展示各角色本次日批分配的成长值与消费金额等。',
        points: ['对账规则：分配单-日批时按角色回归，含排队补贴'],
        images: [img18]
      },
      {
        id: 'ch6-s3',
        title: '成长值对账 · 调节池',
        menu: '成长值对账（按单）→ 调节池',
        desc: '「调节池」页签展示相关账号的入池本金、已释放、剩余、释放次数与状态。',
        points: ['用于管理用户入池本金的释放与剩余'],
        images: [img19]
      },
      {
        id: 'ch6-s4',
        title: '成长值对账 · 释放明细',
        menu: '成长值对账（按单）→ 释放明细',
        desc: '「释放明细」页签展示该订单每次日批后的释放记录，含账号、角色、批次、本金与状态。',
        points: [],
        images: [img20]
      }
    ]
  },
  {
    id: 'ch7',
    title: '权益池与数据查看',
    summary: '查看商户成长权益池与数据概览（升星记录）',
    steps: [
      {
        id: 'ch7-s1',
        title: '商户成长权益池',
        menu: '商家端 → 商户成长权益池',
        desc: '在商家端「商户成长权益池」查看权益总额、成长值价格、生态调节池等指标与每日释放记录。',
        points: ['可查看调节池释放详情与资金池入池金额'],
        images: [img21]
      },
      {
        id: 'ch7-s2',
        title: '数据概览与升星记录',
        menu: '财务 → 数据概览',
        desc: '进入「财务 → 数据概览」，查看今日新增、调节池本金、已释放总额、7 天内到期数等指标与近 12 个月走势、会员等级分布。',
        points: ['详情页可查看用户升星记录与调节池详情'],
        images: [img22]
      }
    ]
  }
]

// 模块导出（新增模块时沿用此结构）
export default {
  id: 'growth',
  name: '成长值模块完整操作流程',
  icon: 'growth',
  summary: '专区规则定义 → 商品上架 → 让利配置 → 特惠专区 → H5 下单 → 发货收货 → 批处理 → 对账 → 权益池',
  status: 'active', // active=已上线 / planned=待完善
  chapters
}
