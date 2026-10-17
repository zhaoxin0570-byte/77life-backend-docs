# 附录 E：证据索引

> 数据来源：`_kb/graph/_evidence.json`（24 条）| 每条证据含文件路径与行号，可逐条回溯源码核对

| 证据 ID | 层级 | 文件 | 行号 | 提取内容 | 支撑节点 |
|---|---|---|---|---|---|
| EVD_00001 | L1 | src/views/DocHome.vue | 3-33 | 统计卡片区四张卡 | REG_001 / ELM_001 / FN_001 |
| EVD_00002 | L1 | src/views/DocHome.vue | 38-63 | 模块进度表五列与「查看」 | REG_002 / ELM_002 / FN_002 / FN_003 |
| EVD_00003 | L1 | src/views/DocHome.vue | 67-73 | 关于本文档系统说明 | REG_003 |
| EVD_00004 | L1 | src/views/DocHome.vue | 77-85 | import modules/docStats | MOD_001 |
| EVD_00005 | L2 | src/views/DocLayout.vue | 12-50 | 侧边栏菜单两级结构 | REG_012 / ELM_003~005 / FN_004~006 |
| EVD_00006 | L2 | src/views/DocLayout.vue | 56-67 | 面包屑三级 | REG_013 |
| EVD_00007 | L2 | src/views/DocLayout.vue | 102-137 | 展开/收起/跳转方法 | FN_004 / FN_005 |
| EVD_00008 | L2 | src/views/DocModule.vue | 3-10 | 模块头部与状态徽章 | REG_004 |
| EVD_00009 | L2 | src/views/DocModule.vue | 15-32 | 章节目录行与步骤数 | REG_005 / ELM_006 / FN_007 / FN_008 |
| EVD_00010 | L2 | src/views/DocModule.vue | 35-40 | 空状态占位提示 | REG_006 / ELM_010 / FN_009 |
| EVD_00011 | L2 | src/views/DocChapter.vue | 2-10 | 章节头部 | REG_007 |
| EVD_00012 | L3 | src/views/DocChapter.vue | 13-34 | 步骤字段与截图 figure | REG_008 / ELM_007 / FN_010 / FN_011 |
| EVD_00013 | L3 | src/views/DocChapter.vue | 64-68 | 灯箱与关闭方式 | REG_010 / ELM_008 / FN_012 |
| EVD_00014 | L3 | src/views/DocChapter.vue | 44-56 | 上一节/下一节导航 | REG_009 / ELM_009 / FN_013 |
| EVD_00015 | L3 | src/views/DocChapter.vue | 85-121 | 跨模块导航 computed 逻辑 | FN_013 |
| EVD_00016 | L1 | src/docs/index.js | 19-25 | systemMeta 字段 | ENT_004 |
| EVD_00017 | L1 | src/docs/index.js | 30-41 | modules/getModule/allChapters | ENT_001 / ENT_002 |
| EVD_00018 | L1 | src/docs/index.js | 48-66 | docStats 推导逻辑 | ENT_005 / FN_001 |
| EVD_00019 | L1 | src/docs/growth.js | 27-80 | 步骤字段结构实证 | ENT_003 |
| EVD_00020 | L1 | README.md | 50-86 | 新增模块两步流程 | FN_014 / FN_015 / FN_016 |
| EVD_00021 | L1 | 一键启动.bat | 19-33 | 依赖安装与启动命令 | FN_017 |
| EVD_00022 | L1 | README.md | 111-125 | 构建产物与部署方式 | FN_018 |
| EVD_00023 | L0 | src/main.js | 1-6 | 无鉴权装配 | ROLE_001 |
| EVD_00024 | L1 | src/router/index.js | 3-26 | 三条路由与无守卫 | PAGE_001~003 |

**双印证组合**（README × 源码）：EVD_00019 + EVD_00020（步骤结构 × 新增流程）、EVD_00021 + EVD_00022（运行 × 部署）、EVD_00023 + EVD_00024（无登录 × 无守卫）。
