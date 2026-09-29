export const projects = [
  {
    title: 'TaoArxiv — 基于 LLaMA3 8B 构建的 Arxiv 中文搜索引擎',
    time: '2025.05 – 2025.08',
    background: '针对科研入门者及英文能力较弱群体的论文检索痛点，设计并构建 Arxiv 中文搜索引擎。通过 LLM 将论文转化为包含核心概要、算法流程图解、实验数据对比、发布机构背景等中文结构化内容，降低英文论文的检索与理解门槛。',
    work: '使用 CoT、动态 Few-shot 等提示词工程对用户 Query 进行改写和意图分析；设计 BM25 关键词匹配与 Embedding 语义检索相结合的混合召回策略，将结果输入 RoBERTa 重排，通过 top-k 采样选取最终结果，并使用微调后的 LLM 进行论文总结。',
    detailsTitle: '方法创新：',
    details: [
      { label: '数据集构建：', text: '结合人工标注种子数据、教师模型蒸馏和 Evil Instruct 难度扩展，构建基座模型 LoRA（SFT + DPO）微调数据集；通过困惑度过滤、Reward Model 打分、LLM As Judge 和交叉一致性检验筛选数据。' },
      { label: '检索相关性优化：', text: '召回阶段由 BM25 负责关键词匹配、BGE 负责语义召回，实现低延迟粗粒度检索；重排阶段采用 Cross-Encoder 架构进行细粒度语义理解和精排，提升检索效率与相关性。' },
    ],
  },
  {
    title: 'TaoLLaVA — 基于 Qwen-14B 构建的多模态视觉对话模型',
    time: '2026.03 – 2026.04',
    background: '针对 LLaVA 架构中视觉与文本信息密度不对等、参数竞争、token 异构和关键提示词注意力稀释等问题，以及消费级显卡训练显存压力，基于 Qwen-14B 构建视觉语言大模型。',
    work: '使用 ViT 搭建视觉编码器，将输入图像切分为 14 × 14 Patch；使用 BLIP-2 中的 Q-Former 将 Patch 压缩为 32 个视觉 token，通过线性投影层对齐两种模态，并微调 Q-Former 和投影层。',
    detailsTitle: '方法创新：',
    details: [
      { label: '显存优化：', text: '采用 DeepSpeed 分布式训练框架，结合 PP 流水线切分、ZeRO Stage 2 和梯度检查点等策略，降低训练显存开销。' },
      { label: '缓解文本能力灾难性遗忘：', text: '调整文本与图像数据配比，引入代码和数学题等数据补充文本能力，并采用冻结 LLM、仅训练投影层的策略。' },
    ],
  },
  {
    title: 'TaoClaw — 基于 Harness Engineering 的 AI 编程助手系统',
    time: '2026.01 – 2026.03',
    background: '针对 LLM 多厂商接口差异大、Agent 工具调用链路复杂、长上下文对话易溢出、IM 接入成本高等问题，设计并实现四层架构的 AI 编程助手系统，支持自然语言驱动代码读写、命令执行和飞书群聊协同。',
    detailsTitle: '核心工作：',
    details: [
      { label: '统一接口层：', text: '使用模型注册表统一调用接口格式，通过 Streamable 模拟 SSE 流式响应实现打字机效果，降低上层 Agent 适配成本。' },
      { label: '编排内核层：', text: '设计 Agent Loop 支持持续工作，定义工具协议与执行策略，包括工具间依赖、返回值模式和危险命令正则检测。' },
      { label: '应用层：', text: '实现 token 溢出估算与上下文压缩策略，通过树形 Session 分叉切换和 JSONL 支持会话持久化，并利用钩子函数增强多场景能力。' },
      { label: 'IM 桥接层：', text: '通过 IM 适配器将 Agent 接入飞书，实现飞书会话路由与频道级长短期记忆系统。' },
    ],
  },
]

export const awards = [
  { title: '第十六届全国大学生数学竞赛初赛', rank: '一等奖', date: '2024.12' },
  { title: '快手探索者 LLM-Rec 挑战赛 2026', rank: '第 538 位', date: '2026.08' },
  { title: '第八届全国大学生计算机应用能力与数字素养大赛', rank: '二等奖', date: '2026.06' },
  { title: '第八届百度码蹄杯全国大学生程序设计大赛全国总决赛', rank: '铜奖', date: '2026.08' },
  { title: '第七届百度码蹄杯全国大学生程序设计大赛全国总决赛', rank: '铜奖', date: '2025.08' },
  { title: '第十七届蓝桥杯大赛 C++ 程序设计全国总决赛', rank: '三等奖', date: '2026.06' },
  { title: '第十六届蓝桥杯大赛 C++ 程序设计全国总决赛', rank: '三等奖', date: '2025.06' },
  { title: '第二十八届中国机器人及人工智能大赛', rank: '三等奖', date: '2026.08' },
  { title: '第十一届全国大学生生命科学竞赛', rank: '三等奖', date: '2026.08' },
]
