<template>
  <div class="contact-page">
    <header class="page-header">
      <h1>联系我</h1>
    </header>

    <section class="contact-section">
      <div class="contact-card">
        <p><span class="icon">📱</span> <strong>电话：</strong> 18915610140</p>
        <p><span class="icon">✉️</span> <strong>邮箱：</strong> 18915610140@163.com</p>
        <p><span class="icon">🎓</span> <strong>学校：</strong> 辽宁中医药大学 · 信息工程学院</p>
      </div>

      <div class="contact-note">
        <p>欢迎通过邮件或电话与我联系，期待进一步的交流与合作 😊</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-page {
  background-color: #000;
  color: white;
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.page-header {
  text-align: center;
  margin-bottom: 30px;
}

.page-header h1 {
  font-size: 2.5rem;
  color: #42b983;
}

.contact-section {
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-card {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 24px;
  border: 1px solid #333;
}

.contact-card p {
  margin: 12px 0;
  font-size: 1.1rem;
}

.icon {
  margin-right: 10px;
}

.contact-note {
  text-align: center;
  font-size: 1rem;
  color: #ccc;
}
</style>
