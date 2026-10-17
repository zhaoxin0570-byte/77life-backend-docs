// 七七生活后台 · 设置
// 来源：《77平台模块分析》设置/（14 个功能文档、48 张截图）+《七七生活-主题装修.pdf》（12 页截图）
import img_c29_theme_1 from '@/assets/docs/set/c29-theme/img001.png'
import img_c29_theme_2 from '@/assets/docs/set/c29-theme/img002.png'
import img_c29_theme_3 from '@/assets/docs/set/c29-theme/img003.png'
import img_c29_theme_4 from '@/assets/docs/set/c29-theme/img004.png'
import img_c29_theme_5 from '@/assets/docs/set/c29-theme/img005.png'
import img_c29_theme_6 from '@/assets/docs/set/c29-theme/img006.png'
import img_c29_theme_7 from '@/assets/docs/set/c29-theme/img007.png'
import img_c29_theme_8 from '@/assets/docs/set/c29-theme/img008.png'
import img_c29_theme_9 from '@/assets/docs/set/c29-theme/img009.png'
import img_c29_theme_10 from '@/assets/docs/set/c29-theme/img010.png'
import img_c29_theme_11 from '@/assets/docs/set/c29-theme/img011.png'
import img_c29_theme_12 from '@/assets/docs/set/c29-theme/img012.png'
import img_c29_theme_13 from '@/assets/docs/set/c29-theme/img013.png'
import img_c29_theme_14 from '@/assets/docs/set/c29-theme/img014.png'
import img_l1_shop_1 from '@/assets/docs/set/l1-shop/img001.png'
import img_l1_shop_2 from '@/assets/docs/set/l1-shop/img002.png'
import img_l1_shop_3 from '@/assets/docs/set/l1-shop/img003.png'
import img_l1_shop_4 from '@/assets/docs/set/l1-shop/img004.png'
import img_l1_shop_5 from '@/assets/docs/set/l1-shop/img005.png'
import img_l1_shopping_1 from '@/assets/docs/set/l1-shopping/img001.png'
import img_l2_withdraw_1 from '@/assets/docs/set/l2-withdraw/img001.png'
import img_l2_withdraw_2 from '@/assets/docs/set/l2-withdraw/img002.png'
import img_l2_withdraw_3 from '@/assets/docs/set/l2-withdraw/img003.png'
import img_l2_withdraw_4 from '@/assets/docs/set/l2-withdraw/img004.png'
import img_l2_withdraw_5 from '@/assets/docs/set/l2-withdraw/img005.png'
import img_l3_transfer_1 from '@/assets/docs/set/l3-transfer/img001.png'
import img_l3_transfer_2 from '@/assets/docs/set/l3-transfer/img002.png'
import img_l4_payment_1 from '@/assets/docs/set/l4-payment/img001.png'
import img_l4_payment_2 from '@/assets/docs/set/l4-payment/img002.png'
import img_l5_qrcode_1 from '@/assets/docs/set/l5-qrcode/img001.png'
import img_l5_qrcode_2 from '@/assets/docs/set/l5-qrcode/img002.png'
import img_l5_vip_home_1 from '@/assets/docs/set/l5-vip-home/img001.png'
import img_l5_vip_home_2 from '@/assets/docs/set/l5-vip-home/img002.png'
import img_l5_vip_center_1 from '@/assets/docs/set/l5-vip-center/img001.png'
import img_l5_vip_center_2 from '@/assets/docs/set/l5-vip-center/img002.png'
import img_l5_vip_center_3 from '@/assets/docs/set/l5-vip-center/img003.png'
import img_l5_vip_center_4 from '@/assets/docs/set/l5-vip-center/img004.png'
import img_l5_category_page_1 from '@/assets/docs/set/l5-category-page/img001.png'
import img_l6_address_1 from '@/assets/docs/set/l6-address/img001.png'
import img_l6_address_2 from '@/assets/docs/set/l6-address/img002.png'
import img_l6_address_3 from '@/assets/docs/set/l6-address/img003.png'
import img_l6_address_4 from '@/assets/docs/set/l6-address/img004.png'
import img_l7_ad_1 from '@/assets/docs/set/l7-ad/img001.png'
import img_l8_notice_1 from '@/assets/docs/set/l8-notice/img001.png'
import img_l9_express_1 from '@/assets/docs/set/l9-express/img001.png'
import img_l9_express_2 from '@/assets/docs/set/l9-express/img002.png'
import img_l9_express_3 from '@/assets/docs/set/l9-express/img003.png'
import img_l9_express_4 from '@/assets/docs/set/l9-express/img004.png'
import img_theme_1 from '@/assets/docs/set/theme-decoration/img001.png'
import img_theme_2 from '@/assets/docs/set/theme-decoration/img002.png'
import img_theme_3 from '@/assets/docs/set/theme-decoration/img003.png'
import img_theme_4 from '@/assets/docs/set/theme-decoration/img004.png'
import img_theme_5 from '@/assets/docs/set/theme-decoration/img005.png'
import img_theme_6 from '@/assets/docs/set/theme-decoration/img006.png'
import img_theme_7 from '@/assets/docs/set/theme-decoration/img007.png'
import img_theme_8 from '@/assets/docs/set/theme-decoration/img008.png'
import img_theme_9 from '@/assets/docs/set/theme-decoration/img009.png'
import img_theme_10 from '@/assets/docs/set/theme-decoration/img010.png'
import img_theme_11 from '@/assets/docs/set/theme-decoration/img011.png'
import img_theme_12 from '@/assets/docs/set/theme-decoration/img012.png'

export default {
  id: 'set',
  name: '设置',
  icon: 'set',
  summary: '主题模板、主题装修（H5 首页各区块）、店铺、购物、提现、互转、支付、页面、地址、广告、公告、快递物流等设置页说明',
  status: 'reference',
  chapters: [
    {
      id: 'c1',
      title: '主题模板',
      summary: '主题模板预览、复制、删除与模块编辑',
      steps: [
        {
          id: 'c1-s1',
          title: '主题模板列表与模板管理',
          menu: '设置 → 主题模板',
          desc: '进入「设置 → 主题模板」管理商城皮肤模板，卡片式展示多套模板，支持预览、编辑、复制、删除，右上角「+ 添加」新增。',
          points: [
            '模板卡片提供预览、编辑、复制、删除四个操作',
            '预览窗通过扫码查看移动端真实效果',
            '复制模板需填写模板名称与所属层级'
          ],
          images: [img_c29_theme_1, img_c29_theme_2, img_c29_theme_3]
        },
        {
          id: 'c1-s2',
          title: '基础设置与导航栏配置',
          menu: '设置 → 主题模板',
          desc: '点击「编辑」进入模板编辑页：左侧模块树、中间手机实时预览、右侧表单，右上角「保存」。可配置网络标题、横幅图片（建议尺寸 640*160）与导航栏入口及跳转链接。',
          points: [
            '中间手机预览为实时预览，右侧修改后即时反映',
            '导航栏入口可自由增删，并逐项配置标题与跳转链接'
          ],
          images: [img_c29_theme_4, img_c29_theme_6]
        },
        {
          id: 'c1-s3',
          title: '轮播图、通知与广告模块',
          menu: '设置 → 主题模板',
          desc: '配置轮播图、通知、广告模块：均可设置显示开关、标题与是否白底；轮播图与广告以「图片 + 链接」形式维护，支持排序与添加。',
          points: [
            '轮播图与广告均以图片加链接维护，支持排序',
            '每个模块都可单独控制显示开关与是否白底'
          ],
          images: [img_c29_theme_5, img_c29_theme_7, img_c29_theme_8]
        },
        {
          id: 'c1-s4',
          title: '专区、图片区与精选商品模块',
          menu: '设置 → 主题模板',
          desc: '配置专区、图片区与精选商品模块：可设置标题与展示格式，右侧选品区「+」添加商品，并拖动调整商品展示顺序。',
          points: [
            '精选商品来源于右侧选品区，可随时增删',
            '选品区支持拖动调整商品展示顺序'
          ],
          images: [img_c29_theme_9, img_c29_theme_10, img_c29_theme_11, img_c29_theme_12]
        },
        {
          id: 'c1-s5',
          title: '保存预览与新增资讯/轮播模块',
          menu: '设置 → 主题模板',
          desc: '编辑完成后点右上角「保存」生效，再点「预览」扫码查看；在预览区点「+」可添加资讯等新模块，并配置样式与轮播链接。',
          points: [
            '所有模块编辑完成后需点右上角保存才会生效',
            '资讯模块支持配置轮播名称与对应链接'
          ],
          images: [img_c29_theme_13, img_c29_theme_14]
        }
      ]
    },
    {
      id: 'theme-decoration',
      title: '主题装修',
      summary: 'H5 首页各区块（基础设置/会员条/幻灯片/导航/通知/广告/商品/版权/页脚）装修配置',
      steps: [
        {
          id: 'theme-decoration-s1',
          title: '进入主题装修与基础设置',
          menu: '设置 → 主题模板 → 主题装修',
          desc: '进入「设置 → 主题模板 → 主题装修」：左侧模块树、中间手机实时预览、右侧配置表单。基础设置可编辑顶部标题、背景图，以及搜索、热搜和扫一扫是否显示。',
          points: ['右侧修改实时反映到中间手机预览'],
          images: [img_theme_1]
        },
        {
          id: 'theme-decoration-s2',
          title: '会员信息条与顶部幻灯片',
          menu: '设置 → 主题模板 → 主题装修',
          desc: '会员信息条可设置是否显示会员、倍数及有效期与跳转界面；顶部幻灯片可设置首页幻灯片播放的数量、图片和顺序，以及每张幻灯片的跳转链接。',
          points: [],
          images: [img_theme_2]
        },
        {
          id: 'theme-decoration-s3',
          title: '导航栏与导航样式',
          menu: '设置 → 主题模板 → 主题装修',
          desc: '导航栏可更改导航样式与图标：样式支持一行五个、一行四个、一行三个，可设是否白底、上下间距与背景图；每个图标可配标题、角标（热门/推荐/抢购）与产品分类跳转链接。',
          points: ['图标可配置标题、角标类型与跳转链接，支持重新选择与删除'],
          images: [img_theme_3]
        },
        {
          id: 'theme-decoration-s4',
          title: '间距设置与通知栏',
          menu: '设置 → 主题模板 → 主题装修',
          desc: '间距设置控制模块上下间距的显示方式；通知栏可编辑顶部轮播 Banner 的内容、图标、颜色以及链接。',
          points: ['间距可选：显示上下间距/不显示上下间距/不显示上间距/不显示下间距'],
          images: [img_theme_4]
        },
        {
          id: 'theme-decoration-s5',
          title: '广告展示与展示模式',
          menu: '设置 → 主题模板 → 主题装修',
          desc: '广告展示可编辑广告的标题、展示模式、内容、顺序以及跳转链接。',
          points: ['展示模式含：单图/双图/三图/四图/1+2/1+3/2+3/幻灯片模式'],
          images: [img_theme_5]
        },
        {
          id: 'theme-decoration-s6',
          title: '商品展示与展示模式',
          menu: '设置 → 主题模板 → 主题装修',
          desc: '商品展示可编辑商品展示的标题、链接、展示模式、商品类型以及首页展示的商品。',
          points: ['展示模式含：一行2个/一行1个/大图显示/无限滑动/一行轮播'],
          images: [img_theme_6, img_theme_7]
        },
        {
          id: 'theme-decoration-s7',
          title: '商品类型与添加商品',
          menu: '设置 → 主题模板 → 主题装修',
          desc: '商品类型可选预售商品、人物作者、商品、拼购；添加商品时通过商品标题、活动场景、商品分类和商户筛选，查询需要展示的商品并添加。',
          points: [],
          images: [img_theme_8]
        },
        {
          id: 'theme-decoration-s8',
          title: '版权展示与页脚导航',
          menu: '设置 → 主题模板 → 主题装修',
          desc: '版权展示可编辑小程序版权所有公司以及跳转链接；页脚导航可编辑导航图标、标题名称以及跳转链接。',
          points: [],
          images: [img_theme_9]
        },
        {
          id: 'theme-decoration-s9',
          title: '用户端最终效果',
          menu: '设置 → 主题模板 → 主题装修',
          desc: '配置完成后，H5 首页按主题装修渲染：会员信息条、搜索栏与背景图、导航栏、信息公告通知、广告展示、商品展示、版权展示与页脚导航。',
          points: [],
          images: [img_theme_10, img_theme_11, img_theme_12]
        }
      ]
    },
    {
      id: 'c2',
      title: '店铺设置',
      summary: '全站基础信息与开关配置',
      steps: [
        {
          id: 'c2-s1',
          title: '店铺设置参数配置',
          menu: '设置 → 店铺设置 → 店铺设置',
          desc: '进入「设置 → 店铺设置 → 店铺设置」，共 5 页参数，编辑后自动保存。可配置网站标题、Logo、视频商品、实名认证、退货原路退回、搜索热榜、定时开站等全站开关。',
          points: [
            '设置项编辑完成后自动保存，点击空白处即生效',
            '视频商品不可删除只能覆盖，且仅限 app 端可上传',
            '关闭网站开关后，用户进 app 显示的是网站图片'
          ],
          images: [img_l1_shop_1, img_l1_shop_2, img_l1_shop_3, img_l1_shop_4, img_l1_shop_5]
        }
      ]
    },
    {
      id: 'c3',
      title: '购物设置',
      summary: '自动确认收货、删除未支付订单与售后退货规则',
      steps: [
        {
          id: 'c3-s1',
          title: '购物设置参数配置',
          menu: '设置 → 店铺设置 → 购物设置',
          desc: '进入「设置 → 购物设置」，配置待评价天数、已发货自动确认收货时间、未支付订单自动删除、售后退货时限与手续费。',
          points: [
            '自动确认收货以分钟计，100800 即 7 天',
            '未支付订单会在设定时长后被自动永久删除'
          ],
          images: [img_l1_shopping_1]
        }
      ]
    },
    {
      id: 'c4',
      title: '提现设置',
      summary: '提现开关、额度、手续费与定时提现',
      steps: [
        {
          id: 'c4-s1',
          title: '提现设置参数配置',
          menu: '设置 → 提现设置',
          desc: '进入「设置 → 提现设置」，共 5 页参数，可配置各类钱包与优惠券的提现开关、最低与单笔限额、每日额度、提现倍数、手续费与到账账户。',
          points: [
            '提现金额类型为多选，可按账户维度开放提现',
            '开启提现定时期后，仅能在设定时间段内申请提现',
            '手续费按千分比计算，77钱包与优惠券可分别设置'
          ],
          images: [img_l2_withdraw_1, img_l2_withdraw_2, img_l2_withdraw_3, img_l2_withdraw_4, img_l2_withdraw_5]
        }
      ]
    },
    {
      id: 'c5',
      title: '互转设置',
      summary: '互转开关、手续费、支持账户与转换倍数',
      steps: [
        {
          id: 'c5-s1',
          title: '互转设置参数配置',
          menu: '设置 → 互转设置',
          desc: '进入「设置 → 互转设置」，配置互转开关、互转手续费（千分比）、支持互转的账户类型、资金转换倍数与最低数量。',
          points: [
            '支持业绩、代理两种互转与资金转换账户',
            '转出、转入账户可分别勾选，实现不同账户定向转换'
          ],
          images: [img_l3_transfer_1, img_l3_transfer_2]
        }
      ]
    },
    {
      id: 'c6',
      title: '支付设置',
      summary: '支付通道的排序、开通控制与支付配置',
      steps: [
        {
          id: 'c6-s1',
          title: '支付通道列表与排序',
          menu: '设置 → 支付设置',
          desc: '进入「设置 → 支付设置」维护各支付通道：排序列决定 app 付款页的展示顺序，可逐条控制「是否开通」与「便捷通道是否开通」。',
          points: [
            '排序为数字排序，决定 app 端支付方式展示顺序',
            '每条通道均可单独控制是否开通与便捷通道'
          ],
          images: [img_l4_payment_1]
        },
        {
          id: 'c6-s2',
          title: '编辑支付通道（支付配置）',
          menu: '设置 → 支付设置',
          desc: '点击通道右侧「编辑」弹出「支付配置」，可修改支付名称，填写商户号、密钥、APP_ID、APP_secret，更换图标与描述，点「确定」保存。',
          points: ['支付图标可随时更换，app 付款页展示此处上传的图标'],
          images: [img_l4_payment_2]
        }
      ]
    },
    {
      id: 'c7',
      title: '页面设置',
      summary: '二维码海报与会员中心等页面模板配置',
      steps: [
        {
          id: 'c7-s1',
          title: '二维码海报模板',
          menu: '设置 → 页面设置 → 二维码海报模板',
          desc: '进入「设置 → 页面设置 → 二维码海报模板」管理推荐码海报模板：可删除海报、更换背景图、填写推荐人信息，调整完点右下角「保存」。',
          points: [
            '点击海报图片即可更换二维码背景图',
            '可添加新的空白海报板作为推荐码海报模板'
          ],
          images: [img_l5_qrcode_1, img_l5_qrcode_2]
        },
        {
          id: 'c7-s2',
          title: '会员商品首页模板',
          menu: '设置 → 页面设置 → 会员商品首页模板',
          desc: '进入「设置 → 页面设置 → 会员商品首页模板」，中间为手机预览，右侧编辑框配置标题、标题 logo、背景图片与背景颜色。',
          points: [
            '该模板目前标注为暂未使用',
            '标题 logo 建议尺寸 150*150',
            '背景图片建议尺寸 640*auto'
          ],
          images: [img_l5_vip_home_1, img_l5_vip_home_2]
        },
        {
          id: 'c7-s3',
          title: '会员中心模板（整体配置）',
          menu: '设置 → 页面设置 → 会员中心模板',
          desc: '进入「设置 → 页面设置 → 会员中心模板」配置 app「我的」页面：左侧选择适用等级，中间实时预览，右侧勾选顶部背景、我的订单、会员工具等模块，底部「保存」。',
          points: [
            '各模块可按需勾选开关，app「我的」按此渲染',
            '顶部背景图建议上传尺寸 640*360'
          ],
          images: [img_l5_vip_center_1, img_l5_vip_center_2]
        },
        {
          id: 'c7-s4',
          title: '会员中心模板（自定义会员工具）',
          menu: '设置 → 页面设置 → 会员中心模板',
          desc: '继续配置会员中心下半部分：分类信息、自定义会员工具（「+」添加，需填标题、图标与链接）、我的广场与为你推荐。',
          points: [
            '自定义会员工具图标建议尺寸 80*80',
            '自定义工具需同时配置标题、图标与跳转链接'
          ],
          images: [img_l5_vip_center_3, img_l5_vip_center_4]
        },
        {
          id: 'c7-s5',
          title: '商品分类页模板',
          menu: '设置 → 页面设置 → 商品分类页模板',
          desc: '进入「设置 → 页面设置 → 商品分类页模板」，在左侧选择展示方式（图片展示二级/三级、文字列表、图文展示），点右下角「保存」生效。',
          points: ['可决定商品分类展示到二级或三级分类'],
          images: [img_l5_category_page_1]
        }
      ]
    },
    {
      id: 'c8',
      title: '地址设置',
      summary: '省市区街道四级地址的筛选、新增与编辑',
      steps: [
        {
          id: 'c8-s1',
          title: '地址列表与筛选',
          menu: '设置 → 地址设置',
          desc: '进入「设置 → 地址设置」维护省市区街道四级地址：支持按时间、地区、名称筛选，右上角「+ 添加」新增，行内可编辑或删除。',
          points: [
            '地址共分四个层级（省/市/区/街道）',
            '列表行内支持编辑与删除'
          ],
          images: [img_l6_address_1]
        },
        {
          id: 'c8-s2',
          title: '按时间筛选地址',
          menu: '设置 → 地址设置',
          desc: '点击时间筛选弹出面板，可选最近一周/一个月/三个月，或用左右日历自定义起止时间，点「查询」生效。',
          points: ['可快捷选最近一周/一个月/三个月，或自定义起止时间'],
          images: [img_l6_address_2]
        },
        {
          id: 'c8-s3',
          title: '新增与编辑地址',
          menu: '设置 → 地址设置',
          desc: '点「+ 添加」或行内「编辑」打开同一界面，填写所属层级、标题、短标题及拼音、经纬度、地区编码，保存即可。',
          points: [
            '新增与编辑为同一界面，按需填写即可',
            '编辑时标题、短标题、地址信息等会回显已有数据'
          ],
          images: [img_l6_address_3, img_l6_address_4]
        }
      ]
    },
    {
      id: 'c9',
      title: '广告设置',
      summary: '广告/幻灯片的排序与新增编辑',
      steps: [
        {
          id: 'c9-s1',
          title: '广告设置',
          menu: '设置 → 广告设置',
          desc: '进入「设置 → 广告设置」维护广告/幻灯片：右上角「+ 添加」或行内「编辑」，填写标题、英文标识、图片、链接栏目与描述。',
          points: [
            '广告可设置链接栏目，但 app 内相关模块未体现',
            '图片建议上传尺寸 90*90'
          ],
          images: [img_l7_ad_1]
        }
      ]
    },
    {
      id: 'c10',
      title: '公告',
      summary: '公告开关、类型、标题内容与图片链接配置',
      steps: [
        {
          id: 'c10-s1',
          title: '公告设置',
          menu: '设置 → 公告',
          desc: '进入「设置 → 公告」配置视频公告、公告开关、公告类型（文字/图片/视频）、公告标题与内容、图片公告及跳转链接，编辑后自动保存。',
          points: [
            '公告类型可勾选文字、图片、视频，但不能只选两种',
            '图片公告可手动输入链接或点击选择栏目'
          ],
          images: [img_l8_notice_1]
        }
      ]
    },
    {
      id: 'c11',
      title: '快递物流',
      summary: '合作快递、区域价格、不配送区域与发件人信息',
      steps: [
        {
          id: 'c11-s1',
          title: '快递信息配置',
          menu: '设置 → 快递物流',
          desc: '进入「设置 → 快递物流」配置合作快递及编码、区域价格、不配送区域、首重续重价格、满额包邮与发件人信息。',
          points: [
            '合作快递只能选一种，需同时填写快递公司编码',
            '区域价格与不配送区域均以弹窗按省份维护'
          ],
          images: [img_l9_express_1]
        },
        {
          id: 'c11-s2',
          title: '区域价格与不配送地区设置',
          menu: '设置 → 快递物流',
          desc: '点「区域价格」右侧「编辑」可按省份分别设置首重、续重金额；点「不配送区域」「编辑」可添加不配送省份，用户填写收货地址时将不再显示该区域。',
          points: [
            '区域价格支持按省份分别设置首重与续重金额',
            '不配送地区添加后，用户填写收货地址不再显示'
          ],
          images: [img_l9_express_2, img_l9_express_3]
        },
        {
          id: 'c11-s3',
          title: '发件人信息',
          menu: '设置 → 快递物流',
          desc: '快递信息底部填写发件人、电话、省市区与地址，点「确定」保存，作为退货时的默认退货信息。',
          points: ['发件人信息为退货默认信息，退货时优先取此处配置'],
          images: [img_l9_express_4]
        }
      ]
    }
  ]
}