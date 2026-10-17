// 七七生活后台 · 分类信息
// 来源：《77平台模块分析》分类信息/（5 个功能文档、11 张截图；总纲标注：使用频率比较低）
import img_l50_category_1 from '@/assets/docs/info/l50-category/img001.png'
import img_l50_category_2 from '@/assets/docs/info/l50-category/img002.png'
import img_l50_category_3 from '@/assets/docs/info/l50-category/img003.png'
import img_l50_category_4 from '@/assets/docs/info/l50-category/img004.png'
import img_l51_city_1 from '@/assets/docs/info/l51-city/img001.png'
import img_l52_published_1 from '@/assets/docs/info/l52-published/img001.png'
import img_l52_published_2 from '@/assets/docs/info/l52-published/img002.png'
import img_l52_published_3 from '@/assets/docs/info/l52-published/img003.png'
import img_l52_published_4 from '@/assets/docs/info/l52-published/img004.png'
import img_l53_comment_1 from '@/assets/docs/info/l53-comment/img001.png'
import img_l54_appointment_1 from '@/assets/docs/info/l54-appointment/img001.png'

export default {
  id: 'info',
  name: '分类信息',
  icon: 'layers',
  summary: '类别、同城、已发布信息、评论、预约信息截图（总纲标注：使用频率比较低）',
  status: 'reference',
  chapters: [
    {
      id: 'c1',
      title: '类别',
      summary: '管理信息类别、字段与图标',
      steps: [
        {
          id: 'c1-s1',
          title: '类别管理',
          menu: '分类信息 → 类别',
          desc: '进入「分类信息 → 类别」查看分类树，可新增、编辑、删除分类，并控制各分类的显示与排序。',
          points: [
            '点击分类名可展开下级分类',
            '是否显示控制该分类是否在 App 端展示'
          ],
          images: [img_l50_category_1]
        },
        {
          id: 'c1-s2',
          title: '编辑分类与字段',
          menu: '分类信息 → 类别',
          desc: '「编辑」或「+ 添加」可设置分类名称、上级分类与图标并提交；「字段管理」可配置文本、单选、下拉等表单字段。',
          points: [
            '分类图标建议上传尺寸 50*50',
            '字段可设置是否开启、是否必填'
          ],
          images: [img_l50_category_2, img_l50_category_3, img_l50_category_4]
        }
      ]
    },
    {
      id: 'c2',
      title: '同城设置',
      summary: '同城爆料、广告图与发布费用设置',
      steps: [
        {
          id: 'c2-s1',
          title: '同城设置',
          menu: '分类信息 → 同城设置',
          desc: '进入「分类信息 → 同城设置」配置爆料标题、内容与广告图，并设置置顶费用、置顶时长与每日刷新次数，保存后自动生效。',
          points: [
            '爆料标题与内容可编辑并生成海报',
            '置顶费用、置顶时间、每日刷新次数可调整'
          ],
          images: [img_l51_city_1]
        }
      ]
    },
    {
      id: 'c3',
      title: '已发布信息',
      summary: '已发布信息的查询、编辑与评论预约',
      steps: [
        {
          id: 'c3-s1',
          title: '已发布信息管理',
          menu: '分类信息 → 已发布信息',
          desc: '进入「分类信息 → 已发布信息」查看同城信息列表，可按时间与会员筛选，支持编辑、删除及查看评论、预约。',
          points: [
            '可按提问时间、会员账号等筛选',
            '可查看单条信息的评论与预约详情'
          ],
          images: [img_l52_published_1, img_l52_published_2, img_l52_published_3, img_l52_published_4]
        }
      ]
    },
    {
      id: 'c4',
      title: '评论信息',
      summary: '已发布信息的评论列表与编辑',
      steps: [
        {
          id: 'c4-s1',
          title: '查看评论信息',
          menu: '分类信息 → 评论信息',
          desc: '进入「分类信息 → 评论信息」查看同城信息的评论，可按时间、会员账号或编号筛选并编辑、删除。',
          points: ['即已发布信息下的评论信息'],
          images: [img_l53_comment_1]
        }
      ]
    },
    {
      id: 'c5',
      title: '预约信息',
      summary: '已发布信息的预约列表与编辑',
      steps: [
        {
          id: 'c5-s1',
          title: '查看预约信息',
          menu: '分类信息 → 预约信息',
          desc: '进入「分类信息 → 预约信息」查看同城信息的预约记录，可按时间、会员账号或编号筛选并编辑、删除。',
          points: ['即已发布信息下的预约信息'],
          images: [img_l54_appointment_1]
        }
      ]
    }
  ]
}