// 七七生活后台 · 后台菜单总览
// 来源：《77平台模块分析》商城\商城.docx（44 张菜单截图）
import img_overview_1 from '@/assets/docs/overview/overview/img001.png'
import img_overview_2 from '@/assets/docs/overview/overview/img002.png'
import img_overview_3 from '@/assets/docs/overview/overview/img003.png'
import img_overview_4 from '@/assets/docs/overview/overview/img004.png'
import img_overview_5 from '@/assets/docs/overview/overview/img005.png'
import img_overview_6 from '@/assets/docs/overview/overview/img006.png'
import img_overview_7 from '@/assets/docs/overview/overview/img007.png'
import img_overview_8 from '@/assets/docs/overview/overview/img008.png'
import img_overview_9 from '@/assets/docs/overview/overview/img009.png'
import img_overview_10 from '@/assets/docs/overview/overview/img010.png'
import img_overview_11 from '@/assets/docs/overview/overview/img011.png'
import img_overview_12 from '@/assets/docs/overview/overview/img012.png'
import img_overview_13 from '@/assets/docs/overview/overview/img013.png'
import img_overview_14 from '@/assets/docs/overview/overview/img014.png'
import img_overview_15 from '@/assets/docs/overview/overview/img015.png'
import img_overview_16 from '@/assets/docs/overview/overview/img016.png'
import img_overview_17 from '@/assets/docs/overview/overview/img017.png'
import img_overview_18 from '@/assets/docs/overview/overview/img018.png'
import img_overview_19 from '@/assets/docs/overview/overview/img019.png'
import img_overview_20 from '@/assets/docs/overview/overview/img020.png'
import img_overview_21 from '@/assets/docs/overview/overview/img021.png'
import img_overview_22 from '@/assets/docs/overview/overview/img022.png'
import img_overview_23 from '@/assets/docs/overview/overview/img023.png'
import img_overview_24 from '@/assets/docs/overview/overview/img024.png'
import img_overview_25 from '@/assets/docs/overview/overview/img025.png'
import img_overview_26 from '@/assets/docs/overview/overview/img026.png'
import img_overview_27 from '@/assets/docs/overview/overview/img027.png'
import img_overview_28 from '@/assets/docs/overview/overview/img028.png'
import img_overview_29 from '@/assets/docs/overview/overview/img029.png'
import img_overview_30 from '@/assets/docs/overview/overview/img030.png'
import img_overview_31 from '@/assets/docs/overview/overview/img031.png'
import img_overview_32 from '@/assets/docs/overview/overview/img032.png'
import img_overview_33 from '@/assets/docs/overview/overview/img033.png'
import img_overview_34 from '@/assets/docs/overview/overview/img034.png'
import img_overview_35 from '@/assets/docs/overview/overview/img035.png'
import img_overview_36 from '@/assets/docs/overview/overview/img036.png'
import img_overview_37 from '@/assets/docs/overview/overview/img037.png'
import img_overview_38 from '@/assets/docs/overview/overview/img038.png'
import img_overview_39 from '@/assets/docs/overview/overview/img039.png'
import img_overview_40 from '@/assets/docs/overview/overview/img040.png'
import img_overview_41 from '@/assets/docs/overview/overview/img041.png'
import img_overview_42 from '@/assets/docs/overview/overview/img042.png'
import img_overview_43 from '@/assets/docs/overview/overview/img043.png'
import img_overview_44 from '@/assets/docs/overview/overview/img044.png'

export default {
  id: 'overview',
  name: '后台菜单总览',
  icon: 'grid',
  summary: '后台左侧菜单逐项截图总览，每项附页面截图与备注',
  status: 'reference',
  chapters: [
    {
      id: 'c1',
      title: '商城',
      summary: '商城菜单下商品、订单、评价等管理页面截图',
      steps: [
        {
          id: 'c1-s1',
          title: '商品管理',
          menu: '商城 → 商品管理',
          desc: '进入「商城 → 商品管理」，支持按分类、名称、商家等筛选商品，可添加、采集与导入导出；当前暂无数据。',
          points: ['部分商品在 app 重复出现，其中一个显示已售罄'],
          images: [img_overview_1]
        },
        {
          id: 'c1-s2',
          title: '会员商品',
          menu: '商城 → 会员商品',
          desc: '进入「商城 → 会员商品」查看会员商品列表，可按分类、名称、价格筛选，操作栏支持编辑、拼团与删除。',
          points: [],
          images: [img_overview_2]
        },
        {
          id: 'c1-s3',
          title: '积分兑换商品',
          menu: '商城 → 积分兑换商品',
          desc: '进入「商城 → 积分兑换商品」查看可用贡献值兑换的商品列表，筛选与操作同会员商品，另支持预览。',
          points: [],
          images: [img_overview_3]
        },
        {
          id: 'c1-s4',
          title: '商品分类',
          menu: '商城 → 商品分类',
          desc: '进入「商城 → 商品分类」维护商品分类与导航图片，可添加、添加子分类、编辑或删除。',
          points: ['无合适分类时可在此添加分类和导航图片'],
          images: [img_overview_4]
        },
        {
          id: 'c1-s5',
          title: '订单管理',
          menu: '商城 → 订单管理',
          desc: '进入「商城 → 订单管理」查询平台自营商品订单，可按时间、订单号、收货人、交易状态筛选并导出。',
          points: ['仅平台自营商品订单'],
          images: [img_overview_5]
        },
        {
          id: 'c1-s6',
          title: '商品SKU管理',
          menu: '商城 → 商品SKU管理',
          desc: '进入「商城 → 商品SKU管理」维护商品 SKU 属性分类，可添加、编辑或删除。',
          points: ['可添加 SKU 属性，实际运用较少'],
          images: [img_overview_6]
        },
        {
          id: 'c1-s7',
          title: '商品评价',
          menu: '商城 → 商品评价',
          desc: '进入「商城 → 商品评价」查询并审核商品评价，可按评价类型、用户、内容筛选，支持置顶与删除。',
          points: [],
          images: [img_overview_7]
        },
        {
          id: 'c1-s8',
          title: '购物车管理',
          menu: '商城 → 购物车管理',
          desc: '进入「商城 → 购物车管理」查看用户购物车商品，可按时间、会员、商品标题筛选并删除。',
          points: [],
          images: [img_overview_8]
        },
        {
          id: 'c1-s9',
          title: '退换货申请',
          menu: '商城 → 退换货申请',
          desc: '进入「商城 → 退换货申请」查看退换货申请，可按订单号、会员、退货状态筛选，操作栏执行允许或驳回退货。',
          points: [],
          images: [img_overview_9]
        }
      ]
    },
    {
      id: 'c2',
      title: '商户',
      summary: '供应商商品订单与入驻审核页面截图',
      steps: [
        {
          id: 'c2-s1',
          title: '供应商',
          menu: '商户 → 供应商',
          desc: '进入「商户 → 供应商」管理平台供应商，可按账号、店铺、手机号搜索，操作栏支持编辑、提现与授权。',
          points: ['实际运用不到'],
          images: [img_overview_10]
        },
        {
          id: 'c2-s2',
          title: '供应商商品管理',
          menu: '商户 → 供应商商品管理',
          desc: '进入「商户 → 供应商商品管理」管理各供应商上传的商品，可按商家、管理员、手机号查询并审核。',
          points: [],
          images: [img_overview_11]
        },
        {
          id: 'c2-s3',
          title: '供应商商品管理（2）',
          menu: '商户 → 供应商商品管理（2）',
          desc: '「供应商商品管理」第二屏，按商品类型查看供应商商品，操作栏支持编辑、促销与删除。',
          points: [],
          images: [img_overview_12]
        },
        {
          id: 'c2-s4',
          title: '大额支付',
          menu: '商户 → 大额支付',
          desc: '进入「商户 → 大额支付」管理大额支付订单，可按商户、推广员账号与订单类型筛选，并导出订单。',
          points: [],
          images: [img_overview_13]
        },
        {
          id: 'c2-s5',
          title: '供应商订单管理',
          menu: '商户 → 供应商订单管理',
          desc: '进入「商户 → 供应商订单管理」查询供应商订单，支持查看分账、重新分账与打印订单。',
          points: [],
          images: [img_overview_14]
        },
        {
          id: 'c2-s6',
          title: '申请供应商',
          menu: '商户 → 申请供应商',
          desc: '进入「商户 → 申请供应商」审核供应商入驻申请，可按账号、手机号与审核状态筛选。',
          points: [],
          images: [img_overview_15]
        }
      ]
    },
    {
      id: 'c3',
      title: '模块大市场',
      summary: '模块大市场与限时特惠相关页面截图',
      steps: [
        {
          id: 'c3-s1',
          title: '模块大市场',
          menu: '模块大市场 → 模块大市场',
          desc: '进入「模块大市场 → 模块大市场」按分类浏览可开通模块，每个模块附简介，可查看或编辑。',
          points: ['点击查看提示地址与栏目地址不匹配，实际并未应用'],
          images: [img_overview_16]
        },
        {
          id: 'c3-s2',
          title: '我的模块',
          menu: '模块大市场 → 我的模块',
          desc: '进入「模块大市场 → 我的模块」查看已配置模块卡片，每个模块附简介，可查看或编辑。',
          points: [],
          images: [img_overview_17]
        },
        {
          id: 'c3-s3',
          title: '限时特惠',
          menu: '模块大市场 → 我的模块 → 限时特惠',
          desc: '在「我的模块」进入「限时特惠」查看相关模块卡片，左侧展开限时特惠商品与设置入口。',
          points: [],
          images: [img_overview_18]
        },
        {
          id: 'c3-s4',
          title: '限时特惠-商品信息',
          menu: '模块大市场 → 限时特惠 → 限时特惠商品',
          desc: '进入「限时特惠 → 限时特惠商品」查看参与活动的商品列表，可按分类、名称、价格筛选。',
          points: [],
          images: [img_overview_19]
        },
        {
          id: 'c3-s5',
          title: '限时特惠-促销处理',
          menu: '模块大市场 → 限时特惠 → 限时特惠设置',
          desc: '进入「限时特惠 → 限时特惠设置」配置活动开始与结束时间，对商品进行限时促销，当前暂无数据。',
          points: [],
          images: [img_overview_20]
        }
      ]
    },
    {
      id: 'c4',
      title: '视频/心愿/确认函',
      summary: '视频、心愿、确认函与清仓产品页面截图',
      steps: [
        {
          id: 'c4-s1',
          title: '视频分类',
          menu: '视频/心愿/确认函 → 视频分类',
          desc: '进入「视频/心愿/确认函 → 视频分类」维护视频分类目录，可添加、编辑或删除。',
          points: [],
          images: [img_overview_21]
        },
        {
          id: 'c4-s2',
          title: '视频列表',
          menu: '视频/心愿/确认函 → 视频列表',
          desc: '进入「视频/心愿/确认函 → 视频列表」管理各分类下的视频，可按标题筛选并编辑、删除。',
          points: [],
          images: [img_overview_22]
        },
        {
          id: 'c4-s3',
          title: '心愿列表',
          menu: '视频/心愿/确认函 → 心愿列表',
          desc: '进入「视频/心愿/确认函 → 心愿列表」查看并审核用户心愿，按审核状态分类展示，当前暂无数据。',
          points: [],
          images: [img_overview_23]
        },
        {
          id: 'c4-s4',
          title: '确认函记录',
          menu: '视频/心愿/确认函 → 确认函记录',
          desc: '进入「视频/心愿/确认函 → 确认函记录」查看用户确认函签署记录，共 2280 条，可分页查看或删除。',
          points: [],
          images: [img_overview_24]
        },
        {
          id: 'c4-s5',
          title: '清仓产品',
          menu: '视频/心愿/确认函 → 清仓产品',
          desc: '进入「视频/心愿/确认函 → 清仓产品」审核商家提交心愿方案后的清仓商品，可按分类、名称、价格筛选。',
          points: [],
          images: [img_overview_25]
        }
      ]
    },
    {
      id: 'c5',
      title: '表单',
      summary: '表单设置与服务代表申请审核页面截图',
      steps: [
        {
          id: 'c5-s1',
          title: '表列表',
          menu: '表单 → 表列表',
          desc: '进入「表单 → 表列表」维护服务代表申请表单，可查看、管理字段框、编辑或删除。',
          points: [],
          images: [img_overview_26]
        },
        {
          id: 'c5-s2',
          title: '表管理',
          menu: '表单 → 表管理',
          desc: '进入「表单 → 表管理」审核服务代表申请，可按会员账号、审核状态、地区筛选并导出。',
          points: ['服务代表申请审核，实际并未应用'],
          images: [img_overview_27]
        }
      ]
    },
    {
      id: 'c6',
      title: '通知',
      summary: '通知消息、通知中心与资金流水页面截图',
      steps: [
        {
          id: 'c6-s1',
          title: '通知消息',
          menu: '通知 → 通知消息',
          desc: '点击后台右上角带红点的通知铃铛，展开查看「通知提示」消息（截图页面为清仓产品）。',
          points: [],
          images: [img_overview_28]
        },
        {
          id: 'c6-s2',
          title: '前往通知中心',
          menu: '通知 → 前往通知中心',
          desc: '点击通知铃铛弹出「通知」面板，可查看提现申请等详情、全部已读，或进入通知中心查看全部记录。',
          points: [],
          images: [img_overview_29]
        },
        {
          id: 'c6-s3',
          title: '资金流水',
          menu: '财务 → 资金流水',
          desc: '在顶部「财务 → 资金流水」查询用户资金流水，可按时间、账户类型、项目类型筛选并导出。',
          points: ['页面归属「财务」菜单，用于跟踪提现等资金变动'],
          images: [img_overview_30]
        }
      ]
    },
    {
      id: 'c7',
      title: '设置',
      summary: '主题模板、快递物流与公告设置页面截图',
      steps: [
        {
          id: 'c7-s1',
          title: '主题模板',
          menu: '设置 → 主题模板',
          desc: '进入「设置 → 主题模板」切换商城皮肤主题，可预览、编辑、复制或删除模板。',
          points: [],
          images: [img_overview_31]
        },
        {
          id: 'c7-s2',
          title: '快递物流',
          menu: '设置 → 快递物流',
          desc: '进入「设置 → 快递物流」配置运费规则，包括合作快递、区域价格、首重续重与包邮设置。',
          points: [],
          images: [img_overview_32]
        },
        {
          id: 'c7-s3',
          title: '公告',
          menu: '设置 → 公告',
          desc: '进入「设置 → 公告」配置商城首页公告，可设文字/图片公告、标题、内容与开关，编辑后自动保存。',
          points: [],
          images: [img_overview_33]
        }
      ]
    },
    {
      id: 'c8',
      title: '用户',
      summary: '会员、实名认证、消息推送与反馈页面截图',
      steps: [
        {
          id: 'c8-s1',
          title: '会员管理',
          menu: '用户 → 会员管理',
          desc: '进入「用户 → 会员管理」查询与管理会员，支持按账号、手机号、等级、地区筛选并查看上下级。',
          points: [],
          images: [img_overview_34]
        },
        {
          id: 'c8-s2',
          title: '实名认证',
          menu: '用户 → 实名认证',
          desc: '进入「用户 → 实名认证」审核实名认证申请，按申请中、通过、驳回分类展示并筛选。',
          points: [],
          images: [img_overview_35]
        },
        {
          id: 'c8-s3',
          title: '站内信',
          menu: '用户 → 站内信',
          desc: '进入「用户 → 站内信」管理平台站内信息，可按内容、会员账号筛选并删除。',
          points: [],
          images: [img_overview_36]
        },
        {
          id: 'c8-s4',
          title: 'app推送',
          menu: '用户 → APP推送',
          desc: '进入「用户 → APP推送」管理 App 推送消息，可添加、按时间与内容筛选并删除。',
          points: [],
          images: [img_overview_37]
        },
        {
          id: 'c8-s5',
          title: '用户反馈',
          menu: '用户 → 用户反馈',
          desc: '进入「用户 → 用户反馈」查看用户反馈的问题，可按反馈位置、内容筛选并审核。',
          points: [],
          images: [img_overview_38]
        },
        {
          id: 'c8-s6',
          title: '活动消息',
          menu: '用户 → 活动消息',
          desc: '进入「用户 → 活动消息」管理站内活动消息，可添加、按时间与会员账号筛选，当前暂无数据。',
          points: [],
          images: [img_overview_39]
        }
      ]
    },
    {
      id: 'c9',
      title: '资讯',
      summary: '文章、分类、协议与新闻广告页面截图',
      steps: [
        {
          id: 'c9-s1',
          title: '文章',
          menu: '资讯 → 文章',
          desc: '进入「资讯 → 文章」管理 App 内的协议、介绍等文章，可按分类、标题筛选并编辑或删除。',
          points: [],
          images: [img_overview_40]
        },
        {
          id: 'c9-s2',
          title: '分类',
          menu: '资讯 → 分类',
          desc: '进入「资讯 → 分类」设置文章分类与图标，可添加、编辑或删除。',
          points: [],
          images: [img_overview_41]
        },
        {
          id: 'c9-s3',
          title: '协议',
          menu: '资讯 → 协议',
          desc: '进入「资讯 → 协议」维护协议内容，可按标题筛选并置顶、编辑或删除。',
          points: [],
          images: [img_overview_42]
        },
        {
          id: 'c9-s4',
          title: '新闻广告',
          menu: '资讯 → 新闻广告',
          desc: '进入「资讯 → 新闻广告」管理新闻广告内容，可添加、编辑与设置开关，当前暂无数据。',
          points: ['未实际运用，功能不知'],
          images: [img_overview_43]
        },
        {
          id: 'c9-s5',
          title: '评价列表',
          menu: '资讯 → 评价列表',
          desc: '进入「资讯 → 评价列表」查看并管理 App「帮助中心」的用户评论，支持删除与添加跟评。',
          points: [],
          images: [img_overview_44]
        }
      ]
    }
  ]
}