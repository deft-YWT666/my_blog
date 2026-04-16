<template>
  <div class="undergraduate-page">
    <!-- 科研经历 -->
    <section class="section">
      <header class="page-header">
        <h1>科研经历</h1>
        <p class="subtitle">学术论文与研究成果</p>
      </header>

      <div class="papers-section">
        <!-- Paper 1 -->
        <div class="paper-card">
          <div class="paper-header">
            <h3>Ear and ear sub-regions segmentation method via location delimitation attention and multi-scale detail perception</h3>
            <span class="badge first-author">学生一作</span>
          </div>
          <p class="journal">《The Journal of Supercomputing》(CCF-C类)</p>
          <p class="time">2025.11 – 2026.02</p>
          <div class="paper-body">
            <p><strong>研究动机：</strong>耳部图像智能分析为疾病自动筛查提供了非侵入式解决方案，耳部子区域分割是该项分析技术的基础。针对多实例分割任务中小尺度目标类别分割性能受限的问题，以 YOLOv12 为 baseline 提出融合多策略的分割模型 <strong>MESS-YOLO12</strong>。</p>
            <p><strong>方法创新：</strong>引入 LDAblock（定位与分界注意力模块）提升全局特征捕获能力；提出 MDPblock（多尺度细节感知模块）强化小目标特征表征；设计边缘增强损失函数缓解目标边界特征计算效果不佳的问题。</p>
            <p><strong>评价指标：</strong>在私有数据集 TCMEar 和公开数据集 Ear210 上验证，31 个耳部子区域分割任务的平均 Dice 系数分别达到 <strong>0.5941</strong> 和 <strong>0.6368</strong>，小目标分割 Dice 系数平均提升 5% 以上，多数常见指标超越 SOTA。</p>
          </div>
        </div>

        <!-- Paper 2 -->
        <div class="paper-card">
          <div class="paper-header">
            <h3>Knowledge-Guided Clustering with Heatmap-Based Scene Segmentation of AIS Data for Fishing Behavior Analysis</h3>
            <span class="badge first-author">学生一作</span>
          </div>
          <p class="journal">《Journal of Marine Science and Engineering》(中科院三区，JCR Q2)</p>
          <p class="time">2025.09 – 2026.03</p>
          <div class="paper-body">
            <p><strong>研究动机：</strong>分析渔业行为模式和季节性洄游路线对于估算捕捞努力量、评估兼捕风险以及实施有效的空间管理至关重要。针对传统聚类方法难以捕捉 AIS 数据中复杂时空语义和动态转换特征的问题，提出基于热力图场景分割的知识引导聚类框架。</p>
            <p><strong>方法创新：</strong>将 AIS 数据转化为热力图分布以可视化密度特征；引入多视图语义相似度（MVSS）并结合滑动窗口机制检测突变点，将长时间序列轨迹分割为语义一致的“小场景”；最后将分割片段聚类归纳为若干“大场景”。</p>
            <p><strong>评价指标：</strong>通过东海开源脱敏数据集实验，该方法在多项评价指标上优于 K-Means、DBSCAN、HDBSCAN、层次聚类等算法。</p>
          </div>
        </div>

        <!-- Paper 3 -->
        <div class="paper-card">
          <div class="paper-header">
            <h3>Modelling climate-driven distribution ... using an NSGA-III-optimised MaxEnt framework</h3>
            <span class="badge co-author">第五作者</span>
          </div>
          <p class="journal">《Plant Science》(中科院二区，JCR Q1)</p>
          <p class="time">2025.11 – 2026.02</p>
          <div class="paper-body">
            <p><strong>研究动机：</strong>藜芦是一种有毒药用植物，气候变化可能改变其潜在分布范围和牲畜接触风险。本研究预测当前及未来气候条件下藜芦在中国的潜在分布，识别主要环境驱动因子，并评估牲畜接触风险。</p>
            <p><strong>方法创新：</strong>设计 NSGA-III 驱动的 MaxEnt 多目标（AUC、TSS、OR10、AICc）优化框架，替代传统网格搜索与单目标调参。</p>
            <p><strong>评价指标：</strong>测试集 AUC 值 <strong>0.881</strong>。未来气候情景下，适宜区总面积预计增加 <strong>18%–41%</strong>，高适宜区最大可扩张 <strong>185%</strong>。</p>
          </div>
        </div>

        <!-- Paper 4 -->
        <div class="paper-card">
          <div class="paper-header">
            <h3>基于耳穴分区的 YOLOv12n-BiGS 中医耳穴检测算法研究</h3>
            <span class="badge first-author">学生一作</span>
          </div>
          <p class="journal">《中华中医药学刊》（双核心）</p>
          <p class="time">2025.11 – 2025.12</p>
          <div class="paper-body">
            <p><strong>研究动机：</strong>传统耳穴检测方式高度依赖专业医师的临床经验，不仅主观性强、效率低下，且普遍存在精度与速度难以兼顾的痛点。为此，本研究提出一种基于 YOLOv12 的改进型中医耳穴检测算法 <strong>YOLOv12n-BiGS</strong>。</p>
            <p><strong>方法创新：</strong>引入 C3k2-GV3S 模块将参数量与计算量降低约 50%，同时强化耳穴小目标的关键特征表征。设计 BABEU 模块替代传统插值操作，显著提升耳穴小目标的边界特征恢复精度。</p>
            <p><strong>评价指标：</strong>该模型在专用数据集上的平均 Dice 系数达 <strong>0.5821</strong>，综合性能优于 YOLOv12n、YOLOv11n 等主流轻量化算法。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 项目经历 -->
    <section class="section">
      <header class="page-header">
        <h1>项目经历</h1>
        <p class="subtitle">工程实践与系统开发</p>
      </header>

      <div class="projects-section">
        <div class="project-card">
          <div class="project-header">
            <h3>基于 LLM 构建的 Arxiv 中文搜索引擎</h3>
            <span class="time">2025.05 – 2025.08</span>
          </div>
          <div class="project-body">
            <p><strong>项目背景：</strong>针对科研入门者及英文能力较弱群体的论文检索痛点，设计并构建一款 Arxiv 中文搜索引擎。通过 LLM 技术，将 Arxiv 论文转化为包含核心概要、算法流程图解、实验数据对比、发布机构背景等中文结构化内容，降低英文论文的检索与理解门槛。</p>
            <p><strong>核心工作：</strong>使用 Universal Self-Consistency、CoT、Refine Prompt 等技术构建高质量英文论文总结数据集；基于 LoRA 微调 7B 基础语言模型，并在 SFT 基础上使用 DPO 进行偏好对齐；通过定制化 Prompt 对总结内容分级评分。</p>
            <div class="innovation">
              <strong>方法创新：</strong>
              <ul>
                <li><strong>Query 改写优化：</strong>使用 CoT 和动态 few-shot prompt 分析用户 Query，构建高质量改写数据集并微调 0.5B 模型，降低服务成本。</li>
                <li><strong>检索相关性优化：</strong>通过大模型生产多场景用户 Query，结合 ES 引擎构建 &lt;Query, Doc&gt; 对；使用大模型构造正负样本集完成 Embedding 模型与 Reranker 模型的联合微调。</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 竞赛荣誉 -->
    <section class="section">
      <header class="page-header">
        <h1>竞赛荣誉</h1>
        <p class="subtitle">学科竞赛与创新创业</p>
      </header>

      <div class="awards-section">
        <div class="award-card">
          <div class="award-info">
            <h3>第十六届全国大学生数学竞赛</h3>
            <p class="level national">国家级</p>
          </div>
          <div class="award-result">
            <span class="rank">一等奖</span>
            <span class="date">2024.12</span>
          </div>
        </div>

        <div class="award-card">
          <div class="award-info">
            <h3>第七届百度码蹄杯全国大学生程序设计大赛</h3>
            <p class="level national">国家级</p>
          </div>
          <div class="award-result">
            <span class="rank">铜奖</span>
            <span class="date">2025.08</span>
          </div>
        </div>

        <div class="award-card">
          <div class="award-info">
            <h3>第十六届蓝桥杯全国软件和信息技术专业人才大赛</h3>
            <p class="level national">国家级</p>
          </div>
          <div class="award-result">
            <span class="rank">三等奖</span>
            <span class="date">2025.06</span>
          </div>
        </div>

        <div class="award-card">
          <div class="award-info">
            <h3>第三届辽宁省大学生中医药大健康产业创新创业大赛</h3>
            <p class="level provincial">省级</p>
          </div>
          <div class="award-result">
            <span class="rank">一等奖</span>
            <span class="date">2024.12</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.undergraduate-page {
  background-color: #000;
  color: white;
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  gap: 50px;
}

.section {
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.page-header {
  text-align: center;
  margin-bottom: 30px;
}

.page-header h1 {
  font-size: 2.2rem;
  color: #42b983;
  margin-bottom: 8px;
}

.subtitle {
  color: #888;
  font-size: 1rem;
}

/* 科研经历 */
.papers-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.paper-card {
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid #333;
  border-radius: 12px;
  padding: 20px;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.paper-card:hover {
  background-color: rgba(255, 255, 255, 0.08);
  transform: translateY(-3px);
}

.paper-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 10px;
}

.paper-header h3 {
  margin: 0;
  font-size: 1.1rem;
  color: #fff;
  line-height: 1.4;
  flex: 1;
}

.badge {
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;
}

.first-author {
  background-color: rgba(66, 185, 131, 0.2);
  color: #42b983;
}

.co-author {
  background-color: rgba(255, 193, 7, 0.2);
  color: #ffc107;
}

.journal {
  margin: 0 0 6px 0;
  color: #42b983;
  font-size: 0.9rem;
}

.time {
  margin: 0 0 12px 0;
  color: #888;
  font-size: 0.8rem;
}

.paper-body p {
  margin: 6px 0;
  line-height: 1.7;
  color: #ccc;
  font-size: 0.9rem;
}

/* 项目经历 */
.projects-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.project-card {
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid #333;
  border-radius: 12px;
  padding: 20px;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.project-card:hover {
  background-color: rgba(255, 255, 255, 0.08);
  transform: translateY(-3px);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}

.project-header h3 {
  margin: 0;
  font-size: 1.1rem;
  color: #fff;
  flex: 1;
}

.project-body p {
  margin: 8px 0;
  line-height: 1.7;
  color: #ccc;
  font-size: 0.9rem;
}

.innovation {
  margin-top: 10px;
  padding: 12px;
  background-color: rgba(66, 185, 131, 0.08);
  border-radius: 8px;
  border-left: 3px solid #42b983;
}

.innovation ul {
  margin: 6px 0 0 0;
  padding-left: 18px;
  color: #ddd;
  line-height: 1.6;
}

.innovation li {
  margin-bottom: 4px;
}

/* 竞赛荣誉 */
.awards-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.award-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid #333;
  border-radius: 10px;
  padding: 16px 20px;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.award-card:hover {
  background-color: rgba(255, 255, 255, 0.08);
  transform: translateX(5px);
}

.award-info h3 {
  margin: 0 0 4px 0;
  font-size: 1rem;
  color: #fff;
}

.level {
  margin: 0;
  font-size: 0.8rem;
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
}

.national {
  background-color: rgba(66, 185, 131, 0.15);
  color: #42b983;
}

.provincial {
  background-color: rgba(100, 149, 237, 0.15);
  color: #6495ed;
}

.award-result {
  text-align: right;
}

.rank {
  display: block;
  font-size: 1.1rem;
  font-weight: bold;
  color: #42b983;
  margin-bottom: 2px;
}

.date {
  font-size: 0.8rem;
  color: #888;
}

@media (max-width: 768px) {
  .paper-header,
  .project-header,
  .award-card {
    flex-direction: column;
  }
  .award-result {
    text-align: left;
  }
}
</style>
