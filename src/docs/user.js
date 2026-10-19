// 七七生活后台 · 用户
// 来源：《77后台用户分类.md》（挂卖规则/挂卖订单/会员管理/会员等级，17 张截图）+《77平台模块分析》用户/（16 个功能文档、30 张截图），已合并原「用户分类」模块
import img_c33_realname_1 from '@/assets/docs/user/c33-realname/img001.png'
import img_c33_realname_2 from '@/assets/docs/user/c33-realname/img002.png'
import img_c33_realname_3 from '@/assets/docs/user/c33-realname/img003.png'
import img_c33_realname_4 from '@/assets/docs/user/c33-realname/img004.png'
import img_c33_realname_5 from '@/assets/docs/user/c33-realname/img005.png'
import img_c33_realname_6 from '@/assets/docs/user/c33-realname/img006.png'
import img_c34_message_1 from '@/assets/docs/user/c34-message/img001.png'
import img_c34_message_2 from '@/assets/docs/user/c34-message/img002.png'
import img_c35_push_1 from '@/assets/docs/user/c35-push/img001.png'
import img_c35_push_2 from '@/assets/docs/user/c35-push/img002.png'
import img_c36_feedback_1 from '@/assets/docs/user/c36-feedback/img001.png'
import img_c37_activity_1 from '@/assets/docs/user/c37-activity/img001.png'
import img_c37_activity_2 from '@/assets/docs/user/c37-activity/img002.png'
import img_f13_recharge_1 from '@/assets/docs/user/f13-recharge/img001.png'
import img_f13_recharge_2 from '@/assets/docs/user/f13-recharge/img002.png'
import img_f13_recharge_3 from '@/assets/docs/user/f13-recharge/img003.png'
import img_l14_import_1 from '@/assets/docs/user/l14-import/img001.png'
import img_l14_import_2 from '@/assets/docs/user/l14-import/img002.png'
import img_l14_import_3 from '@/assets/docs/user/l14-import/img003.png'
import img_l13_msg_tpl_1 from '@/assets/docs/user/l13-msg-tpl/img001.png'
import img_l62_member2_1 from '@/assets/docs/user/l62-member2/img001.png'
import img_l63_member3_1 from '@/assets/docs/user/l63-member3/img001.png'
import img_stats_1 from '@/assets/docs/user/stats/img001.png'
import img_rank_1 from '@/assets/docs/user/rank/img001.png'
import img_f9_team_1 from '@/assets/docs/user/f9-team/img001.png'
import img_f10_commissioner_1 from '@/assets/docs/user/f10-commissioner/img001.png'
import img_f10_commissioner_2 from '@/assets/docs/user/f10-commissioner/img002.png'
import img_f12_stats_old_1 from '@/assets/docs/user/f12-stats-old/img001.png'
import img_l12_withdraw_1 from '@/assets/docs/user/l12-withdraw/img001.png'
import imgRule1 from '@/assets/docs/user/user-rule-1.png'
import imgRuleH5 from '@/assets/docs/user/user-rule-h5-1.png'
import imgOrder1 from '@/assets/docs/user/user-order-1.png'
import imgOrder2 from '@/assets/docs/user/user-order-2.png'
import imgMemberList from '@/assets/docs/user/user-member-list-1.png'
import imgMemberDetail from '@/assets/docs/user/user-member-detail-1.png'
import imgMemberEdit1 from '@/assets/docs/user/user-member-edit-1.png'
import imgMemberEdit2 from '@/assets/docs/user/user-member-edit-2.png'
import imgMemberDelete from '@/assets/docs/user/user-member-delete-1.png'
import imgMemberReferrer from '@/assets/docs/user/user-member-referrer-1.png'
import imgMemberSecurity from '@/assets/docs/user/user-member-security-1.png'
import imgMemberFund from '@/assets/docs/user/user-member-fund-1.png'
import imgMemberAgent from '@/assets/docs/user/user-member-agent-1.png'
import imgMemberRatio from '@/assets/docs/user/user-member-ratio-1.png'
import imgMemberStar from '@/assets/docs/user/user-member-star-1.png'
import imgLevel1 from '@/assets/docs/user/user-level-1.png'
import imgLevel2 from '@/assets/docs/user/user-level-2.png'

export default {
  id: 'user',
  name: '用户',
  icon: 'user',
  summary: '挂卖规则、挂卖订单、会员管理与等级、实名认证、站内信、充值、导入等用户全量功能',
  status: 'active',
  chapters: [

  {
    id: 'rule',
    title: '挂卖规则',
    summary: '配置用户端出让大厅的挂卖规则文案',
    steps: [
      {
        id: 'rule-s1',
        title: '配置挂卖规则说明',
        menu: '用户 → 挂卖规则',
        desc: '进入「用户 → 挂卖规则」，用富文本编辑器配置用户端「出让大厅」展示的规则文案，保存后实时生效。',
        points: [
          '规则内容由平台后台统一配置',
          '保存后在用户端「出让大厅」展示'
        ],
        images: [imgRule1]
      },
      {
        id: 'rule-s2',
        title: '查看规则在用户端的位置',
        menu: 'H5 用户端 → 出让大厅 → 兑换规则',
        desc: '用户端进入「出让大厅 → 兑换规则」，即可查看后台配置的规则文案，与后台内容联动。',
        points: ['用户端「出让大厅」与后台「挂卖规则」内容联动'],
        images: [imgRuleH5]
      }
    ]
  },
  {
    id: 'order',
    title: '挂卖订单',
    summary: '查看历史挂卖大厅全部订单',
    steps: [
      {
        id: 'order-s1',
        title: '查询挂卖订单',
        menu: '用户 → 挂卖订单',
        desc: '进入「用户 → 挂卖订单」，按卖家/买家昵称、订单号、状态筛选查询，查看历史挂卖大厅全部订单。',
        points: ['状态包含兑换中、已兑换等'],
        images: [imgOrder1, imgOrder2]
      }
    ]
  },
  {
    id: 'member',
    hidden: true,
    title: '会员管理',
    summary: '会员查询、详情与数据编辑',
    steps: [
      {
        id: 'member-s1',
        title: '会员列表与筛选查询',
        menu: '用户 → 用户与会员 → 会员管理',
        desc: '进入「用户 → 用户与会员 → 会员管理」，按多维条件筛选查询会员，列表可进入详情、编辑、资金、身份等操作。',
        points: ['支持按成长星级、会员身份、地区等多维筛选'],
        images: [imgMemberList]
      },
      {
        id: 'member-s2',
        title: '查看会员详情',
        menu: '会员管理 → 操作 → 详情',
        desc: '点击「详情」，查看该用户的资金账户、消费能力、市场能力与最近操作日志。',
        points: ['详情页汇总资金、消费与市场三类核心数据'],
        images: [imgMemberDetail]
      },
      {
        id: 'member-s3',
        title: '编辑会员信息',
        menu: '会员管理 → 操作 → 编辑',
        desc: '点击「操作 → 编辑」，可修改会员昵称、电话与头像。',
        points: ['会员头像建议尺寸：200 × 200'],
        images: [imgMemberEdit1, imgMemberEdit2]
      },
      {
        id: 'member-s4',
        title: '删除会员',
        menu: '会员管理 → 操作 → 删除',
        desc: '点击「操作 → 删除」并二次确认，即可删除该用户。',
        points: ['删除后无法恢复，请谨慎操作'],
        images: [imgMemberDelete]
      },
      {
        id: 'member-s5',
        title: '修改推荐人',
        menu: '会员管理 → 操作 → 修改推荐人',
        desc: '点击「操作 → 修改推荐人」，填写新推荐人账号后点击「确定」。',
        points: ['修改推荐人将影响推荐绑定关系与分佣归属'],
        images: [imgMemberReferrer]
      },
      {
        id: 'member-s6',
        title: '通知他与发送站内信',
        menu: '会员管理 → 操作 → 通知他 / 发送站内信',
        desc: '会员操作菜单提供「通知他」与「发送站内信」两个触达入口。',
        points: [
          '功能有 BUG，待开发修复',
          '修复前请勿使用这两个入口'
        ],
        images: []
      },
      {
        id: 'member-s7',
        title: '推广码',
        menu: '会员管理 → 推广码',
        desc: '会员操作区提供「推广码」入口。',
        points: ['暂未开发该功能'],
        images: []
      },
      {
        id: 'member-s8',
        title: '安全 · 重置登录/支付密码',
        menu: '会员管理 → 操作 → 安全',
        desc: '点击「操作 → 安全」，可重置用户的登录密码或支付密码，系统返回随机密码。',
        points: ['重置后系统返回随机密码，需及时告知用户'],
        images: [imgMemberSecurity]
      },
      {
        id: 'member-s9',
        title: '资金 · 账户充减',
        menu: '会员管理 → 操作 → 资金 → 账户充减',
        desc: '点击「操作 → 资金 → 账户充减」，选择充值类型并填写金额后提交。',
        points: [
          '提交后仅创建审批单，不即时入账，需审批员终审'
        ],
        images: [imgMemberFund]
      },
      {
        id: 'member-s10',
        title: '身份 · 设为代理/供应商/主播',
        menu: '会员管理 → 操作 → 身份',
        desc: '点击「操作 → 身份」，可将用户设为代理/供应商/主播；设为代理需选类型与地区。',
        points: ['代理类型按 乡镇 → 区代 → 市代 → 省代 逐级设置'],
        images: [imgMemberAgent]
      },
      {
        id: 'member-s11',
        title: '互转比例',
        menu: '会员管理 → 操作 → 互转比例',
        desc: '点击「操作 → 互转比例」，按资金类型逐项勾选白名单并设置互转比例。',
        points: ['比例按资金类型逐项配置'],
        images: [imgMemberRatio]
      },
      {
        id: 'member-s12',
        title: '星级等级',
        menu: '会员管理 → 操作 → 星级等级',
        desc: '点击「操作 → 星级等级」，选择目标等级与升级原因并设置有效期。',
        points: [
          '升级需扣除释放权重，无权重无法升级',
          '历史订单权重不变，新订单按新等级计算',
          '降级需站内信 + 短信通知，违规降级不提醒'
        ],
        images: [imgMemberStar]
      }
    ]
  },
  {
    id: 'level',
    title: '会员等级',
    summary: '各星级消费要求与倍数加成',
    steps: [
      {
        id: 'level-s1',
        title: '会员等级规则与倍数加成',
        menu: '用户 → 用户与会员 → 会员等级',
        desc: '进入「用户 → 用户与会员 → 会员等级」，查看各星级会员的消费要求、倍数加成与权益说明。',
        points: [
          '星级倍数直接影响权益加成与消费额度判定',
          '历史订单不受后续等级变化影响'
        ],
        images: [imgLevel1, imgLevel2]
      }
    ]
  },
  {
    id: 'level-setting',
    title: '用户等级设置',
    summary: '用户等级相关参数设置（暂不完善）',
    steps: []
  },
  {
    id: 'discount',
    title: '倍数折扣与场景',
    summary: '倍数折扣与适用场景配置（整理中）',
    steps: []
  },
  {
    id: 'trial',
    title: '体验期管理',
    summary: '新用户 30 天体验期管理（整理中）',
    steps: []
  },
  {
    id: 'star-log',
    title: '星级升级记录',
    summary: '星级升降级历史记录查询（整理中）',
    steps: []
  },
    {
      id: 'c1',
      title: '实名认证',
      summary: '实名认证三态查看与审核',
      steps: [
        {
          id: 'c1-s1',
          title: '查看「申请中」实名认证列表',
          menu: '用户 → 实名认证',
          desc: '进入「用户 → 实名认证」，默认展示「申请中」列表，可按多种条件筛选查询。',
          points: [],
          images: [img_c33_realname_1]
        },
        {
          id: 'c1-s2',
          title: '实名认证审核',
          menu: '用户 → 实名认证',
          desc: '点击「实名认证」打开详情弹窗，查看证件信息，选择审核结果并填写备注后提交。',
          points: [],
          images: [img_c33_realname_2, img_c33_realname_3]
        },
        {
          id: 'c1-s3',
          title: '审核通过与审核驳回',
          menu: '用户 → 实名认证',
          desc: '左侧可在申请中/审核通过/审核驳回间切换，查看各状态记录与驳回原因。',
          points: [
            '实名分申请中、审核通过（已实名）、审核驳回三态',
            '审核通过后用户实名状态变为「已实名」'
          ],
          images: [img_c33_realname_4, img_c33_realname_5, img_c33_realname_6]
        }
      ]
    },
    {
      id: 'c2',
      hidden: true,
      title: '站内信',
      summary: '所有用户站内信查看与编辑',
      steps: [
        {
          id: 'c2-s1',
          title: '查看与管理站内信',
          menu: '用户 → 站内信',
          desc: '进入「用户 → 站内信」，查看所有用户站内信，可筛选、一键已读、编辑与删除。',
          points: [],
          images: [img_c34_message_1, img_c34_message_2]
        }
      ]
    },
    {
      id: 'c3',
      hidden: true,
      title: 'app推送',
      summary: 'APP 推送新增与状态管理（暂未用）',
      steps: [
        {
          id: 'c3-s1',
          title: 'APP推送管理',
          menu: '用户 → app推送',
          desc: '进入「用户 → APP推送」，可新增推送并查看发送状态。',
          points: ['该功能在左侧菜单标注「暂不在使用」'],
          images: [img_c35_push_1, img_c35_push_2]
        }
      ]
    },
    {
      id: 'c4',
      hidden: true,
      title: '用户反馈',
      summary: '反馈查看、标记与回复',
      steps: [
        {
          id: 'c4-s1',
          title: '查看与回复用户反馈',
          menu: '用户 → 用户反馈',
          desc: '进入「用户 → 用户反馈」，查看用户反馈内容，可标记是否解决并回复。',
          points: [],
          images: [img_c36_feedback_1]
        }
      ]
    },
    {
      id: 'c5',
      hidden: true,
      title: '活动信息',
      summary: '活动消息发布与定向发送',
      steps: [
        {
          id: 'c5-s1',
          title: '活动信息发布',
          menu: '用户 → 活动信息',
          desc: '进入「用户 → 活动信息」，可添加活动消息，并按会员等级定向发送。',
          points: [],
          images: [img_c37_activity_1, img_c37_activity_2]
        }
      ]
    },
    {
      id: 'c6',
      hidden: true,
      title: '充值',
      summary: '充值记录与按支付状态筛选',
      steps: [
        {
          id: 'c6-s1',
          title: '查看全部充值记录',
          menu: '用户 → 充值',
          desc: '进入「用户 → 充值 → 全部充值」，查看所有充值记录，可按条件筛选。',
          points: [
            '普通用户充值仅支持 77 钱包渠道',
            '未支付订单与支付通道类型在状态列体现'
          ],
          images: [img_f13_recharge_1]
        },
        {
          id: 'c6-s2',
          title: '按支付状态筛选充值订单',
          menu: '用户 → 充值',
          desc: '左侧可按未支付/已支付/支付中/支付失败查看，支持筛选与导出全部数据。',
          points: [],
          images: [img_f13_recharge_2, img_f13_recharge_3]
        }
      ]
    },
    {
      id: 'c7',
      hidden: true,
      title: '用户导入',
      summary: '上传 Excel 导入客户资料',
      steps: [
        {
          id: 'c7-s1',
          title: '上传Excel并配置列对应关系',
          menu: '用户 → 用户导入',
          desc: '进入「用户 → 用户导入」，上传客户 Excel、匹配系统列与 Excel 列后开始导入。',
          points: [],
          images: [img_l14_import_1, img_l14_import_2]
        },
        {
          id: 'c7-s2',
          title: '查看导入记录',
          menu: '用户 → 用户导入',
          desc: '进入「导入记录」，查看每次导入的数据量与导入时间。',
          points: [],
          images: [img_l14_import_3]
        }
      ]
    },
    {
      id: 'c8',
      hidden: true,
      title: '消息模板',
      summary: '按消息类型编辑模板与发送开关',
      steps: [
        {
          id: 'c8-s1',
          title: '编辑消息模板',
          menu: '用户 → 消息模板',
          desc: '进入「用户 → 消息模板」，按消息类型编辑内容，并配置微信/APP 发送开关。',
          points: ['微信发送控制公众号推送，APP发送控制 APP 站内信'],
          images: [img_l13_msg_tpl_1]
        }
      ]
    },
    {
      id: 'c9',
      hidden: true,
      title: '会员管理2',
      summary: '会员管理2 列表（暂未开通）',
      steps: [
        {
          id: 'c9-s1',
          title: '会员管理2',
          menu: '用户 → 会员管理2',
          desc: '进入「用户 → 会员管理2」，按手机号、区域筛选查询会员。',
          points: ['页面标注「暂未开通好」，为建设中功能'],
          images: [img_l62_member2_1]
        }
      ]
    },
    {
      id: 'c10',
      hidden: true,
      title: '会员管理3',
      summary: '会员管理3 列表（仅服务代表）',
      steps: [
        {
          id: 'c10-s1',
          title: '会员管理3',
          menu: '用户 → 会员管理3',
          desc: '进入「用户 → 会员管理3」，按手机号、区域筛选查询服务代表。',
          points: ['筛选条件只针对服务代表'],
          images: [img_l63_member3_1]
        }
      ]
    },
    {
      id: 'c11',
      title: '统计',
      summary: '营业额、让利与滞留奖励统计',
      steps: [
        {
          id: 'c11-s1',
          title: '查看统计数据',
          menu: '用户 → 统计',
          desc: '进入「用户 → 统计」，查看营业额、让利与滞留奖励等数据，支持导出。',
          points: ['该「统计」为现行版本；统计（老）为旧版页面'],
          images: [img_stats_1]
        }
      ]
    },
    {
      id: 'c12',
      title: '转换排名',
      summary: '储备值转贡献值转换量排名',
      steps: [
        {
          id: 'c12-s1',
          title: '查看储备值转换排名',
          menu: '用户 → 转换排名',
          desc: '进入「用户 → 转换排名」，查看会员储备值转贡献值的转换量排名。',
          points: ['主要用于查看总的储备值的转换量'],
          images: [img_rank_1]
        }
      ]
    },
    {
      id: 'c13',
      title: '团队业绩',
      summary: '团队业绩列表（暂不在使用）',
      steps: [
        {
          id: 'c13-s1',
          title: '团队业绩',
          menu: '用户 → 团队业绩',
          desc: '进入「用户 → 团队业绩」，查看团队当前业绩与累计业绩。',
          points: ['该页面已暂不在使用（文档标注待删除）'],
          images: [img_f9_team_1]
        }
      ]
    },
    {
      id: 'c14',
      title: '专员奖励',
      summary: '专员奖励查询（暂不在使用）',
      steps: [
        {
          id: 'c14-s1',
          title: '查看专员奖励总累计',
          menu: '用户 → 专员奖励',
          desc: '进入「用户 → 专员奖励」，查看所有专员奖励记录与总累计奖励。',
          points: [],
          images: [img_f10_commissioner_1]
        },
        {
          id: 'c14-s2',
          title: '按订单号查询专员奖励',
          menu: '用户 → 专员奖励',
          desc: '输入订单号搜索，可查该笔订单产生的专员奖励与累计奖。',
          points: [
            '专员奖励暂不在使用，已并入专员账号',
            '原规则：有区域代理奖励必有专员奖励'
          ],
          images: [img_f10_commissioner_2]
        }
      ]
    },
    {
      id: 'c15',
      title: '统计（老）',
      summary: '旧版统计：分红池与待分价值',
      steps: [
        {
          id: 'c15-s1',
          title: '统计（老）',
          menu: '用户 → 统计（老）',
          desc: '进入「用户 → 统计（老）」，查看旧版分红池数据：储备值、商家让利与待分价值。',
          points: [
            '老版统计页面，现行版本见「统计」',
            '总结贡献值应与财务资金流水账一致'
          ],
          images: [img_f12_stats_old_1]
        }
      ]
    },
    {
      id: 'c16',
      hidden: true,
      title: '提现',
      summary: '跳转到审核通道的用户提现',
      steps: [
        {
          id: 'c16-s1',
          title: '提现',
          menu: '用户 → 提现',
          desc: '进入「用户 → 提现」，点击后跳转到「审核通道 → 用户提现」处理。',
          points: ['「提现」菜单点击后跳转到审核通道，不在本页面处理'],
          images: [img_l12_withdraw_1]
        }
      ]
    }
  ]
}
