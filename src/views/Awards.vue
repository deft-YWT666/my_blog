<template>
  <div class="awards-page">
    <header class="page-header">
      <h1>竞赛荣誉</h1>
      <p class="subtitle">学科竞赛与创新创业</p>
    </header>

    <section class="awards-section">
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
    </section>
  </div>
</template>

<style scoped>
.awards-page {
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

.awards-section {
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.award-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid #333;
  border-radius: 10px;
  padding: 18px 24px;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.award-card:hover {
  background-color: rgba(255, 255, 255, 0.08);
  transform: translateX(5px);
}

.award-info h3 {
  margin: 0 0 6px 0;
  font-size: 1.05rem;
  color: #fff;
}

.level {
  margin: 0;
  font-size: 0.85rem;
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
  font-size: 1.2rem;
  font-weight: bold;
  color: #42b983;
  margin-bottom: 4px;
}

.date {
  font-size: 0.85rem;
  color: #888;
}

@media (max-width: 600px) {
  .award-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  .award-result {
    text-align: left;
  }
}
</style>
