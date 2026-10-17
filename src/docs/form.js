// 七七生活后台 · 自定义表单
// 来源：《77平台模块分析》表单/（2 个功能文档、10 张截图）
import img_c24_list_1 from '@/assets/docs/form/c24-list/img001.png'
import img_c24_list_2 from '@/assets/docs/form/c24-list/img002.png'
import img_c24_list_3 from '@/assets/docs/form/c24-list/img003.png'
import img_c24_list_4 from '@/assets/docs/form/c24-list/img004.png'
import img_c24_list_5 from '@/assets/docs/form/c24-list/img005.png'
import img_c24_list_6 from '@/assets/docs/form/c24-list/img006.png'
import img_c24_list_7 from '@/assets/docs/form/c24-list/img007.png'
import img_c24_list_8 from '@/assets/docs/form/c24-list/img008.png'
import img_c24_list_9 from '@/assets/docs/form/c24-list/img009.png'
import img_c25_manage_1 from '@/assets/docs/form/c25-manage/img001.png'

export default {
  id: 'form',
  name: '表单',
  icon: 'grid',
  summary: '自定义表单的表列表与表管理页面截图',
  status: 'reference',
  chapters: [
    {
      id: 'c1',
      title: '表列表',
      summary: '表单列表、申请单管理与字段管理',
      steps: [
        {
          id: 'c1-s1',
          title: '表列表与申请单管理',
          menu: '表单 → 表列表',
          desc: '进入「表单 → 表列表」管理自定义表单，支持添加、编辑、删除与字段管理；点「查看」进入申请单管理，可筛选、导出并编辑单条申请。',
          points: [
            '右上角「+ 添加」可添加不同的表',
            '查看即申请单管理，可编辑表单或修改备注'
          ],
          images: [img_c24_list_1, img_c24_list_2, img_c24_list_3, img_c24_list_4, img_c24_list_7]
        },
        {
          id: 'c1-s2',
          title: '字段与表结构管理',
          menu: '表单 → 表列表',
          desc: '点「字段管理」维护字段：可设置名称、英文标识、是否开启、是否必填并排序，「+ 添加」新增字段。',
          points: [
            '字段支持设置是否开启、是否必填，并可拖动排序',
            '表结构在表管理弹窗配置，图片建议尺寸 150*150'
          ],
          images: [img_c24_list_5, img_c24_list_6, img_c24_list_8, img_c24_list_9]
        }
      ]
    },
    {
      id: 'c2',
      title: '表管理',
      summary: '新增/编辑自定义表单基础信息',
      steps: [
        {
          id: 'c2-s1',
          title: '新增或编辑表单',
          menu: '表单 → 表管理',
          desc: '进入「表单 → 表管理」，在弹窗中配置表名称、英文标识、是否开启、是否付费、图片、备注与友情提醒，点「提交」保存。',
          points: ['表图片建议上传尺寸 150*150'],
          images: [img_c25_manage_1]
        }
      ]
    }
  ]
}