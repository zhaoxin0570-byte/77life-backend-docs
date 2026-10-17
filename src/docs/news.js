// 七七生活后台 · 资讯
// 来源：《77平台模块分析》资讯（4 个功能文档、15 张截图）
import img_c39_category_1 from '@/assets/docs/news/c39-category/img001.png'
import img_c39_category_2 from '@/assets/docs/news/c39-category/img002.png'
import img_c39_category_3 from '@/assets/docs/news/c39-category/img003.png'
import img_c39_category_4 from '@/assets/docs/news/c39-category/img004.png'
import img_c39_category_5 from '@/assets/docs/news/c39-category/img005.png'
import img_c39_category_6 from '@/assets/docs/news/c39-category/img006.png'
import img_c39_category_7 from '@/assets/docs/news/c39-category/img007.png'
import img_c39_category_8 from '@/assets/docs/news/c39-category/img008.png'
import img_c40_agreement_1 from '@/assets/docs/news/c40-agreement/img001.png'
import img_c40_agreement_2 from '@/assets/docs/news/c40-agreement/img002.png'
import img_c40_agreement_3 from '@/assets/docs/news/c40-agreement/img003.png'
import img_c40_agreement_4 from '@/assets/docs/news/c40-agreement/img004.png'
import img_c40_agreement_5 from '@/assets/docs/news/c40-agreement/img005.png'
import img_c41_news_ad_1 from '@/assets/docs/news/c41-news-ad/img001.png'
import img_c42_review_1 from '@/assets/docs/news/c42-review/img001.png'

export default {
  id: 'news',
  name: '资讯',
  icon: 'news',
  summary: '资讯分类、协议、新闻广告、评价列表页面截图与说明',
  status: 'reference',
  chapters: [
    {
      id: 'c1',
      title: '分类',
      summary: '资讯文章管理与资讯分类配置',
      steps: [
        {
          id: 'c1-s1',
          title: '文章（资讯内容）管理',
          menu: '资讯 → 文章',
          desc: '进入「资讯 → 文章」管理资讯文章，可新增/编辑/复制；编辑页左侧预览，右侧配置文章信息，下方富文本编辑正文。',
          points: ['文章支持置顶/推荐/显示状态控制', '「+ 添加帖子」按钮点击无反应'],
          images: [img_c39_category_1, img_c39_category_2, img_c39_category_3, img_c39_category_4, img_c39_category_5]
        },
        {
          id: 'c1-s2',
          title: '资讯分类管理',
          menu: '资讯 → 分类',
          desc: '进入「资讯 → 分类」管理资讯分类，可新增/编辑/删除，并设置分类图片、描述与是否开启采集。',
          points: ['分类图片建议尺寸 50 * 50', '支持配置是否开启采集及采集网站'],
          images: [img_c39_category_6, img_c39_category_7, img_c39_category_8]
        }
      ]
    },
    {
      id: 'c2',
      title: '协议',
      summary: '协议列表的新增、编辑与复制',
      steps: [
        {
          id: 'c2-s1',
          title: '协议管理',
          menu: '资讯 → 协议',
          desc: '进入「资讯 → 协议」管理协议，可新增/编辑/复制；编辑页左侧预览，右侧配置分类、标题、来源、是否显示与样式，下方编辑正文。',
          points: ['支持三图展示样式，图片建议尺寸 90 * 90'],
          images: [img_c40_agreement_1, img_c40_agreement_2, img_c40_agreement_3, img_c40_agreement_4, img_c40_agreement_5]
        }
      ]
    },
    {
      id: 'c3',
      title: '新闻广告',
      summary: '新闻广告幻灯片（暂未使用）',
      steps: [
        {
          id: 'c3-s1',
          title: '新闻广告',
          menu: '资讯 → 新闻广告',
          desc: '进入「资讯 → 新闻广告」管理新闻广告（幻灯片），可添加/编辑图片、标题与链接；该模块暂不在使用，未实际运用。',
          points: ['暂不在使用，未实际运用，功能不确定'],
          images: [img_c41_news_ad_1]
        }
      ]
    },
    {
      id: 'c4',
      title: '评价列表',
      summary: '文章评价详情查询',
      steps: [
        {
          id: 'c4-s1',
          title: '评价列表',
          menu: '资讯 → 评价列表',
          desc: '进入「资讯 → 评价列表」查看文章评价，可按会员账号/昵称/地区筛选。',
          points: ['「+ 添加帖子」按钮点击无反应'],
          images: [img_c42_review_1]
        }
      ]
    }
  ]
}