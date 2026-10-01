<template>
  <div class="contact-page">
    <header class="page-header">
      <h1>联系我</h1>
    </header>

    <section class="contact-section">
      <div class="contact-card">
        <p><span class="icon">💬</span> <strong>QQ：</strong> 3134069306</p>
        <p><span class="icon">✉️</span> <strong>邮箱：</strong> <a href="mailto:yaoweitao05@gmail.com">yaoweitao05@gmail.com</a></p>
        <p><span class="icon">🎓</span> <strong>学校：</strong> 苏州大学</p>
        <p><span class="icon">🏫</span> <strong>学院：</strong> 计算机科学与技术学院</p>
      </div>

      <div class="contact-note">
        <p>欢迎通过邮件或 QQ 与我联系，期待进一步的交流与合作 😊</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-page {
  background-color: transparent;
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
  color: var(--accent);
}

.contact-section {
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-card {
  background-color: var(--surface);
  border-radius: 10px;
  padding: 24px;
  border: 1px solid var(--border);
}

.contact-card p {
  margin: 12px 0;
  font-size: 1.1rem;
  line-height: 1.8;
  overflow-wrap: anywhere;
}

.contact-card a { color: var(--accent); text-decoration: none; }
.contact-card a:hover { text-decoration: underline; }

.icon {
  margin-right: 10px;
}

.contact-note {
  text-align: center;
  font-size: 1rem;
  color: #ccc;
}
</style>
