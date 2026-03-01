import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "前端开发者博客",
  description: "分享前端技术、最佳实践和开发心得",
  lang: 'zh-CN',
  
  // 部署到 GitHub Pages，仓库名为 blog
  base: '/blog/',
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'zh_CN' }],
  ],

  // 启用 lastUpdated
  lastUpdated: true,

  // 主题配置
  themeConfig: {
    // Logo
    logo: '/logo.svg',
    
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '项目实践', link: '/notes/' },
      { text: '文章', link: '/posts/' },
      { text: '关于', link: '/about' }
    ],

    // 侧边栏
    sidebar: {
      '/notes/': [
        {
          text: '概览',
          items: [
            { text: '项目实践首页', link: '/notes/' }
          ]
        },
        {
          text: '项目总结',
          items: [
            { text: '全景展厅工坊项目总结', link: '/notes/全景展厅工坊项目总结' },
            // { text: '低代码平台项目总结', link: '/notes/低代码平台项目总结' },
            { text: '可视化编辑器', link: '/notes/可视化编辑器' },
            { text: '企业级组件库实战', link: '/notes/企业级组件库实战：模块化架构与组件设计落地指南' },
            { text: '智慧楼宇', link: '/notes/亚信大厦智慧楼宇3D可视化平台' },
            { text: '江苏移动 AR 小程序', link: '/notes/江苏移动AR小程序' },
            { text: '低空经济 3D 地理时空可视化', link: '/notes/低空经济3D地理时空可视化项目' }
          ]
        }
      ],

      '/posts/': [
        {
          text: '最新文章',
          items: [
            { text: 'Trae + MasterGo 前端一键生成页面', link: '/posts/Trae + MasterGo 前端一键生成页面' },
            { text: '快速搞定大屏可视化', link: '/posts/快速搞定大屏可视化' },
            { text: '前端最新技术栈 Vite2 + Vue3 + TypeScript + Pinia 实战', link: '/posts/前端最新技术栈 Vite2 + Vue3 + TypeScript + Pinia 实战' }
          ]
        },
        // {
        //   text: '前端基础',
        //   items: [
        //     { text: 'Promise 深入理解与手写实现', link: '/posts/Promise深入理解与手写实现' }
        //   ]
        // },
        // {
        //   text: '框架',
        //   items: [
        //     { text: 'Vue3 新特性与组合式 API', link: '/posts/Vue3新特性与组合式API' },
        //     { text: 'Vue 3 组合式 API 完全指南', link: '/posts/vue3-composition-api' }
        //   ]
        // },
        // {
        //   text: 'TypeScript',
        //   items: [
        //     { text: 'TypeScript 最佳实践指南', link: '/posts/typescript-best-practices' }
        //   ]
        // },
        // {
        //   text: '测试',
        //   items: [
        //     { text: 'Cypress 端到端测试实战', link: '/posts/Cypress端到端测试实战' }
        //   ]
        // },
      ],
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername' }
    ],

    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present'
    },

    // 搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },

    // 文档页脚
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 大纲标题
    outlineTitle: '本页目录',
    
    // 最后更新时间文本
    lastUpdatedText: '最后更新',

    // 返回顶部文本
    returnToTopLabel: '返回顶部',

    // 外部链接图标
    externalLinkIcon: true
  },

  // Markdown 配置
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true
  },

  // 站点地图
  sitemap: {
    hostname: 'https://yourusername.github.io'
  }
})
