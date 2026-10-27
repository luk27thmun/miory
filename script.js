// 文章数据 - 实际使用时可以从markdown文件中读取
const posts = [
    {
        id: 'first-post',
        title: '欢迎来到luk27thmun的月寄本',
        date: '2025-11-03',
        excerpt: '关于这个小站是干啥的',
        content: '# 创建这个博客的目的\n\n记录一些小思绪，可能是精神分析，也可能是llmagent的使用感想，更可能是牢骚。有些东西不管发布在知乎，b站，抖音还是小红书，都感觉很怪。\n\n## 部署过程\n\n现在是2025年，创建个人博客有如70年入国军。不过感谢于此，我得以用不超过两小时的时间成本完成了从学习了解到域名购买到博客建立，在此之前，我的cs水平仅限于寻找盗版steam游戏。这个小站的建立要感谢ai coding的发展，因为程序和部署都是ai完成的。\n\n毫无疑问，会有很多问题，我会尝试学习部分知识，反正现成的例子就在这里。\n\n## 动机\n\n建立自己博客的想法实际上很久了。sinyalee和他的大作（大嘘）算是一个推手，后面会把读后感传一下。\n\n## 博客内容\n\n想到哪里写哪里，会尝试兼顾审美，严谨性和道德（排名分先后），但是对于接受不了的人大概是接受不了\n\n## 再编\n\n再编：现在是2026年10月26日，最近和家里人弄外贸用了一下域名，归还过来后整理一下月寄。\n\n把中二内容隐藏了一下，毕竟这个博客还是可能有熟人看到的。\n\n另一方面这一年确实发生了很多事，以后可能会常写，那么就以一种新的姿态开始吧',
        tags: ['博客']
    },
    {
        id: 'aimless-sadness',
        title: '无处安放的悲伤',
        date: '2026-10-26',
        excerpt: '天凉好个秋',
        content: 'äºæè¦ä»twiä¸çä¸ç¯å¸å­è¯´èµ·ï¼æè¿æå¨åä¸ä½é¿è¾æ³åæ³åå¤è´¸ï¼ç¨äºä¸ä¸27è¿ä¸ªååä½ä¸ºç¤ºèç«ãäºæ¯çªåå¥æ³å¨è°·æ­ä¸æç´¢ä¸äºä¸èªå·±\n\nç¬¬ä¸ä¸ªå¥½åæ¯æçæå¯ä¸»é¡µï¼å°åçæ¯ä¸äºåç±»è®ºåä¹è³ç¥ä¹aç«è¿ç±»çé¾æ¥ãä»¤äººæå¤çæ¯ï¼æä¸ä¸ªxä¸çå¸å­ï¼ç«ç¶è½¬åäºæçç¥ä¹åç­ã\n\nè¿ç¯åç­æªæ­¢ç®åç«ç¶æäºå°è¿200ä¸çæµè§ï¼ä¹ç®æ¯å°ç«ä¸æãä¸è¿ä¸å¹´è¿å»ï¼åçè¿ç¯åç­ï¼åæ¯å®å¨çèè°¬ã\n\nè®©æä»¬æ¥ççåææ¯æä¹åçï¼\n\n[æä¹æè½å¨éå¸¸æ¼äº®çå¥³çé¢åä¸èªåï¼\n\nä½ æ³cå¥¹ï¼éå¾·ææ¯ä»ä¹ä¸è¥¿è®©ä½ ä¸ºè¿ä¸ªæ³æ³æå°ç¾è»ï¼ä½ ä¸æ¿è®¤è¿ä¸ªæ³æ³ãäºæ¯ä½ å®æäºå¯¹èªå·±çç²¾ç¥éå²ï¼å¤ä½çææ¬²ä»¥çæ§å½¢å¼ä»£å¿åºæ¥ã\n\nç®åå®æä¸æ¥ï¼æææçæ¹æ³æ¯ï¼ççå¯¹æ¹æ´ä¸ªäººï¼æ³è±¡å¥¹åç·ä»¬ä¸æ ·ææå¿èå¨è¡£æä¸é¢ãç¶åå°±å¯ä»¥ååéçå¥ä»¬äº¤æµä¸æ ·ï¼ç¤¼è²åä¸æè°¨äºã]\n\néçå½»å½»åºåºï¼è¿ä¸ä»æ²¡ææåºçæ­£åå ï¼è¿ç»åºäºå®å¨ç¸åçè·¯çº¿ï¼çæ­£çæåµï¼æå¶å®ä¹æ¯å¨ä¸ä¹åæææç½ï¼\n\n[äº§ççæ§]çæºçï¼å¨äºä½ è®¤ä¸ºå¯¹æ¹æ¯[æä¸ºå¼ºå¤§çä¸ªä½]ï¼èä½ ä¹æä»¥ä¼è¿ä¹ä»¥ä¸ºï¼æ¯å ä¸ºä½ å¨å¥¹çèº«ä¸çå°äºä¸ä¼¼å¡äººæåºè½æçé«å°åè´¨ã\n\næ¯çï¼æä¸ºé«å°çåè´¨ï¼æ¯å¦è¶ä¹æ³è±¡å¹¿éçåå®¹æ§ï¼æ¯å¦ä¹è§çåè´¨ï¼æ¯å¦å¨éå°æçæé¾çå­¦é¿ä¸æ¢æéæè¢«æï¼è¿ç±»è®©äººæè§å¿ä¹èåçç¹è´¨ï¼ä¼¼ä¹è¯å®äºè¿æ¯ä¸ä¸ªç»å¯¹çå¼ºèï¼è¿è¶èªå·±æ³è±¡çå¼ºï¼æä»¥å¥¹æè¶ä¹æ³è±¡çæ¸©æã\n\nè¿å¾å¯¹åï¼ä½æ¯é®é¢åºå¨éç¨èå´ä¸ï¼éæ§çç¹è´¨ï¼åæ¯ï¼å¿ è¯ï¼åæ¢ï¼æ¯è¿æ ·çãä½éæ§çç¹è´¨ï¼å¶å®è¿è¿ç¸åï¼è¿æ¯æææçäºå®ï¼éæ§çç¾å¥½åå¾·ï¼æ¯æ åºæ¥çã\n\nè¯´å®è¯ï¼è¿æ¯é¾ä»¥æ³è±¡çï¼æ äººï¼æä¹ä¼äº§çç¾å¥½çäºç©å¢ï¼ä½ä½ ä¸å®æè¯å°è¿ä¸ç¹ï¼é£å°±å¯ä»¥é¢ä¼è¿æ¯humankindçåºå±ä»£ç ãæ ï¼æè½äº§åºçæè¬æ´ç½ï¼çç è¬æ æçäººæ ¼ã\n\nSo that pure, radiant girl — the one I ached for day and night, my emotional anchor for years — was actually forged through the harshest confinement. Nothing more than the product of strict parental control.\n\nAnd at that point, there was nothing left to [fear]. Her exquisite character didn\'t mean she was some being beyond my grasp; it meant she had endured a burden I could scarcely fathom.\n\nHow devastatingly sad. Yet I can\'t quite find where to place the grief — things happened as they did, and there\'s nothing to be done or said. The girl I carried in my heart is gone anyway. She speaks up now, shows herself, calls out people she doesn\'t like on Moments — and that\'s all for the best. After all, why would I ever want the person I cared for most to remain confined?\n\nCome to think of it, maybe the moment I was truly ensnared — and fell hopelessly in love — was when a middle school classmate told me: [She wrote a very bleak essay, about being forced to learn piano and play the perfect daughter her whole life, about not wanting to keep going, about wanting it all to end]\n\nI don\'t know if she was summoned to the teacher\'s office over it. But under the same circumstances, I never went.\n\nYes — this is the absolute urge to destroy. The absolute urge to destroy is first and foremost self-destruction: to tear down both the beauty and the confinement that shaped her. It\'s the ultimate rebellion. And maybe that\'s the real reason I\'ve never been able to let her go.\n\nThe wine has done its work, I\'m drunk now. So let\'s leave it here. I wonder if the sober version of myself will delete this. At least these are the words I need to say right now.',
        tags: ['酒馆随笔']
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
