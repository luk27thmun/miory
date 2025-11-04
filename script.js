// 文章数据 - 实际使用时可以从markdown文件中读取
const posts = [
    {
        id: 'first-post',
        title: '欢迎来到luk27thmun的月寄本',
        date: '2025-11-03',
        excerpt: '关于这个小站是干啥的',
        content: '# 创建这个博客的目的\n\n纪录一些小思绪，可能是精神分析，也可能是llmAgent的使用感想，更可能是牢骚。有些东西不管发布在知乎，b站，抖音还是小红书，都感觉很怪。\n\n## 部署过程\n\n现在是2025年，创建个人博客有如70年入国军。不过感谢于此，我得以用不超过两小时的时间成本完成了从学习了解到域名购买到博客建立，在此之前，我的cs水平仅限于寻找盗版steam游戏。这个小站的建立要感谢ai coding的发展，因为程序和部署都是ai完成的。\n\n毫无疑问，会有很多问题，我会尝试学习部分知识，反正现成的例子就在这里。\n\n## 动机\n\n建立自己博客的想法实际上很久了。sinyalee和他的大作（嘘）算是一个推手，后面会把读后感传一下\n\n## 博客内容\n\n想到哪里写哪里，会尝试兼顾审美，严谨性和道德（排名分先后），但是对于接受不了的人可能会接受不了',
        tags: ['博客']
    }  ,
    {
        id: 'perfume',
        title: '香水喷洒心得',
        date: '2025-11-04',
        excerpt: '如何喷香香',
        content: '上个星期被舍友撺掇买了瓶大地，想着我打扮打扮也算初具人形，喷香香也能加点分不是。这里记录关于香水喷洒心得。\n\n1.不同附着介质的特质不同，例如在羊毛上大地更倾向于将中调缓释挥发出来，是胡椒和安息香的味道1；在化纤上大地更倾向迅速挥发前调，柑橘带点乙醚的气味，挥发完后留下大部分后调和少部分中调。\n\n2.我喜欢能收能放，因为鼻子对强度周期变化的气味更敏感，车载香氛系统就应用了这点。或者说，气味要能动如脱兔静如处子\n\n要做到这一点，应该把香水喷在较大动脉处，然后被掩盖住。刨除掉腋下和会阴这种比较味大的地方，可选的就有：衣领下胸骨上，耳后，肘关节内内，膝关节内，腰际，手腕下方。\n\n为了避免太过刻意以及熏到自己，总体上应喷洒不多于四大泵或八小泵（以大地50ml的瓶瓶为准）。\n\n3.不同场合适合的喷洒方式和香水也不尽相同，比如约会就不能在衣领上喷太多，或者想办法只剩后调，否则会在贴贴的时候熏到对方。鉴于买的其他香水没到以及我还没谈上，这条先搁置一下。 ',
        tags: ['社交', '轻松']
    } 
    
];

// 初始化函数
function init() {
    // 检查当前页面
    const path = window.location.pathname;
    
    if (path.endsWith('index.html') || path === '/') {
        renderHomePage();
    } else if (path.endsWith('posts.html')) {
        renderPostsPage();
    } else if (path.includes('post/')) {
        // 提取文章ID并渲染单篇文章
        const postId = path.split('/').pop().replace('.html', '');
        renderSinglePost(postId);
    }
}

// 渲染首页
function renderHomePage() {
    const postListContainer = document.querySelector('.post-list');
    if (!postListContainer) return;
    
    posts.forEach(post => {
        const postItem = document.createElement('div');
        postItem.className = 'post-item';
        postItem.innerHTML = `
            <h3 class="post-title"><a href="post/${post.id}.html">${post.title}</a></h3>
            <div class="post-date">${post.date}</div>
            <p class="post-excerpt">${post.excerpt}</p>
            <div class="tags">
                ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        `;
        postListContainer.appendChild(postItem);
    });
}

// 渲染文章列表页
function renderPostsPage() {
    const postListContainer = document.querySelector('.post-list');
    if (!postListContainer) return;
    
    // 按日期倒序排列文章
    const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    sortedPosts.forEach(post => {
        const postItem = document.createElement('div');
        postItem.className = 'post-item';
        postItem.innerHTML = `
            <h3 class="post-title"><a href="../post/${post.id}.html">${post.title}</a></h3>
            <div class="post-date">${post.date}</div>
            <p class="post-excerpt">${post.excerpt}</p>
            <div class="tags">
                ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        `;
        postListContainer.appendChild(postItem);
    });
}

// 渲染单篇文章
function renderSinglePost(postId) {
    const post = posts.find(p => p.id === postId);
    if (!post) {
        document.querySelector('.article-content').innerHTML = '<p>文章不存在</p>';
        return;
    }
    
    const articleContent = document.querySelector('.article-content');
    if (!articleContent) return;
    
    articleContent.innerHTML = `
        <div class="article-header">
            <h1>${post.title}</h1>
            <div class="article-date">${post.date}</div>
            <div class="tags">
                ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
        <div class="article-body">
            ${markdownToHtml(post.content)}
        </div>
    `;
    
    // 更新页面标题
    document.title = `${post.title} - luk27thmun的博客`;
}

// 简单的Markdown转HTML函数
function markdownToHtml(markdown) {
    // 标题
    let html = markdown.replace(/^# (.*$)/gm, '<h1>$1</h1>');
    html = html.replace(/^## (.*$)/gm, '<h2>$1</h2>');
    html = html.replace(/^### (.*$)/gm, '<h3>$1</h3>');
    
    // 段落
    html = html.replace(/^(?!<h[1-3]>)(.*$)/gm, match => {
        if (match.trim() === '') return '<br>';
        return `<p>${match}</p>`;
    });
    
    // 列表
    html = html.replace(/^\- (.*$)/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*?<\/li>)+/gs, '<ul>$&</ul>');
    
    // 代码块
    html = html.replace(/```([\s\S]*?)```/gm, '<pre><code>$1</code></pre>');
    
    // 行内代码
    html = html.replace(/`(.*?)`/gm, '<code>$1</code>');
    
    // 引用
    html = html.replace(/^> (.*$)/gm, '<blockquote>$1</blockquote>');
    
    return html;
}

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', init);
