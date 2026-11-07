// ============================================================
// 文章数据：要发布新文章，往 ARTICLES 数组里加一项即可。
// 字段说明：
//   id       唯一标识（英文短横，用于内部定位）
//   title    标题
//   date     发布日期 YYYY-MM-DD
//   excerpt  列表页的一句话摘要
//   content  正文（可直接写 HTML，如 <p> <ul> <code> 等）
// ============================================================
const ARTICLES = [
  {
    id: 'privacy-chatbot-notes',
    title: '做隐私法垂直 Chatbot 的一点思路',
    date: '2026-11-07',
    excerpt: '20 份各国法律，不微调、用 RAG，让小模型只负责"理解模糊要求"，检索负责"给对法条"。',
    content: `
      <p>核心结论：这种场景不需要先进大模型。把法律做成可检索的法条库（corpus），用户提问时先由轻量模型把模糊要求解析成结构化查询，再做混合检索 + 重排，最后生成带引用的法条。</p>
      <p>网站这边先搭好底层，chatbot 后续以 iframe / 挂载脚本形式接入 demos 页即可，互不耦合。</p>
      <p>两条入口：AI 文本模式（自动解析）和手动下拉筛选（国家 → 情景 → 行为），在"结构化查询"这一步汇合，后面共用同一条检索链。</p>
    `
  },
  {
    id: 'rag-vs-finetune',
    title: 'RAG 还是微调？小语料下的选择',
    date: '2026-10-30',
    excerpt: '语料只有 20 份法律时，微调性价比低；RAG 即插即用，还天然可解释、可溯源。',
    content: `
      <p>当你手里是"几十份权威文档"而不是"海量训练样本"时，RAG 几乎是默认解：</p>
      <ul>
        <li>即插即用：文档改了，重新建索引就行，不用重训。</li>
        <li>可解释：返回的是真实法条原文 + 条款号，能溯源，不怕幻觉。</li>
        <li>成本低：模型只做"理解 + 解读"，不需很大。</li>
      </ul>
      <p>微调只在"通用模型确实听不懂你的领域黑话"时才考虑，而且需要标注数据，工程量不小。</p>
    `
  }
];

// 渲染列表
function renderList() {
  var list = document.getElementById('article-list');
  var detail = document.getElementById('article-detail');
  list.hidden = false;
  detail.hidden = true;
  list.innerHTML = '';
  ARTICLES.forEach(function (a) {
    var el = document.createElement('div');
    el.className = 'article-item';
    el.innerHTML =
      '<h3>' + a.title + '</h3>' +
      '<p class="meta">' + a.date + '</p>' +
      '<p class="excerpt">' + a.excerpt + '</p>';
    el.addEventListener('click', function () { renderDetail(a.id); });
    list.appendChild(el);
  });
}

// 渲染详情
function renderDetail(id) {
  var a = ARTICLES.find(function (x) { return x.id === id; });
  if (!a) return;
  var list = document.getElementById('article-list');
  var detail = document.getElementById('article-detail');
  list.hidden = true;
  detail.hidden = false;
  detail.innerHTML =
    '<a class="back" href="#" onclick="renderList();return false;">← 返回列表</a>' +
    '<h2>' + a.title + '</h2>' +
    '<p class="meta">' + a.date + '</p>' +
    a.content;
  window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', renderList);
