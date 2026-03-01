<script setup lang="ts">
import { computed } from 'vue'
import { data as posts } from '../posts.data'
import { withBase } from 'vitepress'

interface ArchiveGroup {
  year: number
  posts: Array<{
    url: string
    title: string
    date: string
    dateFormatted: string
  }>
}

// 按年份分组文章
const archiveGroups = computed<ArchiveGroup[]>(() => {
  const groups: Record<number, ArchiveGroup['posts']> = {}
  
  // 先按日期排序
  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = new Date(a.frontmatter.date || 0)
    const dateB = new Date(b.frontmatter.date || 0)
    return dateB.getTime() - dateA.getTime()
  })
  
  // 按年份分组
  sortedPosts.forEach(post => {
    const date = new Date(post.frontmatter.date || 0)
    const year = date.getFullYear()
    
    if (!groups[year]) {
      groups[year] = []
    }
    
    groups[year].push({
      url: post.url,
      title: post.frontmatter.title || '无标题',
      date: post.frontmatter.date || '',
      dateFormatted: date.toLocaleDateString('zh-CN', {
        month: '2-digit',
        day: '2-digit'
      })
    })
  })
  
  // 转换为数组并按年份降序排序
  return Object.entries(groups)
    .map(([year, posts]) => ({
      year: parseInt(year),
      posts
    }))
    .sort((a, b) => b.year - a.year)
})

// 计算总文章数
const totalPosts = computed(() => posts.length)
</script>

<template>
  <div class="archive-list">
    <p class="archive-summary">
      共 <strong>{{ totalPosts }}</strong> 篇文章
    </p>
    
    <div v-for="group in archiveGroups" :key="group.year" class="archive-group">
      <h2 class="archive-year">{{ group.year }}</h2>
      <ul class="archive-posts">
        <li v-for="post in group.posts" :key="post.url" class="archive-post">
          <span class="date">{{ post.dateFormatted }}</span>
          <span class="title">
            <a :href="withBase(post.url)">{{ post.title }}</a>
          </span>
        </li>
      </ul>
    </div>
    
    <div v-if="archiveGroups.length === 0" class="no-archives">
      <p>暂无文章</p>
    </div>
  </div>
</template>

<style scoped>
.archive-summary {
  font-size: 1rem;
  color: var(--vp-c-text-2);
  margin-bottom: 24px;
}

.archive-summary strong {
  color: var(--vp-c-brand-1);
  font-size: 1.25rem;
}

.no-archives {
  text-align: center;
  padding: 40px;
  color: var(--vp-c-text-3);
}
</style>
