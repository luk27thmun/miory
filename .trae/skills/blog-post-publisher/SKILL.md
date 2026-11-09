---
name: "blog-post-publisher"
description: "Publishes, edits, translates or deletes posts on the luk27thmun static blog (GitHub Pages, posts stored in script.js). Invoke when the user asks to add/edit/remove a blog article, fix garbled Chinese text, or push blog changes live."
---

# 博客发文章 Skill（luk27thmun / miory）

处理 `luk27thmun/miory` 这个静态博客的一切发文操作。结构简单，但**编码**、**缓存**、**工作区回退**、**分支错位**四个坑都踩过，必须按下面流程走。

> 本文件已提交进仓库，目的是让它不被工作区快照回退清掉。若发现 `.trae/` 又不见了，用 `git show origin/master:.trae/skills/blog-post-publisher/SKILL.md` 取回。

## 基本信息

| 项 | 值 |
|---|---|
| 仓库 | `https://github.com/luk27thmun/miory` |
| 分支 | `master`（工作区常停在 `trae/agent-xxx`，提交会落错分支） |
| 线上域名 | `https://luk27thmun.com`（CNAME + GitHub Pages，push 后约 1 分钟生效） |
| 文章数据 | 根目录 `script.js` 的 `const posts = [...]` |
| 文章页面 | `post/<id>.html`，仅模板，正文由 `script.js` 渲染 |
| 列表页 | `index.html`（数组顺序）、`posts.html`（按日期倒序） |

## 第 0 步：强制预检（不可跳过）

工作区每次会话开始常被环境快照成 `feat: update workspace` 并回退（已多次导致本地文章消失、`?v=` 版本号倒退、`.trae/` 被清空）。

```bash
cd /workspace
git fetch origin
git merge-base --is-ancestor origin/master HEAD && echo SYNCED || echo DIVERGED
git branch --show-current          # 必须是 master
```

- `DIVERGED` / HEAD ≠ `origin/master` → `git reset --hard origin/master`
- 分支不是 master → `git checkout master`（必要时 `git branch -f master HEAD` 后再切）
- 禁止 `git push --force`

预检后恢复推送守卫（`.git/hooks/` 不随仓库走，每次可能要重装）：

```bash
[ -x .git/hooks/pre-push ] || { cp .trae/skills/blog-post-publisher/pre-push .git/hooks/pre-push && chmod +x .git/hooks/pre-push; }
```

## posts 数组字段

```js
{
    id: 'kebab-case-id',      // 决定网址 post/<id>.html，小写 ASCII、无空格
    title: '标题',
    date: 'YYYY-MM-DD',       // 2026.10.26 要转成 2026-10-26
    excerpt: '摘要',
    content: '正文',          // 单引号字符串，换行写成 \n
    tags: ['标签']
}
```

## 正文支持的 Markdown 子集

支持：`#`/`##`/`###` 标题、段落（每个换行独立 `<p>`，空行渲染 `<br>`）、`- ` 列表、围栏代码块、行内代码、`> ` 引用。
**不支持**：加粗、斜体、图片、超链接（原样显示符号）。要用就先扩展 `markdownToHtml`。

## 铁律：不要用 Python 改 content

Python 的 `decode('unicode_escape')` / latin1 路径会让中文变 `äºå...` 双重编码乱码。唯一正确路径是 Node 让 JS 引擎自己解析、`JSON.stringify` 转义：

```js
const esc = s => JSON.stringify(s).slice(1, -1).replace(/'/g, "\\'");
```

追加文章：

```js
const fs = require('fs');
const content = [ '第一段', '', '第二段' ].join('\n');   // 数组拼段落，避免手写 \n
const esc = s => JSON.stringify(s).slice(1, -1).replace(/'/g, "\\'");
const entry = `,
    {
        id: 'xxx',
        title: '标题',
        date: '2026-11-09',
        excerpt: '摘要',
        content: '${esc(content)}',
        tags: ['标签']
    }
];`;
let src = fs.readFileSync('script.js', 'utf-8');
if (!src.includes("id: 'xxx'")) {
    src = src.replace(/\n    \}\n\];/, '\n    }' + entry);
    fs.writeFileSync('script.js', src, 'utf-8');
}
```

回读校验（`const posts` 不挂 vm 上下文，要换 `var`）：

```js
const fs = require('fs'), vm = require('vm');
const s = fs.readFileSync('script.js', 'utf-8');
const start = s.indexOf('const posts = ');
const arr = 'var posts = ' + s.slice(start + 'const posts = '.length, s.indexOf('];', start) + 1);
const ctx = {}; vm.createContext(ctx); vm.runInContext(arr, ctx);
const p = ctx.posts.find(x => x.id === 'xxx');
console.log(ctx.posts.length, p.title, p.content.split('\n\n')[0]);
```

`node --check` 不够，必须 vm 验证首段/末段中文。

## 发布流程

1. 预检并同步（第 0 步）
2. 改 `script.js`（上面的 Node 脚本）
3. 新建 `post/<id>.html`：复制现有模板，只改 `<title>`
4. **提升缓存版本号**：所有 HTML 的 `script.js?v=N` 统一 +1（`index.html`、`posts.html`、`about.html`、`post/*.html`）
5. 只 add 必要文件（不提交 `.trae-html-share-packages/` 自动生成 zip）
6. 提交推送：
   ```bash
   git branch --show-current          # 必须 master
   git commit -m "Add post: <标题> (<id>)"
   git push origin master
   ```
   若提交落在 `trae/agent-xxx`（push 提示 up-to-date 但线上没变）：
   `git branch -f master HEAD && git checkout master && git push origin master`
7. **线上验证**（40~60s，Pages 可能要两轮）：
   ```bash
   curl -s "https://luk27thmun.com/script.js?v=N&t=$(date +%s)" -o /tmp/live.js   # vm 解析确认条目+中文
   curl -s -o /dev/null -w "%{http_code}\n" "https://luk27thmun.com/post/<id>.html"
   ```
8. 收尾：`git fetch origin && git log --oneline -1 origin/master` 应等于本地 HEAD

## 删除文章

删数组条目 + 删 `post/<id>.html`，再升 `?v=N`。只删页面不删条目 → 首页仍显示、点进去 404。

## 常见故障对照

| 现象 | 原因 | 处理 |
|---|---|---|
| 中文 `äºå...` 乱码 | Python 反转义破坏 UTF-8 | 从 git 历史取完好版本，Node 路径重做 |
| curl 正常，手机仍乱码 | 浏览器+运营商 CDN 缓存 | 升 `?v=N`，无痕验证 |
| 本地文章消失、线上还在 | 工作区被快照回退 | `git reset --hard origin/master` |
| push 提示 up-to-date 但线上没变 | 提交落在 `trae/agent-xxx` | `git branch -f master HEAD` 后切 master 再推 |
| 线上 404 / 旧内容 | Pages 构建未完成 | 等 60s 重试；核对文件名严格等于 id |
| 首页顺序与预期相反 | 首页按数组顺序，列表页按日期倒序 | 改 `renderHomePage` 倒序或 unshift 条目 |

## 交互约定

- 字段：`标题 / 日期 / 摘要 / 标签 / id / 正文`；缺 id 按标题拟 kebab-case，缺日期用当天。
- 发布后回报：文章 URL、改动文件、规范化项、线上校验结果。
- 局部翻译（如「后 N 段改英文」）：只改指定段落，其余字节不动，仍走 Node 路径写回。
