module.exports = {
    port: "8080",
    dest: "docs",
    ga: "UA-xxxxx-1",
    base: "/",
    markdown: {
        lineNumbers: true,
        externalLinks: {
            target: '_blank', rel: 'noopener noreferrer'
        }
    },
    locales: {
        "/": {
            lang: "zh-CN",
            title: "Weiser的笔记",
            description: "包含：算法"
        }
    },
    head: [
        ["link", {rel: "icon", href: `/favicon.ico`}],
        ["meta", {name: "robots", content: "all"}],
        ["meta", {name: "author", content: "pdai"}],
        ["meta", {name: "keywords", content: "Java 全栈知识体系, java体系, java知识体系, java框架,java详解,java学习路线,java spring, java面试, 知识体系, java技术体系, java编程, java编程指南,java开发体系, java开发,java教程,java,java数据结构, 算法, 开发基础"}],
        ["meta", {name: "apple-mobile-web-app-capable", content: "yes"}],
    ],
    plugins: {
        '@vuepress/back-to-top': true,
        // 'vuepress-plugin-auto-sidebar': {
        //       titleMode: "titlecase", // 标题模式
        //       collapsable: true,     // 设置为true,开启折叠
        //       sidebarDepth: 0,    // 标题的深度
        //       collapseList: [
        //         '/algorithm'
        //       ],
        //       uncollapseList: [
        //         // 不折叠的路由列表
        //       ]
        // },
        //latex插件，本身就不支持$2^2$这种公式
        '@renovamen/katex': true,
        //mathjax插件的两种写法，好像都对
        'mathjax': true,
        'vuepress-plugin-mathjax': true,
        //滚动时自动激活侧边栏链接插件
        '@vuepress/active-header-links': {
            sidebarLinkSelector: ".sidebar-link",
            headerAnchorSelector: ".header-anchor",
        },
        //滚动时的进度条插件
        '@vuepress/nprogress': true,
        //图片缩放插件
        '@vuepress/medium-zoom': {
	    selector: '.theme-container :not(a) img',
            // medium-zoom options here
            // See: https://github.com/francoischalifour/medium-zoom#options
            options: {
                margin: 16
            }
        },
        'vuepress-plugin-nuggets-style-copy': {
            copyText: "复制代码",
            tip: {
                content: "复制成功"
            }
        },
        '@vuepress/active-header-links': {
            sidebarLinkSelector: ".sidebar-link",
            headerAnchorSelector: ".header-anchor"
        }
    }, 
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            {
                text: '知识库',
                items: [
                    { text: 'FAQ', link: '/KnowledgeBase/FAQ/1.AWTK' },
                    { text: 'HowTo', link: '/KnowledgeBase/HowTo/api_doc' }
                ]
            },
            {
                text: '了解更多',
                items: [
                    { text: 'AWTK 官网', link: 'https://www.zlg.cn/index/pub/awtk.html' },
                    { text: 'AWTK 云平台', link: 'https://awtk.zlg.cn/' },
                    { text: 'GitHub 仓库', link: 'https://github.com/xwzbupt/vuepress-notes'},
                    { text: 'Gitee 仓库', link: 'https://gitee.com/zlgopen/awtk' },
                ]
            }
        ],
        sidebar: {
            '/doc/algorithm/整数/': [
                '1.整数专题',
                '整数'
            ],          
            '/doc/algorithm/二叉树/': [
                {
                    title: '1',
                    Children: ['', '二叉树']
                },
            ]
        }
    },
};
