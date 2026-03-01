<script setup lang="ts">
import { computed } from 'vue'
import { data as posts } from '../posts.data'
import { withBase } from 'vitepress'

// 统计所有标签及其出现次数
const tagStats = computed(() => {
  const stats: Record<string, number> = {}
  
  posts.forEach(post => {
    const tags = post.frontmatter.tags || []
    tags.forEach((tag: string) => {
      stats[tag] = (stats[tag] || 0) + 1
    })
  })
  
  // 转换为数组并按数量排序
  return Object.entries(stats)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
})
</script>

<template>
  <div class="tag-cloud">
    <a 
      v-for="tag in tagStats" 
      :key="tag.name"
      :href="withBase(`/tags?tag=${tag.name}`)"
      class="tag"
    >
      #{{ tag.name }}
      <span class="count">({{ tag.count }})</span>
    </a>
  </div>
  
  <div v-if="tagStats.length === 0" class="no-tags">
    <p>暂无标签</p>
  </div>
</template>

<style scoped>
.no-tags {
  text-align: center;
  padding: 40px;
  color: var(--vp-c-text-3);
}
</style>
