// 七七生活后台 · 商城
// 来源：《77平台模块分析》商城/（11 个功能文档、21 张截图）
import img_c1_goods_1 from '@/assets/docs/mall/c1-goods/img001.png'
import img_c2_vip_goods_1 from '@/assets/docs/mall/c2-vip-goods/img001.png'
import img_c3_points_goods_1 from '@/assets/docs/mall/c3-points-goods/img001.png'
import img_c3_points_goods_2 from '@/assets/docs/mall/c3-points-goods/img002.png'
import img_c4_category_1 from '@/assets/docs/mall/c4-category/img001.png'
import img_c4_category_2 from '@/assets/docs/mall/c4-category/img002.png'
import img_c4_category_3 from '@/assets/docs/mall/c4-category/img003.png'
import img_c5_order_1 from '@/assets/docs/mall/c5-order/img001.png'
import img_c6_sku_1 from '@/assets/docs/mall/c6-sku/img001.png'
import img_c6_sku_2 from '@/assets/docs/mall/c6-sku/img002.png'
import img_c6_sku_3 from '@/assets/docs/mall/c6-sku/img003.png'
import img_c7_comment_1 from '@/assets/docs/mall/c7-comment/img001.png'
import img_c7_comment_2 from '@/assets/docs/mall/c7-comment/img002.png'
import img_c7_comment_3 from '@/assets/docs/mall/c7-comment/img003.png'
import img_c7_comment_4 from '@/assets/docs/mall/c7-comment/img004.png'
import img_c8_redpacket_1 from '@/assets/docs/mall/c8-redpacket/img001.png'
import img_c9_redpacket_grant_1 from '@/assets/docs/mall/c9-redpacket-grant/img001.png'
import img_c9_redpacket_grant_2 from '@/assets/docs/mall/c9-redpacket-grant/img002.png'
import img_c10_cart_1 from '@/assets/docs/mall/c10-cart/img001.png'
import img_c11_return_1 from '@/assets/docs/mall/c11-return/img001.png'
import img_c11_return_2 from '@/assets/docs/mall/c11-return/img002.png'

export default {
  id: 'mall',
  name: '商城',
  icon: 'bag',
  summary: '商品、分类、订单、SKU、评价、购物车与退换货等页面说明（红包与红包发放不在使用）',
  status: 'reference',
  chapters: [
    {
      id: 'c1',
      title: '商品管理',
      summary: '自营商品筛选、批量操作与导入导出',
      steps: [
        {
          id: 'c1-s1',
          title: '商品列表与管理',
          menu: '商城 → 商品管理',
          desc: '进入「商城 → 商品管理」，可按商品分类、名称、店铺等条件筛选商品，支持添加、采集与导入导出，并可对商品批量调整、上下架与删除。',
          points: ['当前暂无自营商品，页面提示暂没有自营商品'],
          images: [img_c1_goods_1]
        }
      ]
    },
    {
      id: 'c2',
      title: '会员商品',
      summary: '会员专享商品筛选与上下架管理',
      steps: [
        {
          id: 'c2-s1',
          title: '会员商品列表',
          menu: '商城 → 会员商品',
          desc: '进入「商城 → 会员商品」，可按分类、名称、价格等条件筛选会员商品，操作列支持上架、审核、二级分类与删除。',
          points: ['截图标注该模块暂不在使用'],
          images: [img_c2_vip_goods_1]
        }
      ]
    },
    {
      id: 'c3',
      title: '积分兑换商品',
      summary: '积分兑换商品筛选与兑换数值编辑',
      steps: [
        {
          id: 'c3-s1',
          title: '积分兑换商品列表',
          menu: '商城 → 积分兑换商品',
          desc: '进入「商城 → 积分兑换商品」，可按分类、名称、价格等条件筛选，操作列支持上架、审核、删除与扫码购买。',
          points: [],
          images: [img_c3_points_goods_1]
        },
        {
          id: 'c3-s2',
          title: '编辑兑换数值',
          menu: '商城 → 积分兑换商品',
          desc: '点击操作列「编辑兑换数值」，在弹窗中修改消耗积分并保存。',
          points: ['兑换数值即兑换该商品所需消耗的积分'],
          images: [img_c3_points_goods_2]
        }
      ]
    },
    {
      id: 'c4',
      title: '商品分类',
      summary: '商品分类树形管理与幻灯片配置',
      steps: [
        {
          id: 'c4-s1',
          title: '分类列表与管理',
          menu: '商城 → 商品分类',
          desc: '进入「商城 → 商品分类」，左侧为分类树可展开下级，右侧列表支持排序、编辑、删除、控制显示与添加分类。',
          points: ['此模块打开非常慢，很卡'],
          images: [img_c4_category_1]
        },
        {
          id: 'c4-s2',
          title: '新增/编辑商品分类',
          menu: '商城 → 商品分类',
          desc: '点击「编辑」或「+ 添加」弹窗，填写分类标题、上级栏目、图片与导航图后提交保存。',
          points: ['分类图片建议尺寸 50*50', '导航标题图片建议尺寸 360*360'],
          images: [img_c4_category_3]
        },
        {
          id: 'c4-s3',
          title: '配置分类幻灯片（导航图）',
          menu: '商城 → 商品分类',
          desc: '点击操作列「幻灯片」，填写标题、图片与跳转链接后保存。',
          points: ['幻灯片即分类的导航图，可配置跳转链接'],
          images: [img_c4_category_2]
        }
      ]
    },
    {
      id: 'c5',
      title: '订单管理',
      summary: '全平台订单筛选、导出与物流查看',
      steps: [
        {
          id: 'c5-s1',
          title: '订单查询与管理',
          menu: '商城 → 订单管理',
          desc: '进入「商城 → 订单管理」，可按时间、订单号、会员账号等筛选订单，支持导出数据、查看费用明细与物流凭证。',
          points: ['支持导出全部数据、发货单与运单', '可查看费用预览与物流凭证'],
          images: [img_c5_order_1]
        }
      ]
    },
    {
      id: 'c6',
      title: '商品SKU管理',
      summary: 'SKU分类树形管理与新增/编辑',
      steps: [
        {
          id: 'c6-s1',
          title: 'SKU分类列表',
          menu: '商城 → 商品SKU管理',
          desc: '进入「商城 → 商品SKU管理」，左侧为分类树，右侧列表可排序、编辑、控制是否显示与添加分类。',
          points: ['左侧分类树可展开/收起下级分类'],
          images: [img_c6_sku_1]
        },
        {
          id: 'c6-s2',
          title: '新增/编辑SKU',
          menu: '商城 → 商品SKU管理',
          desc: '点击「编辑」或「+ 添加」弹窗，填写SKU标题、上级栏目、规格图片与描述后提交。',
          points: ['规格图片上市为开/关开关'],
          images: [img_c6_sku_2, img_c6_sku_3]
        }
      ]
    },
    {
      id: 'c7',
      title: '商品评价',
      summary: '商品评价筛选、审核、回复与视频上传',
      steps: [
        {
          id: 'c7-s1',
          title: '评价列表与审核',
          menu: '商城 → 商品评价',
          desc: '进入「商城 → 商品评价」，可按时间、会员、标题等筛选，列表支持批量选择、审核、查看与删除。',
          points: ['评价审核分未审核/已审核'],
          images: [img_c7_comment_1]
        },
        {
          id: 'c7-s2',
          title: '查看评价与回复、上传评价视频',
          menu: '商城 → 商品评价',
          desc: '点击「查看」可查看评价内容并回复；点击「短视频」可上传评价视频。',
          points: ['视频上传支持开始、暂停、续传与删除'],
          images: [img_c7_comment_2, img_c7_comment_3]
        },
        {
          id: 'c7-s3',
          title: '添加评价',
          menu: '商城 → 商品评价',
          desc: '点击「+ 添加」弹窗，选择用户、评定星级、上传图片并填写评价内容后保存。',
          points: ['评定星级为 1-5 星', '图片建议尺寸 50*50'],
          images: [img_c7_comment_4]
        }
      ]
    },
    {
      id: 'c8',
      title: '红包',
      summary: '红包类型的添加配置（不在使用）',
      steps: [
        {
          id: 'c8-s1',
          title: '添加红包类型',
          menu: '商城 → 红包',
          desc: '进入「商城 → 红包」，点击「+ 添加」配置红包名称、金额、类型与领取规则后保存。',
          points: ['该模块在总纲中标注不在使用', '截图左侧红包菜单亦标注未使用'],
          images: [img_c8_redpacket_1]
        }
      ]
    },
    {
      id: 'c9',
      title: '红包发放',
      summary: '红包发放记录查询与发放（不在使用）',
      steps: [
        {
          id: 'c9-s1',
          title: '红包发放记录',
          menu: '商城 → 红包发放',
          desc: '进入「商城 → 红包发放」，可按时间、关联红包、会员账号等查询发放记录。',
          points: ['该模块在总纲中标注不在使用', '截图左侧红包发放菜单亦标注未使用'],
          images: [img_c9_redpacket_grant_1]
        },
        {
          id: 'c9-s2',
          title: '发放红包',
          menu: '商城 → 红包发放',
          desc: '点击「+ 红包发放」，选择红包、发放类型与用户后确认发放。',
          points: [],
          images: [img_c9_redpacket_grant_2]
        }
      ]
    },
    {
      id: 'c10',
      title: '购物车管理',
      summary: '用户加购商品的信息查询',
      steps: [
        {
          id: 'c10-s1',
          title: '购物车商品查询',
          menu: '商城 → 购物车管理',
          desc: '进入「商城 → 购物车管理」，可按时间、会员账号、商品标题等筛选，查看用户加购的商品信息。',
          points: ['仅展示购物车商品信息，无其他操作'],
          images: [img_c10_cart_1]
        }
      ]
    },
    {
      id: 'c11',
      title: '退换货申请',
      summary: '退换货申请查询与审批处理',
      steps: [
        {
          id: 'c11-s1',
          title: '退换货申请列表',
          menu: '商城 → 退换货申请',
          desc: '进入「商城 → 退换货申请」，可按会员账号、订单号、退货状态等筛选，操作列支持审批、退货与查看。',
          points: ['商品状态含待补货、申请退货、已完成等'],
          images: [img_c11_return_1]
        },
        {
          id: 'c11-s2',
          title: '审批退换货申请',
          menu: '商城 → 退换货申请',
          desc: '点击「审批退货」弹窗，补充物流信息、退货原因与收货人信息后完成审批。',
          points: ['审批时可补充物流、退货原因与备注'],
          images: [img_c11_return_2]
        }
      ]
    }
  ]
}