# 任务：修正 feberes.com 全站 canonical / hreflang / og:url

> 直接复制本文件全文给原 IDE 的 AI 执行。本次只改 SEO 元数据，**不要改设计、文案、路由结构**。

## 1. 问题背景（先读，避免误判）

线上站点 `https://feberes.com`（Astro 构建，托管 GitHub Pages）所有页面的 canonical / hreflang / og:url 都写成了旧博客域名 `https://www.luk27thmun.com`，原因是项目从旧模板继承了站点 URL。

实测证据（改动前）：

| 页面 | 当前 canonical |
| --- | --- |
| `https://feberes.com/en/` | `https://www.luk27thmun.com/en` |
| `https://feberes.com/zh/` | `https://www.luk27thmun.com/zh` |
| `https://feberes.com/en/products/` | `https://www.luk27thmun.com/en/products` |
| `https://feberes.com/en/factory/` | `https://www.luk27thmun.com/en/factory` |
| 产品页 | `https://www.luk27thmun.com/en/products/polyester-dty-yarn` |

后果：Google 依据 canonical 把 feberes 的内容归到 luk27thmun.com 名下，搜索 `luk27thmun` 会出现"标题是化纤厂、点进去是博客"的错误结果，feberes.com 自身未被正常收录。

另有三个问题需要一并处理：

1. 实际 URL 带结尾斜杠（`/en` → 301 → `/en/`），但 canonical 不带斜杠，不一致。
2. `robots.txt`、`sitemap.xml` 均返回 404。
3. 根路径 `/` 只是一段 `location.replace()` 的 JS 跳转空页，`<title>` 还是中文"河北菲泊丝化纤材料有限公司"。
4. 站点只绑定了裸域 `feberes.com`，`https://www.feberes.com` 证书报错、无法访问 → **canonical 必须使用不带 www 的 `https://feberes.com`**。

## 2. 目标

全站所有绝对 URL 统一为 `https://feberes.com`，不得出现任何 `luk27thmun` 字符串；canonical 必须与页面最终 URL 完全一致（含结尾斜杠）。

## 3. 执行步骤

### 步骤 1：找到站点 URL 的唯一来源

```bash
grep -rn "luk27thmun" . --exclude-dir=node_modules --exclude-dir=.git
```

重点检查：

- `astro.config.mjs` / `astro.config.ts` 里的 `site:`
- `src/config.*`、`src/data/site.*`、`src/consts.*` 之类的站点配置常量
- `src/layouts/BaseLayout.astro`（或同级 layout）里拼 canonical / hreflang / og:url 的代码
- `public/` 下任何静态 HTML（尤其根 `index.html`）
- 模板残留：`@luk27thmun` 这个社交账号、JSON-LD 里的 `sameAs`、地址/营业时间配置

把源头的站点 URL 改为 `https://feberes.com`（**不要**带 www，也不要带结尾斜杠），让 canonical 从这里派生，而不是硬编码。

`astro.config.mjs` 建议：

```js
export default defineConfig({
  site: 'https://feberes.com',
  trailingSlash: 'always',
  // 其余配置保持原样
});
```

### 步骤 2：canonical 生成规则

规则：canonical = `https://feberes.com` + 当前语言前缀 + 当前路径（保留结尾斜杠）。

示例对照：

| 页面 | 期望 canonical |
| --- | --- |
| `/en/` | `https://feberes.com/en/` |
| `/zh/` | `https://feberes.com/zh/` |
| `/en/products/` | `https://feberes.com/en/products/` |
| `/zh/factory/` | `https://feberes.com/zh/factory/` |
| `/en/products/recycled-polyester-yarn/` | `https://feberes.com/en/products/recycled-polyester-yarn/` |
| `/en/products/?cat=nylon`（带查询参数） | `https://feberes.com/en/products/`（丢弃查询参数） |

参考实现（按项目实际结构调整，不要照抄变量名）：

```astro
---
const site = Astro.site ?? new URL('https://feberes.com');
const path = Astro.url.pathname;                       // 例：/en/products/
const lang = path.startsWith('/zh') ? 'zh' : 'en';
const rest = path.replace(/^\/(en|zh)/, '').replace(/\/?$/, '/'); // 例：/products/
const canonical = new URL(`/${lang}${rest}`, site).href;
const enUrl = new URL(`/en${rest}`, site).href;
const zhUrl = new URL(`/zh${rest}`, site).href;
---
<link rel="canonical" href={canonical} />
<link rel="alternate" hreflang="en" href={enUrl} />
<link rel="alternate" hreflang="zh-CN" href={zhUrl} />
<link rel="alternate" hreflang="x-default" href={enUrl} />
<meta property="og:url" content={canonical} />
```

注意：

- 不要用 `Astro.url.pathname` 直接拼，否则带查询参数时会生成多套重复地址。
- 根路径 `/` 的 canonical 指向 `https://feberes.com/en/`（见步骤 4）。

### 步骤 3：清理模板残留

- JSON-LD `Organization` 里的 `url`、`@id` 改为 `https://feberes.com`；删除指向 `@luk27thmun` 的 `sameAs`（除非该账号确实是本站账号）。
- `og:site_name` 保持公司名，不要出现域名以外的旧信息。
- 检查页脚/联系方式里是否还残留旧域名邮箱或链接。

### 步骤 4：根路径 `/` 处理

当前是 JS 跳转空页，Google 抓取体验差。改为静态跳转页（`public/index.html` 或构建产物根部）：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Feberes — Chemical Fiber Yarn Manufacturer &amp; Exporter</title>
  <meta http-equiv="refresh" content="0; url=/en/">
  <link rel="canonical" href="https://feberes.com/en/">
  <link rel="alternate" hreflang="en" href="https://feberes.com/en/">
  <link rel="alternate" hreflang="zh-CN" href="https://feberes.com/zh/">
  <link rel="alternate" hreflang="x-default" href="https://feberes.com/en/">
  <script>location.replace('/en/');</script>
</head>
<body>
  <p><a href="/en/">English</a> · <a href="/zh/">中文</a></p>
</body>
</html>
```

如果托管环境支持服务端 301（如 Netlify/Cloudflare Pages/Vercel），优先用 301 重定向替代 meta refresh。

### 步骤 5：robots.txt

放到 `public/robots.txt`：

```
User-agent: *
Allow: /

Sitemap: https://feberes.com/sitemap.xml
```

### 步骤 6：sitemap.xml

优先使用 `@astrojs/sitemap`（`site` 配好后自动生成，并正确处理 `trailingSlash`）。若不便引入插件，则在 `public/sitemap.xml` 写静态文件，覆盖以下 25 个 URL（均带结尾斜杠，不带查询参数）：

```
https://feberes.com/en/
https://feberes.com/zh/
https://feberes.com/en/products/
https://feberes.com/zh/products/
https://feberes.com/en/factory/
https://feberes.com/zh/factory/
https://feberes.com/en/contact/
https://feberes.com/zh/contact/
https://feberes.com/en/products/polyester-dty-yarn/
https://feberes.com/zh/products/polyester-dty-yarn/
https://feberes.com/en/products/polyester-fdy-yarn/
https://feberes.com/zh/products/polyester-fdy-yarn/
https://feberes.com/en/products/polyester-poy-yarn/
https://feberes.com/zh/products/polyester-poy-yarn/
https://feberes.com/en/products/polyester-sewing-thread/
https://feberes.com/zh/products/polyester-sewing-thread/
https://feberes.com/en/products/recycled-polyester-yarn/
https://feberes.com/zh/products/recycled-polyester-yarn/
https://feberes.com/en/products/nylon-dty-yarn/
https://feberes.com/zh/products/nylon-dty-yarn/
https://feberes.com/en/products/spandex-covered-yarn/
https://feberes.com/zh/products/spandex-covered-yarn/
https://feberes.com/en/products/intermingled-twisted-yarn/
https://feberes.com/zh/products/intermingled-twisted-yarn/
https://feberes.com/en/
```

（最后一条是根路径的规范地址；如根路径做 301 到 `/en/`，则 sitemap 只保留 `/en/`，不要收录 `/` 本身。）

## 4. 验收标准（必须逐条自检后交付）

本地构建后执行：

```bash
# 1) 源码中不再有旧域名
grep -rn "luk27thmun" . --exclude-dir=node_modules --exclude-dir=.git   # 期望：无输出

# 2) 构建产物每个页面 canonical 与路径一致，且带结尾斜杠
grep -rho 'rel="canonical" href="[^"]*"' dist | sort -u

# 3) 每个页面都有 3 条 hreflang（en / zh-CN / x-default）
grep -rho 'hreflang="[^"]*"' dist | sort | uniq -c
```

部署后用线上地址复核：

```bash
for u in /en/ /zh/ /en/products/ /en/factory/ /zh/contact/ /en/products/recycled-polyester-yarn/; do
  echo -n "$u -> "
  curl -sSL "https://feberes.com$u" | grep -o 'rel="canonical" href="[^"]*"' | head -1
done
curl -s -o /dev/null -w "robots=%{http_code}\n" https://feberes.com/robots.txt
curl -s -o /dev/null -w "sitemap=%{http_code}\n" https://feberes.com/sitemap.xml
```

通过条件：

- [ ] 全程无 `luk27thmun` 字符串（源码、构建产物、JSON-LD、og:url）
- [ ] 所有 canonical 形如 `https://feberes.com/<lang>/<path>/`，与 301 后的最终 URL 完全一致
- [ ] 每条 hreflang 都带结尾斜杠，`x-default` 指向英文版
- [ ] `robots.txt`、`sitemap.xml` 返回 200，sitemap 内所有 URL 均返回 200
- [ ] 根路径不再只有 JS 跳转，含 canonical 与可点击兜底链接
- [ ] 页面可见内容、布局、路由、样式无任何变化

## 5. 不要做的事

- 不要添加 `noindex`、不要在 robots.txt 里整站 Disallow。
- 不要修改 URL 结构、不要给页面改文件名或加语言前缀。
- 不要把 canonical 指向 `www.feberes.com`（该子域无有效证书）。
- 不要顺手"优化"文案或替换图片，本次只修元数据。

## 6. 部署后的人工操作（告知用户，不属代码改动）

1. GitHub Pages 设置里开启 **Enforce HTTPS**（目前 `http://feberes.com` 仍返回 200，未跳转 https）。
2. Google Search Console 添加 `feberes.com` 资源，提交 `sitemap.xml`，对 `/en/`、`/zh/` 及核心产品页做"网址检查 → 请求编入索引"。
3. 建议同时绑定 `www.feberes.com` 并 301 到裸域，或彻底不用 www（二选一，保持唯一入口）。
