<template>
  <div class="projects-page">
    <header class="page-header">
      <h1>项目经历</h1>
      <p class="subtitle">工程实践与系统开发</p>
    </header>

    <section class="projects-section">
      <div v-for="project in projects" :key="project.title" class="project-card">
        <div class="project-header">
          <h3>{{ project.title }}</h3>
          <span class="time">{{ project.time }}</span>
        </div>
        <div class="project-body">
          <p><strong>项目背景：</strong>{{ project.background }}</p>
          <p v-if="project.work"><strong>核心工作：</strong>{{ project.work }}</p>
          <div class="innovation">
            <strong>{{ project.detailsTitle }}</strong>
            <ul>
              <li v-for="detail in project.details" :key="detail.label"><strong>{{ detail.label }}</strong>{{ detail.text }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { projects } from '../data/experience.js'
</script>

<style scoped>
.projects-page {
  background-color: transparent;
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
  color: var(--accent);
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
  background-color: var(--surface);
  border: 1px solid var(--border);
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
  color: #ccc;
  font-size: 0.95rem;
  line-height: 1.7;
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
