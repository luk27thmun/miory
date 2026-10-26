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
        content: '事情要从twi上的一篇帖子说起，最近我在和一位长辈想办法做外贸，用了一下27这个域名作为示范站。于是突发奇想在谷歌上搜索下了下自己\n\n第一个好像是我的月寄主页，尔后的是一些各类论坛乃至知乎a站这类的链接。令人意外的是，有一个x上的帖子，竟然转发了我的知乎回答。\n\n这篇回答截止目前竟然有了将近200万的浏览，也算是小火一把。不过一年过去，再看这篇回答，则是完全的荒谬。\n\n让我们来看看原文是怎么写的：\n\n[怎么才能在非常漂亮的女生面前不自卑？\n\n你想c她，道德或是什么东西让你为这个想法感到羞耻，你不承认这个想法。于是你完成了对自己的精神阉割，多余的星欲以畏惧形式代偿出来。\n\n目前实操下来，最有效的方法是：看着对方整个人，想象她和爷们一样有把儿藏在衣服下面。然后就可以像和陌生哥们交流一样，礼貌又不拘谨了。]\n\n错的彻彻底底！这不仅没有指出真正原因，还给出了完全相反的路线！真正的情况，我其实也是在不久前才搞明白：\n\n[产生畏惧]的机理，在于你认为对方是[极为强大的个体]，而你之所以会这么以为，是因为你在她的身上看到了不似凡人所应能有的高尚品质。\n\n是的，极为高尚的品质，比如超乎想象广阔的包容性，比如乐观的品质，比如在遇到敞着拉链的学长不敢提醒怕被打，这类让人感觉心也融化的特质，似乎证实了这是一个绝对的强者，远超自己想象的强，所以她有超乎想象的温柔。\n\n这很对啊，但是问题出在适用范围上，雄性的特质，坚毅，忠诚，勇敢，是这样的。但雌性的特质，其实远远相反，这是最恐怖的事实：雌性的美好品德，是栓出来的。\n\n说实话，这是难以想象的，栓人，怎么会产生美好的事物呢？但你一定意识到这一点，那就可以领会这是humankind的底层代码。栓，才能产出皓月般洁白，珍珠般无暇的人格。\n\n所以，那个纯白美好的她，实际上是被极致地栓所造就的，我所日夜思念的女孩，我念念不忘作为精神支柱几年的女孩，不过是被家长严厉管辖的结果。\n\n至此，那便没什么[好畏惧的]了，她的性格极尽美丽，不是因为她是超出我理解的个体，而是因为她承受了难以想象的栓。\n\n这是多么令人悲伤的事啊！但是此时我又找不到什么可悲伤着落点，事情是这样发生了，我也没有办法说什么，至于我心里印下的那个她，早已不再见了。她变得敢于展示，敢于表达，敢于在朋友圈里挂自己不喜欢的人，那都是好事呀，毕竟，我怎么会希望自己最心爱的人被栓呢？\n\n说到这里，我回想起来，真正被她所俘获到，进而不可救药地恋上她，可能是在听到初中同学说：[她写了一篇非常灰暗的作文，大概意思是自己从小到大被逼学钢琴，当乖乖女，不想再坚持，想结束]\n\n不知道她当时是否有被邀请至办公室，不过我在相同的状况下，倒是没有应邀。\n\n是啊，这是绝对的摧毁欲，绝对的摧毁欲就是对自己的摧毁，把美好和造就她的栓全部摧毁，是极致的反叛，也许这才是我对她难以忘怀的真正原因吧。\n\n酒已至此，我已经醺醉了，那么就到这里吧，不知道清醒的自己是否会删掉这一篇，至少这些是此刻的我想说的。',
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
