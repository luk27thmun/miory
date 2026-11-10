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
    },
    {
        id: 'stupid-ideas',
        title: '喜欢的时候愿意花费所有注意力',
        date: '2026-10-28',
        excerpt: '注意力过多会过拟合',
        content: 'ok啊我们来开个帖子记录一下自己对有好感的人可能会想出什么昏招。\n\n其实我很早就意识到我在尝试接近可爱的入的时候会想出很多神招，其中绝大部分起到了反作用，少部分不起作用。\n\n所以我现在经常pass自己冒出的鬼点子，但是不做又会去想，综上所述还是记录一下小心思，记完不想了也。\n\n1今天实验课专门等她弄好锥形瓶，送到加热板上时，把自己的位置腾出来给她。结果大伙在排队。\n\n2创业课需要用彩笔，也许我可以朝她借，然后借感谢之名送奶茶，送茉莉奶白因为我看小红书上说茉莉花有暗喻？？\n\n不过这太蠢了我觉得，如果她get到不就等于表白了？也不是很熟不要这么搞比较好。\n\n虽然确实想请她喝奶茶吧。\n\n3为什么她不给朋友圈点赞呢，除了很久以前一张我家猫的，也许她觉得我这人挺无趣的？说实话这些朋友圈确实有孔雀开屏的意味在。\n\n其实接近她也许不是一个好的选择，因为首先我的恶名远扬，其次我接触过她的舍友1得罪过她的舍友2，假如最后真谈上了，感觉会很麻烦，假如最后没谈上，那更麻烦。\n\n4她穿的鞋子挺可爱的，虽然好像就是普通的板鞋。',
        tags: ['床上随笔']
    },
    {
        id: 'never-forget',
        title: '灯火阑珊处',
        date: '2026-11-01',
        excerpt: '似你三分我便慌了神',
        content: '世界上没有两片相同的雪花，但看见的时候我真要尿了。\n\n行走在现实里我深知知行合一的难度，身体和大脑在要紧时往往有自己的想法，此时意识只是个无能的丈夫，坐视事由发展。\n\n所以在夜市上遇见时，我的潜意识先是注意到了在如故人般小步腾挪又俏皮的步伐，惊讶于那熟悉的羊脂般白皮肤和下颌线，最后震撼于那九成相似的眉眼和气质，又在对方投来目光后飞速移开视线。\n\n这一切都结束后，才轮到表意识陷入巨大的摇晃，以及控制自己不在great shock躺在地上抽搐流泪。\n\n也许旁观这段文字的人会觉得不知所谓，不过我所言非虚。我当然知道可怜脑瓜所以为的那个人不会出现在这里，何况她已不似从前。但是，\n\n毕竟很久没有见过了，很想啊\n\n在心情平复下来之后我有在想要不要上去恰个v，不过马上就把这荒唐想法pass了，毕竟代餐文学这种东西在三次元还是不要有，过于反道德了，\n\n错过了就是错过了，假如刻舟求剑，对不起眼前的人，对不起过去的她，对不起过去的自己。这样的结论，在身临其境后才得出来呢。\n\n说实话，虽然话头说的很明白，但现在心情憋闷得很。倒也不是伤心，只是。。。。好吧我也不知道怎么描述，远远超过言语所能及了。\n\n真想去门口的居酒屋框框造几瓶生啤干到不再思考。但是今晚已经吃了饭，又要工作，又要做作业，明早还有早八展示课，只得来自习的地方敲键盘。自习的地方在食堂旁，故“食堂随笔”而非“酒馆随笔”吧。',
        tags: ['食堂随笔']
    },
    {
        id: 'difficulty-of-love',
        title: '谈上恋爱是最困难的学科',
        date: '2026-11-09',
        excerpt: '仅限丑人哈',
        content: '我最擅长的是有机化学，不管是实验还是理论，实验如同做饭般简单，理论更是合乎直觉——电子的流动方向如同静止在空中的苹果的运动轨迹，显而易见。\n\n次一些是分析和物化这类，不过也几乎没有困难就可以理解。再次一些是数学，物理，生物这些或更具体，或更抽象的学科，需要认真上课听，才得以掌握本科水平的知识。\n\n再往下，就称不上是[擅长]了，比如英语，哲学，精神分析，经济，学习其的时候，能感受到明显的阻碍，但姑且保持在正常人偏上的程度。至于语文，政治，历史，这类学科，就完全无法体会到学习的快感，只得死记硬背下知识与公式，然后在应试中生硬地使用，以取得高分。\n\n那么，我最最最不擅长的科目，恐怕就是与和我喜欢的女生接触了。对我来说，这是一个评级体系模糊，正反馈极少负反馈很多，非常容易过拟合的科目。\n\n在和喜欢的女生搭话时，我总要注意这些那些各种东西，平时，也会幻想和她在一起的各种生活日常，这些都是极大消耗精力的。同时，脑袋也会冒出各种和她接触的昏招，其中大部分都蠢得要命。我还得花精力否决脑袋的想法。\n\n不知道长得帅的男生会不会有和女生交往的成就感，反正我是没有的，我只觉得很难。\n\n真是难啊，数学题我起码敢用不同手段去尝试，可对自己喜欢的人，我是丝毫不敢逾矩的。好比一场至关重要的考试，不允许你浪费丝毫时间，，于是你只能不敢去做任何尝试，生怕浪费了时间。在考试里的成本是时间，在关系中成本就是好感啊。\n\n真是难啊。。。。。更让人痛苦的在于，我的大脑还会强迫自己不停得去想这件事，因为我喜欢她，所以即使很难很痛苦还是会去想。\n\n真是麻烦，，，，只有在居酒屋这里醉上一番才能清空脑中之杂乱思绪，尽管我还有很多作业要做，尽管这开销对我来说并不算小，一周一次四百块钱，我恐怕是得少存1/3的钱了。\n\n不醉不休罢。。。',
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
