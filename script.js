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
        content: '事情要从twi上的一篇帖子说起，最近我在和一位长辈想办法做外贸，用了一下27这个域名作为示范站。于是突发奇想在谷歌上搜索下了下自己\n\n第一个好像是我的月寄主页，尔后的是一些各类论坛乃至知乎a站这类的链接。令人意外的是，有一个x上的帖子，竟然转发了我的知乎回答。\n\n这篇回答截止目前竟然有了将近200万的浏览，也算是小火一把。不过一年过去，再看这篇回答，则是完全的荒谬。\n\n让我们来看看原文是怎么写的：\n\n[怎么才能在非常漂亮的女生面前不自卑？\n\n你想c她，道德或是什么东西让你为这个想法感到羞耻，你不承认这个想法。于是你完成了对自己的精神阉割，多余的星欲以畏惧形式代偿出来。\n\n目前实操下来，最有效的方法是：看着对方整个人，想象她和爷们一样有把儿藏在衣服下面。然后就可以像和陌生哥们交流一样，礼貌又不拘谨了。]\n\n错的彻彻底底！这不仅没有指出真正原因，还给出了完全相反的路线！真正的情况，我其实也是在不久前才搞明白：\n\n[产生畏惧]的机理，在于你认为对方是[极为强大的个体]，而你之所以会这么以为，是因为你在她的身上看到了不似凡人所应能有的高尚品质。\n\n是的，极为高尚的品质，比如超乎想象广阔的包容性，比如乐观的品质，比如在遇到敞着拉链的学长不敢提醒怕被打，这类让人感觉心也融化的特质，似乎证实了这是一个绝对的强者，远超自己想象的强，所以她有超乎想象的温柔。\n\n这很对啊，但是问题出在适用范围上，雄性的特质，坚毅，忠诚，勇敢，是这样的。但雌性的特质，其实远远相反，这是最恐怖的事实：雌性的美好品德，是栓出来的。\n\n说实话，这是难以想象的，栓人，怎么会产生美好的事物呢？但你一定意识到这一点，那就可以领会这是humankind的底层代码。栓，才能产出皓月般洁白，珍珠般无暇的人格。\n\nSo that pure, radiant girl — the one I ached for day and night, my emotional anchor for years — was actually forged through the harshest confinement. Nothing more than the product of strict parental control.\n\nAnd at that point, there was nothing left to [fear]. Her exquisite character didn\'t mean she was some being beyond my grasp; it meant she had endured a burden I could scarcely fathom.\n\nHow devastatingly sad. Yet I can\'t quite find where to place the grief — things happened as they did, and there\'s nothing to be done or said. The girl I carried in my heart is gone anyway. She speaks up now, shows herself, calls out people she doesn\'t like on Moments — and that\'s all for the best. After all, why would I ever want the person I cared for most to remain confined?\n\nCome to think of it, maybe the moment I was truly ensnared — and fell hopelessly in love — was when a middle school classmate told me: [She wrote a very bleak essay, about being forced to learn piano and play the perfect daughter her whole life, about not wanting to keep going, about wanting it all to end]\n\nI don\'t know if she was summoned to the teacher\'s office over it. But under the same circumstances, I never went.\n\nYes — this is the absolute urge to destroy. The absolute urge to destroy is first and foremost self-destruction: to tear down both the beauty and the confinement that shaped her. It\'s the ultimate rebellion. And maybe that\'s the real reason I\'ve never been able to let her go.\n\nThe wine has done its work, I\'m drunk now. So let\'s leave it here. I wonder if the sober version of myself will delete this. At least these are the words I need to say right now.',
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
