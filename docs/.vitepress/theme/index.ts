// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

// 自定义组件
import PostList from './components/PostList.vue'
import TagCloud from './components/TagCloud.vue'
import ArchiveList from './components/ArchiveList.vue'
import Comment from './components/Comment.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // 注册全局组件
    app.component('PostList', PostList)
    app.component('TagCloud', TagCloud)
    app.component('ArchiveList', ArchiveList)
    app.component('Comment', Comment)
  }
} satisfies Theme
