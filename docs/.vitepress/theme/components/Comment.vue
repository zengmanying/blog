<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useData } from 'vitepress'

const { isDark, page } = useData()
const container = ref<HTMLElement | null>(null)

// Giscus 配置 - 需要用户自行配置
// 访问 https://giscus.app/zh-CN 获取配置
const giscusConfig = {
  repo: 'your-username/your-repo', // 替换为你的 GitHub 仓库
  repoId: 'your-repo-id', // 替换为你的仓库 ID
  category: 'Announcements',
  categoryId: 'your-category-id', // 替换为你的分类 ID
  mapping: 'pathname',
  strict: '0',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'top',
  lang: 'zh-CN',
}

function loadGiscus() {
  if (!container.value) return
  
  // 清空容器
  container.value.innerHTML = ''
  
  // 创建 Giscus script
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.async = true
  script.crossOrigin = 'anonymous'
  
  // 设置属性
  script.setAttribute('data-repo', giscusConfig.repo)
  script.setAttribute('data-repo-id', giscusConfig.repoId)
  script.setAttribute('data-category', giscusConfig.category)
  script.setAttribute('data-category-id', giscusConfig.categoryId)
  script.setAttribute('data-mapping', giscusConfig.mapping)
  script.setAttribute('data-strict', giscusConfig.strict)
  script.setAttribute('data-reactions-enabled', giscusConfig.reactionsEnabled)
  script.setAttribute('data-emit-metadata', giscusConfig.emitMetadata)
  script.setAttribute('data-input-position', giscusConfig.inputPosition)
  script.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
  script.setAttribute('data-lang', giscusConfig.lang)
  
  container.value.appendChild(script)
}

// 切换主题时更新 Giscus 主题
function updateGiscusTheme() {
  const iframe = document.querySelector<HTMLIFrameElement>(
    'iframe.giscus-frame'
  )
  if (iframe) {
    iframe.contentWindow?.postMessage(
      {
        giscus: {
          setConfig: {
            theme: isDark.value ? 'dark' : 'light'
          }
        }
      },
      'https://giscus.app'
    )
  }
}

onMounted(() => {
  loadGiscus()
})

// 监听主题变化
watch(isDark, () => {
  updateGiscusTheme()
})

// 监听页面变化（路由切换）
watch(
  () => page.value.relativePath,
  () => {
    loadGiscus()
  }
)
</script>

<template>
  <div class="comment-section">
    <h3>评论</h3>
    <div ref="container" class="giscus-container"></div>
    <div class="giscus-notice">
      <p>
        💡 评论功能基于 
        <a href="https://giscus.app/zh-CN" target="_blank" rel="noopener">Giscus</a>，
        需要 GitHub 账号登录
      </p>
    </div>
  </div>
</template>

<style scoped>
.giscus-container {
  margin-top: 16px;
}

.giscus-notice {
  margin-top: 16px;
  padding: 12px 16px;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.giscus-notice a {
  color: var(--vp-c-brand-1);
}
</style>
