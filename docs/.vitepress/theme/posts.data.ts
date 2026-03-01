import { createContentLoader } from 'vitepress'

export interface Post {
  url: string
  frontmatter: {
    title: string
    date: string
    description?: string
    tags?: string[]
    category?: string
    author?: string
    cover?: string
  }
}

declare const data: Post[]
export { data }

export default createContentLoader('posts/*.md', {
  // 包含 frontmatter
  includeSrc: false,
  
  transform(rawData): Post[] {
    return rawData
      .filter(page => !page.url.endsWith('/posts/'))
      .map(page => ({
        url: page.url,
        frontmatter: page.frontmatter as Post['frontmatter']
      }))
      .sort((a, b) => {
        const dateA = new Date(a.frontmatter.date || 0)
        const dateB = new Date(b.frontmatter.date || 0)
        return dateB.getTime() - dateA.getTime()
      })
  }
})
