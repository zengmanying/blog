<script setup lang="ts">
import { computed } from 'vue'
import { data as posts } from '../posts.data'
import { withBase } from 'vitepress'

interface Props {
  limit?: number
  tag?: string
  category?: string
}

const props = withDefaults(defineProps<Props>(), {
  limit: 0,
  tag: '',
  category: ''
})

const filteredPosts = computed(() => {
  let result = [...posts]
  
  // 按标签筛选
  if (props.tag) {
    result = result.filter(post => 
      post.frontmatter.tags?.includes(props.tag)
    )
  }
  
  // 按分类筛选
  if (props.category) {
    result = result.filter(post => 
      post.frontmatter.category === props.category
    )
  }
  
  // 按日期排序（最新在前）
  result.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date || 0)
    const dateB = new Date(b.frontmatter.date || 0)
    return dateB.getTime() - dateA.getTime()
  })
  
  // 限制数量
  if (props.limit > 0) {
    result = result.slice(0, props.limit)
  }
  
  return result
})

function formatDate(dateStr: string): string {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
  <ul class="post-list">
    <li v-for="post in filteredPosts" :key="post.url" class="post-item">
      <h3 class="post-title">
        <a :href="withBase(post.url)">{{ post.frontmatter.title }}</a>
      </h3>
      <div class="post-meta">
        <span class="date">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          {{ formatDate(post.frontmatter.date) }}
        </span>
        <div v-if="post.frontmatter.tags" class="tags">
          <a 
            v-for="tag in post.frontmatter.tags" 
            :key="tag" 
            :href="withBase(`/tags?tag=${tag}`)"
            class="tag"
          >
            #{{ tag }}
          </a>
        </div>
      </div>
      <p v-if="post.frontmatter.description" class="post-excerpt">
        {{ post.frontmatter.description }}
      </p>
    </li>
  </ul>
  
  <div v-if="filteredPosts.length === 0" class="no-posts">
    <p>暂无文章</p>
  </div>
</template>

<style scoped>
.no-posts {
  text-align: center;
  padding: 40px;
  color: var(--vp-c-text-3);
}
</style>
