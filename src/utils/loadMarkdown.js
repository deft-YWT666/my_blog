import { marked } from 'marked'; // 注意这里不是 import * as marked

// 可选：引入高亮插件（如果你需要）
import hljs from 'highlight.js/lib/core';
import cpp from 'highlight.js/lib/languages/cpp';
import python from 'highlight.js/lib/languages/python';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import bash from 'highlight.js/lib/languages/bash';
import plaintext from 'highlight.js/lib/languages/plaintext';

hljs.registerLanguage('cpp', cpp);
hljs.registerLanguage('python', python);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('plaintext', plaintext);

marked.use({
  renderer: {
    code({ text, lang }) {
      const requestedLanguage = (lang || '').split(/\s+/)[0];
      const language = hljs.getLanguage(requestedLanguage) ? requestedLanguage : 'plaintext';
      const highlighted = hljs.highlight(text, { language }).value;
      return `<pre><code class="hljs language-${language}">${highlighted}</code></pre>`;
    },
  },
});

export async function loadMarkdown(path) {
  try {
    const base = import.meta.env.BASE_URL || '/';
    const response = await fetch(`${base}markdown${path}`);
    if (!response.ok) throw new Error('Failed to load markdown file');
    const text = await response.text();

    // 使用 marked.parse 替代 marked.default()
    return marked.parse(text);
  } catch (error) {
    console.error('Error loading markdown:', error);
    return '<p>无法加载内容，请检查文件路径或网络连接。</p>';
  }
}
