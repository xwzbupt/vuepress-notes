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
        ["meta", {name: "apple-mobile-web-app-capable", content: "yes"}]
    ],
    plugins: {
        '@vuepress/back-to-top': true,
        '@vuepress/medium-zoom': {
            selector: 'img.zoom-custom-imgs',
            // medium-zoom options here
            // See: https://github.com/francoischalifour/medium-zoom#options
            options: {
                margin: 16
            }
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
                    { text: 'GitHub 仓库', link: 'https://github.com/zlgopen/awtk' },
                    { text: 'Gitee 仓库', link: 'https://gitee.com/zlgopen/awtk' },
                ]
            }
        ],
        sidebar: [
            {
              title: 'Guide',
              collapsable: false,
              children: ['/guide/']
            }
        ]
    }
};
