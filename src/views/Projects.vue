<template>
  <div class="projects-page">
    <header class="page-header">
      <h1>项目经历</h1>
      <p class="subtitle">工程实践与系统开发</p>
    </header>

    <section class="projects-section">
      <!-- Project 1 -->
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
    </section>
  </div>
</template>

<style scoped>
.projects-page {
  background-color: #000;
  color: white;
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
}

.page-header {
  text-align: center;
  margin-bottom: 30px;
}

.page-header h1 {
  font-size: 2.5rem;
  color: #42b983;
  margin-bottom: 8px;
}

.subtitle {
  color: #888;
  font-size: 1rem;
}

.projects-section {
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.project-card {
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid #333;
  border-radius: 12px;
  padding: 24px;
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
  margin-bottom: 14px;
  flex-wrap: wrap;
}

.project-header h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #fff;
  flex: 1;
}

.time {
  color: #888;
  font-size: 0.9rem;
  white-space: nowrap;
}

.project-body p {
  margin: 10px 0;
  line-height: 1.7;
  color: #ccc;
  font-size: 0.95rem;
}

.innovation {
  margin-top: 12px;
  padding: 14px;
  background-color: rgba(66, 185, 131, 0.08);
  border-radius: 8px;
  border-left: 3px solid #42b983;
}

.innovation ul {
  margin: 8px 0 0 0;
  padding-left: 18px;
  color: #ddd;
  line-height: 1.7;
}

.innovation li {
  margin-bottom: 6px;
}
</style>
