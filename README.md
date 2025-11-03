# 我的个人博客

这是一个简单的个人博客系统，使用HTML、CSS和JavaScript构建，支持Markdown格式的文章编写。

## 功能特点

- 简洁的界面设计，专注于内容展示
- 支持Markdown格式文章
- 包含首页、关于页面和文章列表页面
- 响应式设计，适配不同设备
- 可部署到GitHub Pages

## 文件结构

```
blog/
├── index.html       # 首页
├── about.html       # 关于页面
├── posts.html       # 文章列表页面
├── style.css        # 样式文件
├── script.js        # JavaScript文件
├── post/            # 文章目录
│   └── first-post.html  # 示例文章页面
└── README.md        # 项目说明
```

## 添加新文章

要添加新文章，请按照以下步骤操作：

1. 在 `script.js` 文件中的 `posts` 数组中添加新的文章对象，包含id、标题、日期、摘要、内容和标签
2. 在 `post` 目录中创建对应的HTML文件，文件名与文章id一致
3. 参考 `first-post.html` 的格式，确保文件结构正确

## 部署到GitHub Pages

1. 在GitHub上创建一个新的仓库
2. 将本目录下的所有文件上传到仓库
3. 在仓库设置中找到 "GitHub Pages" 选项
4. 选择 `main` 分支作为源，点击保存
5. 稍等片刻，你的博客就会通过 GitHub Pages 发布

## 自定义配置

- 可以修改 `style.css` 文件来自定义博客样式
- 在 `about.html` 中更新个人信息
- 在各页面的 `<a href="#">` 标签中填入你的社交媒体链接

## 注意事项

- 目前文章内容存储在 `script.js` 文件中，适合中小规模的博客
- 对于大型博客，建议考虑使用Jekyll或其他静态站点生成器
- 图片可以放在专门的images目录中，并在Markdown中引用

## 许可证

MIT