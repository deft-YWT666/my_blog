import { marked } from 'marked'; // 注意这里不是 import * as marked

// 可选：引入高亮插件（如果你需要）
import hljs from 'highlight.js';

// 设置 marked 的选项（可选）
marked.setOptions({
  highlight: (code, lang) => {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlight(code, { language }).value;
  },
  langPrefix: 'hljs language-', // 如果使用 highlight.js 样式
});

export async function loadMarkdown(path) {
  try {
    const response = await fetch(`/markdown${path}`);
    if (!response.ok) throw new Error('Failed to load markdown file');
    const text = await response.text();

    // 使用 marked.parse 替代 marked.default()
    return marked.parse(text);
  } catch (error) {
    console.error('Error loading markdown:', error);
    return '<p>无法加载内容，请检查文件路径或网络连接。</p>';
  }
}